package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudflare-developer-platform-sdk/go"
	"github.com/voxgig-sdk/cloudflare-developer-platform-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-developer-platform-sdk/go/utility/struct"
)

func TestFlagEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Flag(nil)
		if ent == nil {
			t.Fatal("expected non-nil FlagEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"flag": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Flag(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.Flag(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := flagBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "flag." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAG_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		flagRef01Ent := client.Flag(nil)
		flagRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "flag"}), "flag_ref01"))
		flagRef01Data["account_id"] = setup.idmap["account01"]
		flagRef01Data["app_id"] = setup.idmap["app01"]

		flagRef01DataResult, err := flagRef01Ent.Create(flagRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		flagRef01Data = core.ToMapAny(entityData(flagRef01DataResult))
		if flagRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if flagRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		flagRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
			"app_id": setup.idmap["app01"],
		}

		flagRef01ListResult, err := flagRef01Ent.List(flagRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		flagRef01List, flagRef01ListOk := flagRef01ListResult.([]any)
		if !flagRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", flagRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(flagRef01List), map[string]any{"id": flagRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		flagRef01DataUp0Up := map[string]any{
			"id": flagRef01Data["id"],
			"account_id": setup.idmap["account_id"],
			"app_id": setup.idmap["app_id"],
		}

		flagRef01MarkdefUp0Name := "default_variation"
		flagRef01MarkdefUp0Value := fmt.Sprintf("Mark01-flag_ref01_%d", setup.now)
		flagRef01DataUp0Up[flagRef01MarkdefUp0Name] = flagRef01MarkdefUp0Value

		flagRef01ResdataUp0Result, err := flagRef01Ent.Update(flagRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		flagRef01ResdataUp0 := core.ToMapAny(entityData(flagRef01ResdataUp0Result))
		if flagRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if flagRef01ResdataUp0["id"] != flagRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if flagRef01ResdataUp0[flagRef01MarkdefUp0Name] != flagRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", flagRef01MarkdefUp0Name, flagRef01ResdataUp0[flagRef01MarkdefUp0Name])
		}

		// LOAD
		flagRef01MatchDt0 := map[string]any{
			"id": flagRef01Data["id"],
		}
		flagRef01DataDt0Loaded, err := flagRef01Ent.Load(flagRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		flagRef01DataDt0LoadResult := core.ToMapAny(entityData(flagRef01DataDt0Loaded))
		if flagRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if flagRef01DataDt0LoadResult["id"] != flagRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		flagRef01MatchRm0 := map[string]any{
			"id": flagRef01Data["id"],
		}
		_, err = flagRef01Ent.Remove(flagRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		flagRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
			"app_id": setup.idmap["app01"],
		}

		flagRef01ListRt0Result, err := flagRef01Ent.List(flagRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		flagRef01ListRt0, flagRef01ListRt0Ok := flagRef01ListRt0Result.([]any)
		if !flagRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", flagRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(flagRef01ListRt0), map[string]any{"id": flagRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func flagBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "flag", "FlagTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read flag test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse flag test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"flag01", "flag02", "flag03", "app01", "app02", "app03", "account01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAG_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAG_ENTID": idmap,
		"CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAG_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
	}
	// Add app_id alias for update test.
	if idmapResolved["app_id"] == nil {
		idmapResolved["app_id"] = idmapResolved["app01"]
	}

	if env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCloudflareDeveloperPlatformSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}

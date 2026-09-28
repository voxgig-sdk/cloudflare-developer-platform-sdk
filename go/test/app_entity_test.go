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

func TestAppEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.App(nil)
		if ent == nil {
			t.Fatal("expected non-nil AppEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"app": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.App(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.App(nil).Stream("list", nil, nil) {
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
		setup := appBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "app." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DEVELOPER_PLATFORM_TEST_APP_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		appRef01Ent := client.App(nil)
		appRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "app"}), "app_ref01"))
		appRef01Data["account_id"] = setup.idmap["account01"]

		appRef01DataResult, err := appRef01Ent.Create(appRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		appRef01Data = core.ToMapAny(entityData(appRef01DataResult))
		if appRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if appRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		appRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		appRef01ListResult, err := appRef01Ent.List(appRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		appRef01List, appRef01ListOk := appRef01ListResult.([]any)
		if !appRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", appRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(appRef01List), map[string]any{"id": appRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		appRef01DataUp0Up := map[string]any{
			"id": appRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		appRef01MarkdefUp0Name := "name"
		appRef01MarkdefUp0Value := fmt.Sprintf("Mark01-app_ref01_%d", setup.now)
		appRef01DataUp0Up[appRef01MarkdefUp0Name] = appRef01MarkdefUp0Value

		appRef01ResdataUp0Result, err := appRef01Ent.Update(appRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		appRef01ResdataUp0 := core.ToMapAny(entityData(appRef01ResdataUp0Result))
		if appRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if appRef01ResdataUp0["id"] != appRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if appRef01ResdataUp0[appRef01MarkdefUp0Name] != appRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", appRef01MarkdefUp0Name, appRef01ResdataUp0[appRef01MarkdefUp0Name])
		}

		// LOAD
		appRef01MatchDt0 := map[string]any{
			"id": appRef01Data["id"],
		}
		appRef01DataDt0Loaded, err := appRef01Ent.Load(appRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		appRef01DataDt0LoadResult := core.ToMapAny(entityData(appRef01DataDt0Loaded))
		if appRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if appRef01DataDt0LoadResult["id"] != appRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		appRef01MatchRm0 := map[string]any{
			"id": appRef01Data["id"],
		}
		_, err = appRef01Ent.Remove(appRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		appRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		appRef01ListRt0Result, err := appRef01Ent.List(appRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		appRef01ListRt0, appRef01ListRt0Ok := appRef01ListRt0Result.([]any)
		if !appRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", appRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(appRef01ListRt0), map[string]any{"id": appRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func appBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "app", "AppTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read app test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse app test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"app01", "app02", "app03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_DEVELOPER_PLATFORM_TEST_APP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_DEVELOPER_PLATFORM_TEST_APP_ENTID": idmap,
		"CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_APP_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
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

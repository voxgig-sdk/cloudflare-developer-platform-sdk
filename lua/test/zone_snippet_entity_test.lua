-- ZoneSnippet entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-developer-platform_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ZoneSnippetEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ZoneSnippet(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["zone_snippet"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:ZoneSnippet(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:ZoneSnippet(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = zone_snippet_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"list", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "zone_snippet." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DEVELOPER_PLATFORM_TEST_ZONE_SNIPPET_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local zone_snippet_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.zone_snippet")))
    local zone_snippet_ref01_data = nil
    if #zone_snippet_ref01_data_raw > 0 then
      zone_snippet_ref01_data = helpers.to_map(zone_snippet_ref01_data_raw[1][2])
    end

    -- LIST
    local zone_snippet_ref01_ent = client:ZoneSnippet(nil)
    local zone_snippet_ref01_match = {
      ["zone_id"] = setup.idmap["zone01"],
    }

    local zone_snippet_ref01_list_result, err = zone_snippet_ref01_ent:list(zone_snippet_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(zone_snippet_ref01_list_result)

    -- UPDATE
    local zone_snippet_ref01_data_up0_up = {
      id = zone_snippet_ref01_data["id"],
    }

    local zone_snippet_ref01_resdata_up0_result, err = zone_snippet_ref01_ent:update(zone_snippet_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local zone_snippet_ref01_resdata_up0 = helpers.to_map(type(zone_snippet_ref01_resdata_up0_result) == 'table' and zone_snippet_ref01_resdata_up0_result.data_get and zone_snippet_ref01_resdata_up0_result:data_get() or zone_snippet_ref01_resdata_up0_result)
    assert.is_not_nil(zone_snippet_ref01_resdata_up0)
    assert.are.equal(zone_snippet_ref01_resdata_up0["id"], zone_snippet_ref01_data_up0_up["id"])

    -- LOAD
    local zone_snippet_ref01_match_dt0 = {
      id = zone_snippet_ref01_data["id"],
    }
    local zone_snippet_ref01_data_dt0_loaded, err = zone_snippet_ref01_ent:load(zone_snippet_ref01_match_dt0, nil)
    assert.is_nil(err)
    local zone_snippet_ref01_data_dt0_load_result = helpers.to_map(type(zone_snippet_ref01_data_dt0_loaded) == 'table' and zone_snippet_ref01_data_dt0_loaded.data_get and zone_snippet_ref01_data_dt0_loaded:data_get() or zone_snippet_ref01_data_dt0_loaded)
    assert.is_not_nil(zone_snippet_ref01_data_dt0_load_result)
    assert.are.equal(zone_snippet_ref01_data_dt0_load_result["id"], zone_snippet_ref01_data["id"])

  end)
end)

function zone_snippet_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/zone_snippet/ZoneSnippetTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read zone_snippet test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "zone_snippet01", "zone_snippet02", "zone_snippet03", "zone01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("CLOUDFLARE_DEVELOPER_PLATFORM_TEST_ZONE_SNIPPET_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_ZONE_SNIPPET_ENTID"] = idmap,
    ["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_ZONE_SNIPPET_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end

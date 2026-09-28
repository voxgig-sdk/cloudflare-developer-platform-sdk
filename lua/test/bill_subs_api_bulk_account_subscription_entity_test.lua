-- BillSubsApiBulkAccountSubscription entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-developer-platform_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("BillSubsApiBulkAccountSubscriptionEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:BillSubsApiBulkAccountSubscription(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = bill_subs_api_bulk_account_subscription_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "bill_subs_api_bulk_account_subscription." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DEVELOPER_PLATFORM_TEST_BILL_SUBS_API_BULK_ACCOUNT_SUBSCRIPTION_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local bill_subs_api_bulk_account_subscription_ref01_ent = client:BillSubsApiBulkAccountSubscription(nil)
    local bill_subs_api_bulk_account_subscription_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.bill_subs_api_bulk_account_subscription"), "bill_subs_api_bulk_account_subscription_ref01"))
    bill_subs_api_bulk_account_subscription_ref01_data["account_id"] = setup.idmap["account01"]

    local bill_subs_api_bulk_account_subscription_ref01_data_result, err = bill_subs_api_bulk_account_subscription_ref01_ent:create(bill_subs_api_bulk_account_subscription_ref01_data, nil)
    assert.is_nil(err)
    bill_subs_api_bulk_account_subscription_ref01_data = helpers.to_map(type(bill_subs_api_bulk_account_subscription_ref01_data_result) == 'table' and bill_subs_api_bulk_account_subscription_ref01_data_result.data_get and bill_subs_api_bulk_account_subscription_ref01_data_result:data_get() or bill_subs_api_bulk_account_subscription_ref01_data_result)
    assert.is_not_nil(bill_subs_api_bulk_account_subscription_ref01_data)

  end)
end)

function bill_subs_api_bulk_account_subscription_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/bill_subs_api_bulk_account_subscription/BillSubsApiBulkAccountSubscriptionTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read bill_subs_api_bulk_account_subscription test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "bill_subs_api_bulk_account_subscription01", "bill_subs_api_bulk_account_subscription02", "bill_subs_api_bulk_account_subscription03", "account01" },
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
  local entid_env_raw = os.getenv("CLOUDFLARE_DEVELOPER_PLATFORM_TEST_BILL_SUBS_API_BULK_ACCOUNT_SUBSCRIPTION_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_BILL_SUBS_API_BULK_ACCOUNT_SUBSCRIPTION_ENTID"] = idmap,
    ["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_BILL_SUBS_API_BULK_ACCOUNT_SUBSCRIPTION_ENTID"])
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

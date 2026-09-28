# FlagshipEvaluationResult entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareDeveloperPlatform_sdk"
require_relative "runner"

class FlagshipEvaluationResultEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareDeveloperPlatformSDK.test(nil, nil)
    ent = testsdk.FlagshipEvaluationResult(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = flagship_evaluation_result_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "flagship_evaluation_result." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_EVALUATION_RESULT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    flagship_evaluation_result_ref01_ent = client.FlagshipEvaluationResult(nil)
    flagship_evaluation_result_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.flagship_evaluation_result"), "flagship_evaluation_result_ref01"))
    flagship_evaluation_result_ref01_data["account_id"] = setup[:idmap]["account01"]
    flagship_evaluation_result_ref01_data["app_id"] = setup[:idmap]["app01"]

    flagship_evaluation_result_ref01_data_result = flagship_evaluation_result_ref01_ent.create(flagship_evaluation_result_ref01_data, nil)
    flagship_evaluation_result_ref01_data = Helpers.to_map(flagship_evaluation_result_ref01_data_result.respond_to?(:data_get) ? flagship_evaluation_result_ref01_data_result.data_get : flagship_evaluation_result_ref01_data_result)
    assert !flagship_evaluation_result_ref01_data.nil?

    # LOAD
    flagship_evaluation_result_ref01_match_dt0 = {}
    flagship_evaluation_result_ref01_data_dt0_loaded = flagship_evaluation_result_ref01_ent.load(flagship_evaluation_result_ref01_match_dt0, nil)
    assert !flagship_evaluation_result_ref01_data_dt0_loaded.nil?

  end
end

def flagship_evaluation_result_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "flagship_evaluation_result", "FlagshipEvaluationResultTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareDeveloperPlatformSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["flagship_evaluation_result01", "flagship_evaluation_result02", "flagship_evaluation_result03", "app01", "app02", "app03", "account01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_EVALUATION_RESULT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_EVALUATION_RESULT_ENTID" => idmap,
    "CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_EVALUATION_RESULT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY"],
      },
      extra || {},
    ])
    client = CloudflareDeveloperPlatformSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end

# Flag entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareDeveloperPlatform_sdk"
require_relative "runner"

class FlagEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareDeveloperPlatformSDK.test(nil, nil)
    ent = testsdk.Flag(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "flag" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareDeveloperPlatformSDK.test(seed, nil)
    seen = base.Flag(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareDeveloperPlatformConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareDeveloperPlatformSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Flag(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = flag_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "flag." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAG_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    flag_ref01_ent = client.Flag(nil)
    flag_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.flag"), "flag_ref01"))
    flag_ref01_data["account_id"] = setup[:idmap]["account01"]
    flag_ref01_data["app_id"] = setup[:idmap]["app01"]

    flag_ref01_data_result = flag_ref01_ent.create(flag_ref01_data, nil)
    flag_ref01_data = Helpers.to_map(flag_ref01_data_result.respond_to?(:data_get) ? flag_ref01_data_result.data_get : flag_ref01_data_result)
    assert !flag_ref01_data.nil?
    assert !flag_ref01_data["id"].nil?

    # LIST
    flag_ref01_match = {
      "account_id" => setup[:idmap]["account01"],
      "app_id" => setup[:idmap]["app01"],
    }

    flag_ref01_list_result = flag_ref01_ent.list(flag_ref01_match, nil)
    assert flag_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(flag_ref01_list_result),
      { "id" => flag_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    flag_ref01_data_up0_up = {
      "id" => flag_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
      "app_id" => setup[:idmap]["app_id"],
    }

    flag_ref01_markdef_up0_name = "default_variation"
    flag_ref01_markdef_up0_value = "Mark01-flag_ref01_#{setup[:now]}"
    flag_ref01_data_up0_up[flag_ref01_markdef_up0_name] = flag_ref01_markdef_up0_value

    flag_ref01_resdata_up0_result = flag_ref01_ent.update(flag_ref01_data_up0_up, nil)
    flag_ref01_resdata_up0 = Helpers.to_map(flag_ref01_resdata_up0_result.respond_to?(:data_get) ? flag_ref01_resdata_up0_result.data_get : flag_ref01_resdata_up0_result)
    assert !flag_ref01_resdata_up0.nil?
    assert_equal flag_ref01_resdata_up0["id"], flag_ref01_data_up0_up["id"]
    assert_equal flag_ref01_resdata_up0[flag_ref01_markdef_up0_name], flag_ref01_markdef_up0_value

    # LOAD
    flag_ref01_match_dt0 = {
      "id" => flag_ref01_data["id"],
    }
    flag_ref01_data_dt0_loaded = flag_ref01_ent.load(flag_ref01_match_dt0, nil)
    flag_ref01_data_dt0_load_result = Helpers.to_map(flag_ref01_data_dt0_loaded.respond_to?(:data_get) ? flag_ref01_data_dt0_loaded.data_get : flag_ref01_data_dt0_loaded)
    assert !flag_ref01_data_dt0_load_result.nil?
    assert_equal flag_ref01_data_dt0_load_result["id"], flag_ref01_data["id"]

    # REMOVE
    flag_ref01_match_rm0 = {
      "id" => flag_ref01_data["id"],
    }
    flag_ref01_ent.remove(flag_ref01_match_rm0, nil)

    # LIST
    flag_ref01_match_rt0 = {
      "account_id" => setup[:idmap]["account01"],
      "app_id" => setup[:idmap]["app01"],
    }

    flag_ref01_list_rt0_result = flag_ref01_ent.list(flag_ref01_match_rt0, nil)
    assert flag_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(flag_ref01_list_rt0_result),
      { "id" => flag_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def flag_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "flag", "FlagTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareDeveloperPlatformSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["flag01", "flag02", "flag03", "app01", "app02", "app03", "account01"],
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
  entid_env_raw = ENV["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAG_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAG_ENTID" => idmap,
    "CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAG_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"].nil?
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end
  if idmap_resolved["app_id"].nil?
    idmap_resolved["app_id"] = idmap_resolved["app01"]
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

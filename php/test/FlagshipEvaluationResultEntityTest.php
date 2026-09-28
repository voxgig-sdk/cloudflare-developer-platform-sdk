<?php
declare(strict_types=1);

// FlagshipEvaluationResult entity test

require_once __DIR__ . '/../cloudflaredeveloperplatform_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class FlagshipEvaluationResultEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudflareDeveloperPlatformSDK::test(null, null);
        $ent = $testsdk->FlagshipEvaluationResult(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = flagship_evaluation_result_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "flagship_evaluation_result." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_EVALUATION_RESULT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $flagship_evaluation_result_ref01_ent = $client->FlagshipEvaluationResult(null);
        $flagship_evaluation_result_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.flagship_evaluation_result"), "flagship_evaluation_result_ref01"));
        $flagship_evaluation_result_ref01_data["account_id"] = $setup["idmap"]["account01"];
        $flagship_evaluation_result_ref01_data["app_id"] = $setup["idmap"]["app01"];

        $flagship_evaluation_result_ref01_data_result = $flagship_evaluation_result_ref01_ent->create($flagship_evaluation_result_ref01_data, null);
        $flagship_evaluation_result_ref01_data = Helpers::to_map(is_object($flagship_evaluation_result_ref01_data_result) && method_exists($flagship_evaluation_result_ref01_data_result, 'data_get') ? $flagship_evaluation_result_ref01_data_result->data_get() : $flagship_evaluation_result_ref01_data_result);
        $this->assertNotNull($flagship_evaluation_result_ref01_data);

        // LOAD
        $flagship_evaluation_result_ref01_match_dt0 = [];
        $flagship_evaluation_result_ref01_data_dt0_loaded = $flagship_evaluation_result_ref01_ent->load($flagship_evaluation_result_ref01_match_dt0, null);
        $this->assertNotNull($flagship_evaluation_result_ref01_data_dt0_loaded);

    }
}

function flagship_evaluation_result_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/flagship_evaluation_result/FlagshipEvaluationResultTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudflareDeveloperPlatformSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["flagship_evaluation_result01", "flagship_evaluation_result02", "flagship_evaluation_result03", "app01", "app02", "app03", "account01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_EVALUATION_RESULT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_EVALUATION_RESULT_ENTID" => $idmap,
        "CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN" => "FALSE",
        "CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_EVALUATION_RESULT_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new CloudflareDeveloperPlatformSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}

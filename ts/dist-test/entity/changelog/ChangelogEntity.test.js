"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ChangelogEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareDeveloperPlatformSDK.test();
        const ent = testsdk.Changelog();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'changelog.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$ARRAY`", "union": { "branches": 5, "count": 21, "depth": 41 }, "key$": "result", "index$": 2 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": true, "t": "`$OBJECT`", "key$": "result_info", "index$": 3 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 4 } }, "name": "changelog", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}/changelog", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "app_id", "or": "app_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "flag_key", "or": "flag_key", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}/changelog", "q": { "exist": ["account_id", "app_id", "cursor", "flag_key", "limit"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "flagship" }, { "lit": "apps" }, { "var": "app_id" }, { "lit": "flags" }, { "var": "flag_key" }, { "lit": "changelog" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.app", "$.main.kit.entity.flag"]] }, "key$": "changelog", "name__orig": "changelog", "Name": "Changelog", "name_": "changelog", "name-": "changelog", "NAME": "CHANGELOG", "index$": 4 }, { "active": true, "entity": "changelog", "key$": "BasicChangelogFlow", "kind": "basic", "name": "BasicChangelogFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "app_id": "app01", "flag_key": "flag_key01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "changelog_ref01" } }], "index$": 0 }] }, 'Changelog', { "GET /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}/changelog": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Cloudflare account ID.", "required": true, "schema": { "description": "Cloudflare account ID.", "type": "string" }, "index$": 0 }, { "name": "app_id", "in": "path", "description": "App identifier.", "required": true, "schema": { "description": "App identifier.", "type": "string" }, "index$": 1 }, { "name": "flag_key", "in": "path", "description": "Flag key (slug).", "required": true, "schema": { "description": "Flag key (slug).", "type": "string" }, "index$": 2 }, { "name": "limit", "in": "query", "description": "Max items to return (1–200).", "schema": { "description": "Max items to return (1–200).", "type": "string" }, "index$": 3 }, { "name": "cursor", "in": "query", "description": "Pagination cursor from a previous response.", "schema": { "description": "Pagination cursor from a previous response.", "type": "string" }, "index$": 4 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let changelog_ref01_data = Object.values(setup.data.existing.changelog)[0];
        // LIST
        const changelog_ref01_ent = client.Changelog();
        const changelog_ref01_match = {};
        changelog_ref01_match['account_id'] = setup.idmap['account01'];
        changelog_ref01_match['app_id'] = setup.idmap['app01'];
        changelog_ref01_match['flag_key'] = setup.idmap['flag_key01'];
        const changelog_ref01_list = (await changelog_ref01_ent.list(changelog_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/changelog/ChangelogTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareDeveloperPlatformSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['changelog01', 'changelog02', 'changelog03', 'app01', 'app02', 'app03', 'flag01', 'flag02', 'flag03', 'account01', 'flag_key01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_CHANGELOG_ENTID': idmap,
        'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_CHANGELOG_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_CHANGELOG_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudflareDeveloperPlatformSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ChangelogEntity.test.js.map
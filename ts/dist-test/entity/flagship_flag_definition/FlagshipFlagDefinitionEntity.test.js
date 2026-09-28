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
(0, node_test_1.describe)('FlagshipFlagDefinitionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareDeveloperPlatformSDK.test();
        const ent = testsdk.FlagshipFlagDefinition();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'flagship_flag_definition.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "default_variation": { "a": true, "h": "Default Variation", "n": "default_variation", "r": true, "sh": "Variation the API serves when the flag is off, or when it's on but no rule matches the context.", "t": "`$STRING`", "key$": "default_variation", "index$": 0 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": true, "sh": "When false, the flag bypasses all rules and always serves `default_variation`.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 1 }, "key": { "a": true, "h": "Key", "n": "key", "r": true, "sh": "Unique identifier for the flag within an app.", "t": "`$STRING`", "key$": "key", "index$": 2 }, "rules": { "a": true, "h": "Rules", "n": "rules", "r": true, "t": "`$ARRAY`", "union": { "branches": 5, "count": 13, "depth": 34 }, "key$": "rules", "index$": 3 }, "variations": { "a": true, "h": "Variations", "n": "variations", "r": true, "sh": "Map of variation name to value.", "t": "`$OBJECT`", "union": { "branches": 5, "count": 1, "depth": 1 }, "key$": "variations", "index$": 4 } }, "name": "flagship_flag_definition", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/flagship/apps/{app_id}/definitions", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "if_none_match", "or": "if_none_match", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "app_id", "or": "app_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/flagship/apps/{app_id}/definitions", "q": { "exist": ["account_id", "app_id", "if_none_match"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "flagship" }, { "lit": "apps" }, { "var": "app_id" }, { "lit": "definitions" }], "t": { "req": "`reqdata`", "res": "`body.flags`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.app"]] }, "key$": "flagship_flag_definition", "name__orig": "flagship_flag_definition", "Name": "FlagshipFlagDefinition", "name_": "flagship_flag_definition", "name-": "flagship-flag-definition", "NAME": "FLAGSHIP_FLAG_DEFINITION", "index$": 7 }, { "active": true, "entity": "flagship_flag_definition", "key$": "BasicFlagshipFlagDefinitionFlow", "kind": "basic", "name": "BasicFlagshipFlagDefinitionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "flagship_flag_definition_ref01", "srcdatavar": "flagship_flag_definition_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "flagship_flag_definition01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-flagship_flag_definition_ref01" } }], "index$": 0 }] }, 'FlagshipFlagDefinition', { "GET /accounts/{account_id}/flagship/apps/{app_id}/definitions": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Cloudflare account ID.", "required": true, "schema": { "description": "Cloudflare account ID.", "type": "string" }, "index$": 0 }, { "name": "app_id", "in": "path", "description": "App identifier.", "required": true, "schema": { "description": "App identifier.", "type": "string" }, "index$": 1 }, { "name": "If-None-Match", "in": "header", "description": "Previously returned ETag, or `*`.", "schema": { "description": "Previously returned ETag, or `*`.", "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let flagship_flag_definition_ref01_data = Object.values(setup.data.existing.flagship_flag_definition)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const flagship_flag_definition_ref01_ent = client.FlagshipFlagDefinition();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/flagship_flag_definition/FlagshipFlagDefinitionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareDeveloperPlatformSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['flagship_flag_definition01', 'flagship_flag_definition02', 'flagship_flag_definition03', 'app01', 'app02', 'app03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_FLAG_DEFINITION_ENTID': idmap,
        'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_FLAG_DEFINITION_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_FLAG_DEFINITION_ENTID'];
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
//# sourceMappingURL=FlagshipFlagDefinitionEntity.test.js.map
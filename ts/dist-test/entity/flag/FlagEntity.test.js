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
(0, node_test_1.describe)('FlagEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareDeveloperPlatformSDK.test();
        const ent = testsdk.Flag();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'flag.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "default_variation": { "a": true, "h": "Default Variation", "n": "default_variation", "r": true, "sh": "Variation the API serves when the flag is off, or when it's on but no rule matches the context.", "t": "`$STRING`", "key$": "default_variation", "index$": 0 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 1 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": true, "sh": "When false, the flag bypasses all rules and always serves `default_variation`.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 2 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "key": { "a": true, "h": "Key", "n": "key", "r": true, "sh": "Unique identifier for the flag within an app.", "t": "`$STRING`", "key$": "key", "index$": 5 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 6 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "union": { "branches": 5, "count": 14, "depth": 36 }, "key$": "result", "index$": 7 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": true, "t": "`$OBJECT`", "key$": "result_info", "index$": 8 }, "rules": { "a": true, "h": "Rules", "n": "rules", "r": true, "sh": "Targeting rules evaluated in ascending `priority`; the first matching rule wins.", "t": "`$ARRAY`", "union": { "branches": 5, "count": 13, "depth": 34 }, "key$": "rules", "index$": 9 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 10 }, "type": { "a": true, "de": true, "h": "Type", "n": "type", "r": false, "sh": "Deprecated compatibility field.", "t": "`$STRING`", "key$": "type", "index$": 11 }, "variations": { "a": true, "h": "Variations", "n": "variations", "r": true, "sh": "Map of variation name to value.", "t": "`$OBJECT`", "union": { "branches": 5, "count": 1, "depth": 1 }, "key$": "variations", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "flag", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/flagship/apps/{app_id}/flags", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "app_id", "or": "app_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/flagship/apps/{app_id}/flags", "q": { "exist": ["account_id", "app_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "flagship" }, { "lit": "apps" }, { "var": "app_id" }, { "lit": "flags" }], "t": { "req": { "default_variation": "`reqdata.default_variation`", "description": "`reqdata.description`", "enabled": "`reqdata.enabled`", "key": "`reqdata.key`", "rules": "`reqdata.rule`", "type": "`reqdata.type`", "variations": "`reqdata.variation`" }, "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/flagship/apps/{app_id}/flags", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "app_id", "or": "app_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/flagship/apps/{app_id}/flags", "q": { "exist": ["account_id", "app_id", "cursor", "limit"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "flagship" }, { "lit": "apps" }, { "var": "app_id" }, { "lit": "flags" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "app_id", "or": "app_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "id", "or": "flag_key", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}", "q": { "exist": ["account_id", "app_id", "id"] }, "r": { "param": { "flag_key": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "flagship" }, { "lit": "apps" }, { "var": "app_id" }, { "lit": "flags" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "app_id", "or": "app_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "id", "or": "flag_key", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}", "q": { "exist": ["account_id", "app_id", "id"] }, "r": { "param": { "flag_key": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "flagship" }, { "lit": "apps" }, { "var": "app_id" }, { "lit": "flags" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "app_id", "or": "app_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "id", "or": "flag_key", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}", "q": { "exist": ["account_id", "app_id", "id"] }, "r": { "param": { "flag_key": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "flagship" }, { "lit": "apps" }, { "var": "app_id" }, { "lit": "flags" }, { "var": "id" }], "t": { "req": { "default_variation": "`reqdata.default_variation`", "description": "`reqdata.description`", "enabled": "`reqdata.enabled`", "key": "`reqdata.key`", "rules": "`reqdata.rule`", "type": "`reqdata.type`", "variations": "`reqdata.variation`" }, "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.app"]] }, "key$": "flag", "name__orig": "flag", "Name": "Flag", "name_": "flag", "name-": "flag", "NAME": "FLAG", "index$": 5 }, { "active": true, "entity": "flag", "key$": "BasicFlagFlow", "kind": "basic", "name": "BasicFlagFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "flag_ref01" }, "m": { "account_id": "account01", "app_id": "app01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "app_id": "app01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "flag_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01", "app_id": "app01" }, "i": { "ref": "flag_ref01", "srcdatavar": "flag_ref01_data", "suffix": "_up0", "textfield": "default_variation" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-flag_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "flag_ref01", "srcdatavar": "flag_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "app_id": "app01", "id": "flag01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-flag_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "flag_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "app_id": "app01", "id": "flag01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01", "app_id": "app01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "flag_ref01" } }], "index$": 5 }] }, 'Flag', { "POST /accounts/{account_id}/flagship/apps/{app_id}/flags": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "default_variation": { "description": "Variation the API serves when the flag is off, or when it's on but no rule matches the context. Must be a key in `variations`.", "type": "string", "minLength": 1, "key$": "default_variation" }, "description": { "type": "string", "maxLength": 512, "nullable": true, "key$": "description" }, "enabled": { "description": "When false, the flag bypasses all rules and always serves `default_variation`.", "type": "boolean", "key$": "enabled" }, "key": { "description": "Unique identifier for the flag within an app. Used in all evaluation and SDK calls.", "type": "string", "maxLength": 64, "minLength": 1, "pattern": "^[a-zA-Z0-9_-]+$", "key$": "key" }, "rules": { "description": "Targeting rules evaluated in ascending `priority`; the first matching rule wins. An empty array means the flag always serves `default_variation`.", "type": "array", "items": { "additionalProperties": false, "properties": { "conditions": { "description": "Conditions the context must satisfy for this rule to match. An empty array matches all contexts.", "type": "array", "items": {} }, "priority": { "description": "Evaluation order: the API evaluates rules with lower numbers first. Must be unique across the flag's rules.", "type": "integer", "minimum": 1 }, "rollout": { "type": "object", "additionalProperties": false, "properties": {}, "required": [] }, "serve_variation": { "description": "Variation the API serves when this rule matches. Must be a key in `variations`.", "type": "string", "minLength": 1 } }, "required": ["priority", "conditions", "serve_variation"], "type": "object" }, "key$": "rules" }, "type": { "description": "Deprecated compatibility field. Omit it; the API ignores this value and infers the type from the flag's variations.", "type": "string", "enum": ["boolean", "string", "number", "json"], "deprecated": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "type" }, "variations": { "description": "Map of variation name to value. All values share the same type (boolean, string, number, or JSON object/array), and each serialized value stays within 10KB.", "type": "object", "additionalProperties": { "oneOf": [{ "nullable": true, "type": "string" }, { "type": "number" }, { "type": "boolean" }, { "additionalProperties": {}, "type": "object" }, { "items": {}, "type": "array" }], "x-ref": "#/components/schemas/flagship_JsonValue" }, "key$": "variations" } }, "additionalProperties": false, "required": ["key", "default_variation", "variations", "rules", "enabled"], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Cloudflare account ID.", "required": true, "schema": { "description": "Cloudflare account ID.", "type": "string" }, "index$": 0 }, { "name": "app_id", "in": "path", "description": "App identifier.", "required": true, "schema": { "description": "App identifier.", "type": "string" }, "index$": 1 }] }, "GET /accounts/{account_id}/flagship/apps/{app_id}/flags": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Cloudflare account ID.", "required": true, "schema": { "description": "Cloudflare account ID.", "type": "string" }, "index$": 0 }, { "name": "app_id", "in": "path", "description": "App identifier.", "required": true, "schema": { "description": "App identifier.", "type": "string" }, "index$": 1 }, { "name": "limit", "in": "query", "description": "Max items to return (1–200).", "schema": { "description": "Max items to return (1–200).", "type": "string" }, "index$": 2 }, { "name": "cursor", "in": "query", "description": "Pagination cursor from a previous response.", "schema": { "description": "Pagination cursor from a previous response.", "type": "string" }, "index$": 3 }] }, "GET /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Cloudflare account ID.", "required": true, "schema": { "description": "Cloudflare account ID.", "type": "string" }, "index$": 0 }, { "name": "app_id", "in": "path", "description": "App identifier.", "required": true, "schema": { "description": "App identifier.", "type": "string" }, "index$": 1 }, { "name": "flag_key", "in": "path", "description": "Flag key (slug).", "required": true, "schema": { "description": "Flag key (slug).", "type": "string" }, "index$": 2 }] }, "DELETE /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Cloudflare account ID.", "required": true, "schema": { "description": "Cloudflare account ID.", "type": "string" }, "index$": 0 }, { "name": "app_id", "in": "path", "description": "App identifier.", "required": true, "schema": { "description": "App identifier.", "type": "string" }, "index$": 1 }, { "name": "flag_key", "in": "path", "description": "Flag key (slug).", "required": true, "schema": { "description": "Flag key (slug).", "type": "string" }, "index$": 2 }] }, "PUT /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "default_variation": { "description": "Variation the API serves when the flag is off, or when it's on but no rule matches the context. Must be a key in `variations`.", "type": "string", "minLength": 1, "key$": "default_variation" }, "description": { "type": "string", "maxLength": 512, "nullable": true, "key$": "description" }, "enabled": { "description": "When false, the flag bypasses all rules and always serves `default_variation`.", "type": "boolean", "key$": "enabled" }, "key": { "description": "Unique identifier for the flag within an app. Used in all evaluation and SDK calls.", "type": "string", "maxLength": 64, "minLength": 1, "pattern": "^[a-zA-Z0-9_-]+$", "key$": "key" }, "rules": { "description": "Targeting rules evaluated in ascending `priority`; the first matching rule wins. An empty array means the flag always serves `default_variation`.", "type": "array", "items": { "additionalProperties": false, "properties": { "conditions": { "description": "Conditions the context must satisfy for this rule to match. An empty array matches all contexts.", "type": "array", "items": {} }, "priority": { "description": "Evaluation order: the API evaluates rules with lower numbers first. Must be unique across the flag's rules.", "type": "integer", "minimum": 1 }, "rollout": { "type": "object", "additionalProperties": false, "properties": {}, "required": [] }, "serve_variation": { "description": "Variation the API serves when this rule matches. Must be a key in `variations`.", "type": "string", "minLength": 1 } }, "required": ["priority", "conditions", "serve_variation"], "type": "object" }, "key$": "rules" }, "type": { "description": "Deprecated compatibility field. Omit it; the API ignores this value and infers the type from the flag's variations.", "type": "string", "enum": ["boolean", "string", "number", "json"], "deprecated": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "type" }, "variations": { "description": "Map of variation name to value. All values share the same type (boolean, string, number, or JSON object/array), and each serialized value stays within 10KB.", "type": "object", "additionalProperties": { "oneOf": [{ "nullable": true, "type": "string" }, { "type": "number" }, { "type": "boolean" }, { "additionalProperties": {}, "type": "object" }, { "items": {}, "type": "array" }], "x-ref": "#/components/schemas/flagship_JsonValue" }, "key$": "variations" } }, "additionalProperties": false, "required": ["key", "default_variation", "variations", "rules", "enabled"], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Cloudflare account ID.", "required": true, "schema": { "description": "Cloudflare account ID.", "type": "string" }, "index$": 0 }, { "name": "app_id", "in": "path", "description": "App identifier.", "required": true, "schema": { "description": "App identifier.", "type": "string" }, "index$": 1 }, { "name": "flag_key", "in": "path", "description": "Flag key (slug).", "required": true, "schema": { "description": "Flag key (slug).", "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const flag_ref01_ent = client.Flag();
        let flag_ref01_data = setup.data.new.flag['flag_ref01'];
        flag_ref01_data['account_id'] = setup.idmap['account01'];
        flag_ref01_data['app_id'] = setup.idmap['app01'];
        flag_ref01_data = (await flag_ref01_ent.create(flag_ref01_data)).data();
        (0, node_assert_1.default)(null != flag_ref01_data.id);
        // LIST
        const flag_ref01_match = {};
        flag_ref01_match['account_id'] = setup.idmap['account01'];
        flag_ref01_match['app_id'] = setup.idmap['app01'];
        const flag_ref01_list = (await flag_ref01_ent.list(flag_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(flag_ref01_list, { id: flag_ref01_data.id })));
        // UPDATE
        const flag_ref01_data_up0 = {};
        flag_ref01_data_up0.id = flag_ref01_data.id;
        flag_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        flag_ref01_data_up0['app_id'] = setup.idmap['app_id'];
        const flag_ref01_markdef_up0 = { name: 'default_variation', value: 'Mark01-flag_ref01_' + setup.now };
        flag_ref01_data_up0[flag_ref01_markdef_up0.name] = flag_ref01_markdef_up0.value;
        const flag_ref01_resdata_up0 = (await flag_ref01_ent.update(flag_ref01_data_up0)).data();
        (0, node_assert_1.default)(flag_ref01_resdata_up0.id === flag_ref01_data_up0.id);
        (0, node_assert_1.default)(flag_ref01_resdata_up0[flag_ref01_markdef_up0.name] === flag_ref01_markdef_up0.value);
        // LOAD
        const flag_ref01_match_dt0 = {};
        flag_ref01_match_dt0.id = flag_ref01_data.id;
        const flag_ref01_data_dt0 = (await flag_ref01_ent.load(flag_ref01_match_dt0)).data();
        (0, node_assert_1.default)(flag_ref01_data_dt0.id === flag_ref01_data.id);
        // REMOVE
        const flag_ref01_match_rm0 = { id: flag_ref01_data.id };
        await flag_ref01_ent.remove(flag_ref01_match_rm0);
        // LIST
        const flag_ref01_match_rt0 = {};
        flag_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        flag_ref01_match_rt0['app_id'] = setup.idmap['app01'];
        const flag_ref01_list_rt0 = (await flag_ref01_ent.list(flag_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(flag_ref01_list_rt0, { id: flag_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/flag/FlagTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareDeveloperPlatformSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['flag01', 'flag02', 'flag03', 'app01', 'app02', 'app03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAG_ENTID': idmap,
        'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAG_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAG_ENTID'];
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
//# sourceMappingURL=FlagEntity.test.js.map
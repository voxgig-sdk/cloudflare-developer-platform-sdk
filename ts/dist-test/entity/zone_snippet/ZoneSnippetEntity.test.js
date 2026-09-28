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
(0, node_test_1.describe)('ZoneSnippetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareDeveloperPlatformSDK.test();
        const ent = testsdk.ZoneSnippet();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE;
        for (const op of ['list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'zone_snippet.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "op": { "list": { "req": false, "type": "`$ARRAY`" }, "load": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "Lists error messages.", "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "sh": "Contain warning messages.", "t": "`$ARRAY`", "key$": "messages", "index$": 2 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "list": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "Define a snippet.", "t": "`$OBJECT`", "key$": "result", "index$": 3 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": true, "sh": "Additional information to navigate the results.", "t": "`$OBJECT`", "key$": "result_info", "index$": 4 }, "rules": { "a": true, "h": "Rules", "n": "rules", "r": true, "sh": "Lists snippet rules.", "t": "`$ARRAY`", "key$": "rules", "index$": 5 }, "success": { "a": true, "h": "Success", "n": "success", "op": { "list": { "req": false, "type": "`$BOOLEAN`" }, "load": { "req": false, "type": "`$BOOLEAN`" } }, "r": true, "sh": "Indicate whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "zone_snippet", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /zones/{zone_id}/snippets", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "9f1839b6152d298aca64c4e906b6d074", "k": "param", "n": "id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 25, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/zones/{zone_id}/snippets", "q": { "exist": ["id", "page", "per_page"] }, "r": { "param": { "zone_id": "id" } }, "s": [{ "lit": "zones" }, { "var": "id" }, { "lit": "snippets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /zones/{zone_id}/snippets/snippet_rules", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "9f1839b6152d298aca64c4e906b6d074", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/zones/{zone_id}/snippets/snippet_rules", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "snippets" }, { "lit": "snippet_rules" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /zones/{zone_id}/snippets/{snippet_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "my_snippet", "k": "param", "n": "id", "or": "snippet_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "9f1839b6152d298aca64c4e906b6d074", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/zones/{zone_id}/snippets/{snippet_name}", "q": { "exist": ["id", "zone_id"] }, "r": { "param": { "snippet_name": "id" } }, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "snippets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /zones/{zone_id}/snippets/{snippet_name}/content", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "my_snippet", "k": "param", "n": "snippet_name", "or": "snippet_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "9f1839b6152d298aca64c4e906b6d074", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/zones/{zone_id}/snippets/{snippet_name}/content", "q": { "exist": ["snippet_name", "zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "snippets" }, { "var": "snippet_name" }, { "lit": "content" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /zones/{zone_id}/snippets/{snippet_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "my_snippet", "k": "param", "n": "id", "or": "snippet_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "9f1839b6152d298aca64c4e906b6d074", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/zones/{zone_id}/snippets/{snippet_name}", "q": { "exist": ["id", "zone_id"] }, "r": { "param": { "snippet_name": "id" } }, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "snippets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /zones/{zone_id}/snippets/snippet_rules", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "9f1839b6152d298aca64c4e906b6d074", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/zones/{zone_id}/snippets/snippet_rules", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "snippets" }, { "lit": "snippet_rules" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /zones/{zone_id}/snippets/{snippet_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "my_snippet", "k": "param", "n": "id", "or": "snippet_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "9f1839b6152d298aca64c4e906b6d074", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/zones/{zone_id}/snippets/{snippet_name}", "q": { "exist": ["id", "zone_id"] }, "r": { "param": { "snippet_name": "id" } }, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "snippets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /zones/{zone_id}/snippets/snippet_rules", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "9f1839b6152d298aca64c4e906b6d074", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/zones/{zone_id}/snippets/snippet_rules", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "snippets" }, { "lit": "snippet_rules" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "zone_snippet", "name__orig": "zone_snippet", "Name": "ZoneSnippet", "name_": "zone_snippet", "name-": "zone-snippet", "NAME": "ZONE_SNIPPET", "index$": 9 }, { "active": true, "entity": "zone_snippet", "key$": "BasicZoneSnippetFlow", "kind": "basic", "name": "BasicZoneSnippetFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "zone_id": "zone01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "zone_snippet_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "zone_snippet_ref01", "srcdatavar": "zone_snippet_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-zone_snippet_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "zone_snippet_ref01", "srcdatavar": "zone_snippet_ref01_data", "suffix": "_dt0" }, "m": { "id": "zone_snippet01", "zone_id": "zone01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-zone_snippet_ref01" } }], "index$": 2 }] }, 'ZoneSnippet', { "GET /zones/{zone_id}/snippets": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Use this field to specify the unique ID of the zone.", "type": "string", "example": "9f1839b6152d298aca64c4e906b6d074", "pattern": "^[0-9a-f]{32}$", "title": "Zone ID", "x-auditable": true, "x-ref": "#/components/schemas/snippets_ZoneId" }, "index$": 0 }, { "name": "page", "in": "query", "schema": { "description": "Specifies the current page number.", "type": "integer", "example": 1, "default": 1, "minimum": 1, "title": "Page", "x-auditable": true, "x-ref": "#/components/schemas/snippets_Page" }, "index$": 1 }, { "name": "per_page", "in": "query", "schema": { "description": "Specifies how many results to return per page.", "type": "integer", "example": 25, "default": 25, "minimum": 1, "title": "Per Page", "x-auditable": true, "x-ref": "#/components/schemas/snippets_PerPage" }, "index$": 2 }] }, "GET /zones/{zone_id}/snippets/snippet_rules": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Use this field to specify the unique ID of the zone.", "type": "string", "example": "9f1839b6152d298aca64c4e906b6d074", "pattern": "^[0-9a-f]{32}$", "title": "Zone ID", "x-auditable": true, "x-ref": "#/components/schemas/snippets_ZoneId" }, "index$": 0 }] }, "GET /zones/{zone_id}/snippets/{snippet_name}": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Use this field to specify the unique ID of the zone.", "type": "string", "example": "9f1839b6152d298aca64c4e906b6d074", "pattern": "^[0-9a-f]{32}$", "title": "Zone ID", "x-auditable": true, "x-ref": "#/components/schemas/snippets_ZoneId" }, "index$": 0 }, { "name": "snippet_name", "in": "path", "required": true, "schema": { "description": "Identify the snippet.", "type": "string", "example": "my_snippet", "pattern": "^[A-Za-z0-9_]+$", "title": "Snippet Name", "x-auditable": true, "x-ref": "#/components/schemas/snippets_SnippetName" }, "index$": 1 }] }, "GET /zones/{zone_id}/snippets/{snippet_name}/content": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Use this field to specify the unique ID of the zone.", "type": "string", "example": "9f1839b6152d298aca64c4e906b6d074", "pattern": "^[0-9a-f]{32}$", "title": "Zone ID", "x-auditable": true, "x-ref": "#/components/schemas/snippets_ZoneId" }, "index$": 0 }, { "name": "snippet_name", "in": "path", "required": true, "schema": { "description": "Identify the snippet.", "type": "string", "example": "my_snippet", "pattern": "^[A-Za-z0-9_]+$", "title": "Snippet Name", "x-auditable": true, "x-ref": "#/components/schemas/snippets_SnippetName" }, "index$": 1 }] }, "DELETE /zones/{zone_id}/snippets/{snippet_name}": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Use this field to specify the unique ID of the zone.", "type": "string", "example": "9f1839b6152d298aca64c4e906b6d074", "pattern": "^[0-9a-f]{32}$", "title": "Zone ID", "x-auditable": true, "x-ref": "#/components/schemas/snippets_ZoneId" }, "index$": 0 }, { "name": "snippet_name", "in": "path", "required": true, "schema": { "description": "Identify the snippet.", "type": "string", "example": "my_snippet", "pattern": "^[A-Za-z0-9_]+$", "title": "Snippet Name", "x-auditable": true, "x-ref": "#/components/schemas/snippets_SnippetName" }, "index$": 1 }] }, "DELETE /zones/{zone_id}/snippets/snippet_rules": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Use this field to specify the unique ID of the zone.", "type": "string", "example": "9f1839b6152d298aca64c4e906b6d074", "pattern": "^[0-9a-f]{32}$", "title": "Zone ID", "x-auditable": true, "x-ref": "#/components/schemas/snippets_ZoneId" }, "index$": 0 }] }, "PUT /zones/{zone_id}/snippets/{snippet_name}": { "protocol": "http", "requestBody": { "content": { "multipart/form-data": { "schema": { "description": "Define a snippet object.", "type": "object", "properties": { "metadata": { "description": "Provide metadata about the snippet.", "type": "object", "properties": { "main_module": { "description": "Specify the name of the file that contains the main module of the snippet.", "type": "string", "example": "main.js", "minLength": 1, "title": "Main Module", "x-auditable": true, "x-ref": "#/components/schemas/snippets_SnippetMainModule" } }, "required": ["main_module"], "title": "Metadata" } }, "additionalProperties": { "description": "Contain files belonging to the snippet.", "type": "array", "items": { "description": "Specify a file belonging to the snippet.", "format": "binary", "title": "File", "type": "string", "x-auditable": true }, "minItems": 1, "title": "Files", "x-ref": "#/components/schemas/snippets_SnippetFiles" }, "required": ["metadata", "files"], "title": "Snippet" } } }, "required": true, "x-ref": "#/components/requestBodies/snippets_Snippet" }, "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Use this field to specify the unique ID of the zone.", "type": "string", "example": "9f1839b6152d298aca64c4e906b6d074", "pattern": "^[0-9a-f]{32}$", "title": "Zone ID", "x-auditable": true, "x-ref": "#/components/schemas/snippets_ZoneId" }, "index$": 0 }, { "name": "snippet_name", "in": "path", "required": true, "schema": { "description": "Identify the snippet.", "type": "string", "example": "my_snippet", "pattern": "^[A-Za-z0-9_]+$", "title": "Snippet Name", "x-auditable": true, "x-ref": "#/components/schemas/snippets_SnippetName" }, "index$": 1 }] }, "PUT /zones/{zone_id}/snippets/snippet_rules": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "description": "Define a snippet rules object.", "type": "object", "properties": { "rules": { "description": "Lists snippet rules.", "type": "array", "items": { "description": "Define a snippet rule.", "properties": { "description": { "default": "", "description": "Provide an informative description of the rule.", "example": "Execute my_snippet when IP address is 1.1.1.1.", "title": "Description", "type": "string", "x-auditable": true }, "enabled": { "default": false, "description": "Indicate whether to execute the rule.", "example": true, "title": "Enabled", "type": "boolean", "x-auditable": true }, "expression": { "description": "Define the expression that determines which traffic matches the rule.", "example": "ip.src eq 1.1.1.1", "minLength": 1, "title": "Expression", "type": "string", "x-auditable": true }, "id": { "description": "Specify the unique ID of the rule.", "example": "3a03d665bac047339bb530ecb439a90d", "pattern": "^[0-9a-f]{32}$", "readOnly": true, "title": "ID", "type": "string", "x-auditable": true }, "last_updated": { "description": "Specify the timestamp of when the rule was last modified.", "example": "2000-01-01T00:00:00Z", "format": "date-time", "readOnly": true, "title": "Last Updated", "type": "string", "x-auditable": true }, "snippet_name": { "description": "Identify the snippet.", "example": "my_snippet", "pattern": "^[A-Za-z0-9_]+$", "title": "Snippet Name", "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/snippets_SnippetName" } }, "required": ["id", "expression", "snippet_name", "last_updated"], "title": "Snippet Rule", "type": "object" }, "title": "Snippet Rules", "x-ref": "#/components/schemas/snippets_SnippetRules", "key$": "rules" } }, "required": ["rules"], "title": "Snippet Rules", "index$": 1 } } }, "required": true, "x-ref": "#/components/requestBodies/snippets_SnippetRules" }, "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Use this field to specify the unique ID of the zone.", "type": "string", "example": "9f1839b6152d298aca64c4e906b6d074", "pattern": "^[0-9a-f]{32}$", "title": "Zone ID", "x-auditable": true, "x-ref": "#/components/schemas/snippets_ZoneId" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let zone_snippet_ref01_data = Object.values(setup.data.existing.zone_snippet)[0];
        // LIST
        const zone_snippet_ref01_ent = client.ZoneSnippet();
        const zone_snippet_ref01_match = {};
        zone_snippet_ref01_match['zone_id'] = setup.idmap['zone01'];
        const zone_snippet_ref01_list = (await zone_snippet_ref01_ent.list(zone_snippet_ref01_match)).map((e) => e.data());
        // UPDATE
        const zone_snippet_ref01_data_up0 = {};
        zone_snippet_ref01_data_up0.id = zone_snippet_ref01_data.id;
        const zone_snippet_ref01_resdata_up0 = (await zone_snippet_ref01_ent.update(zone_snippet_ref01_data_up0)).data();
        (0, node_assert_1.default)(zone_snippet_ref01_resdata_up0.id === zone_snippet_ref01_data_up0.id);
        // LOAD
        const zone_snippet_ref01_match_dt0 = {};
        zone_snippet_ref01_match_dt0.id = zone_snippet_ref01_data.id;
        const zone_snippet_ref01_data_dt0 = (await zone_snippet_ref01_ent.load(zone_snippet_ref01_match_dt0)).data();
        (0, node_assert_1.default)(zone_snippet_ref01_data_dt0.id === zone_snippet_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/zone_snippet/ZoneSnippetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareDeveloperPlatformSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['zone_snippet01', 'zone_snippet02', 'zone_snippet03', 'zone01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_ZONE_SNIPPET_ENTID': idmap,
        'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_ZONE_SNIPPET_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_ZONE_SNIPPET_ENTID'];
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
//# sourceMappingURL=ZoneSnippetEntity.test.js.map
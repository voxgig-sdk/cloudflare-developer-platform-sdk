# CloudflareDeveloperPlatform Lua SDK



The Lua SDK for the CloudflareDeveloperPlatform API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:App()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-developer-platform-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudflare-developer-platform_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY"),
})
```

### 2. List app records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local apps, err = client:App():list()
if err then error(err) end

for _, item in ipairs(apps) do
  print(item["id"])
end
```

### 3. Load a flag

Flag is nested under account, so provide the `account_id`.

```lua
local flag, err = client:Flag():load({ account_id = "example_account_id", app_id = "example_app_id", id = "example_id" })
if err then error(err) end
print(flag)
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:App():create({ account_id = "example_account_id", errors = {}, messages = {}, name = "example_name", result = {}, success = true })
if err then error(err) end

-- Update
client:App():update({ id = created:data_get()["id"], account_id = "example_account_id", errors = {} })

-- Remove
client:App():remove({ id = created:data_get()["id"], account_id = "example_account_id" })
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local changelogs, err = client:Changelog():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Changelog():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE=TRUE
CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY=<your-key>
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### CloudflareDeveloperPlatformSDK

```lua
local sdk = require("cloudflare-developer-platform_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareDeveloperPlatformSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `App` | `(data) -> AppEntity` | Create an App entity instance. |
| `Artifact` | `(data) -> ArtifactEntity` | Create an Artifact entity instance. |
| `BillSubsApiBulkAccountSubscription` | `(data) -> BillSubsApiBulkAccountSubscriptionEntity` | Create a BillSubsApiBulkAccountSubscription entity instance. |
| `BrandProtection` | `(data) -> BrandProtectionEntity` | Create a BrandProtection entity instance. |
| `Changelog` | `(data) -> ChangelogEntity` | Create a Changelog entity instance. |
| `Flag` | `(data) -> FlagEntity` | Create a Flag entity instance. |
| `FlagshipEvaluationResult` | `(data) -> FlagshipEvaluationResultEntity` | Create a FlagshipEvaluationResult entity instance. |
| `FlagshipFlagDefinition` | `(data) -> FlagshipFlagDefinitionEntity` | Create a FlagshipFlagDefinition entity instance. |
| `MonolithHealth` | `(data) -> MonolithHealthEntity` | Create a MonolithHealth entity instance. |
| `ZoneSnippet` | `(data) -> ZoneSnippetEntity` | Create a ZoneSnippet entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local app, err = client:App():load({ id = "example_id" })
    if err then error(err) end
    -- app is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### App

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `name` |  |
| `result` |  |
| `success` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/flagship/apps`

#### Artifact

| Field | Description |
| --- | --- |
| `default_branch` | Git branch name. |
| `description` |  |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `name` |  |
| `read_only` |  |
| `repo` |  |
| `result` |  |
| `result_info` |  |
| `scope` |  |
| `success` |  |
| `ttl` |  |

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/fork`

#### BillSubsApiBulkAccountSubscription

| Field | Description |
| --- | --- |
| `coupon_code` |  |
| `payment_hold_id` |  |
| `subscriptions` |  |
| `user_is_on_session` |  |

Operations: Create.

API path: `/accounts/{account_id}/bulk/subscriptions`

#### BrandProtection

| Field | Description |
| --- | --- |

Operations: Create, Load.

API path: `/internal/submit`

#### Changelog

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: List.

API path: `/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}/changelog`

#### Flag

| Field | Description |
| --- | --- |
| `default_variation` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `description` |  |
| `enabled` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `errors` |  |
| `id` |  |
| `key` | Unique identifier for the flag within an app. |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `rules` | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `success` |  |
| `type` | Deprecated compatibility field. |
| `variations` | Map of variation name to value. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/flagship/apps/{app_id}/flags`

#### FlagshipEvaluationResult

| Field | Description |
| --- | --- |
| `context` |  |
| `flagKey` |  |
| `reason` |  |
| `value` |  |
| `variant` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/flagship/apps/{app_id}/evaluate`

#### FlagshipFlagDefinition

| Field | Description |
| --- | --- |
| `default_variation` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `enabled` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `key` | Unique identifier for the flag within an app. |
| `rules` |  |
| `variations` | Map of variation name to value. |

Operations: Load.

API path: `/accounts/{account_id}/flagship/apps/{app_id}/definitions`

#### MonolithHealth

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: List.

API path: `/api/v4/health`

#### ZoneSnippet

| Field | Description |
| --- | --- |
| `errors` | Lists error messages. |
| `id` |  |
| `messages` | Contain warning messages. |
| `result` | Define a snippet. |
| `result_info` | Additional information to navigate the results. |
| `rules` | Lists snippet rules. |
| `success` | Indicate whether the API call was successful. |

Operations: List, Load, Remove, Update.

API path: `/zones/{zone_id}/snippets`



## Entities


### App

Create an instance: `local app = client:App(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `name` | `string` |  |
| `result` | `table` |  |
| `success` | `boolean` |  |

#### Example: Load

```lua
local app, err = client:App():load({ id = "app_id", account_id = "account_id" })
```

#### Example: List

```lua
local apps, err = client:App():list()
```

#### Example: Create

```lua
local app, err = client:App():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  name = "example_name", -- string
  result = {}, -- table
  success = true, -- boolean
})
```


### Artifact

Create an instance: `local artifact = client:Artifact(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_branch` | `string` | Git branch name. |
| `description` | `string` |  |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `name` | `string` |  |
| `read_only` | `boolean` |  |
| `repo` | `string` |  |
| `result` | `table` |  |
| `result_info` | `any` |  |
| `scope` | `string` |  |
| `success` | `boolean` |  |
| `ttl` | `number` |  |

#### Example: Load

```lua
local artifact, err = client:Artifact():load({ account_id = "account_id" })
```

#### Example: List

```lua
local artifacts, err = client:Artifact():list()
```

#### Example: Create

```lua
local artifact, err = client:Artifact():create({
  account_id = "example_account_id", -- string
  namespace_id = "example_namespace_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  name = "example_name", -- string
  repo = "example_repo", -- string
  result = {}, -- table
  success = true, -- boolean
})
```


### BillSubsApiBulkAccountSubscription

Create an instance: `local bill_subs_api_bulk_account_subscription = client:BillSubsApiBulkAccountSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coupon_code` | `string` |  |
| `payment_hold_id` | `number` |  |
| `subscriptions` | `table` |  |
| `user_is_on_session` | `boolean` |  |

#### Example: Create

```lua
local bill_subs_api_bulk_account_subscription, err = client:BillSubsApiBulkAccountSubscription():create({
  account_id = "example_account_id", -- string
})
```


### BrandProtection

Create an instance: `local brand_protection = client:BrandProtection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local brand_protection, err = client:BrandProtection():load()
```

#### Example: Create

```lua
local brand_protection, err = client:BrandProtection():create({
})
```


### Changelog

Create an instance: `local changelog = client:Changelog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local changelogs, err = client:Changelog():list()
```


### Flag

Create an instance: `local flag = client:Flag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_variation` | `string` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `description` | `string` |  |
| `enabled` | `boolean` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `errors` | `table` |  |
| `id` | `string` |  |
| `key` | `string` | Unique identifier for the flag within an app. |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `rules` | `table` | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `success` | `boolean` |  |
| `type` | `string` | Deprecated compatibility field. |
| `variations` | `table` | Map of variation name to value. |

#### Example: Load

```lua
local flag, err = client:Flag():load({ id = "flag_id", account_id = "account_id", app_id = "app_id" })
```

#### Example: List

```lua
local flags, err = client:Flag():list()
```

#### Example: Create

```lua
local flag, err = client:Flag():create({
  account_id = "example_account_id", -- string
  app_id = "example_app_id", -- string
  default_variation = "example_default_variation", -- string
  enabled = true, -- boolean
  errors = {}, -- table
  key = "example_key", -- string
  messages = {}, -- table
  result = {}, -- table
  result_info = {}, -- table
  rules = {}, -- table
  success = true, -- boolean
  variations = {}, -- table
})
```


### FlagshipEvaluationResult

Create an instance: `local flagship_evaluation_result = client:FlagshipEvaluationResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `table` |  |
| `flagKey` | `string` |  |
| `reason` | `string` |  |
| `value` | `any` |  |
| `variant` | `string` |  |

#### Example: Load

```lua
local flagship_evaluation_result, err = client:FlagshipEvaluationResult():load({ account_id = "account_id", app_id = "app_id", flag_key = "flag_key" })
```

#### Example: Create

```lua
local flagship_evaluation_result, err = client:FlagshipEvaluationResult():create({
  account_id = "example_account_id", -- string
  app_id = "example_app_id", -- string
  flagKey = "example_flagKey", -- string
  reason = "example_reason", -- string
  variant = "example_variant", -- string
})
```


### FlagshipFlagDefinition

Create an instance: `local flagship_flag_definition = client:FlagshipFlagDefinition(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_variation` | `string` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `enabled` | `boolean` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `key` | `string` | Unique identifier for the flag within an app. |
| `rules` | `table` |  |
| `variations` | `table` | Map of variation name to value. |

#### Example: Load

```lua
local flagship_flag_definition, err = client:FlagshipFlagDefinition():load({ account_id = "account_id", app_id = "app_id" })
```


### MonolithHealth

Create an instance: `local monolith_health = client:MonolithHealth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local monolith_healths, err = client:MonolithHealth():list()
```


### ZoneSnippet

Create an instance: `local zone_snippet = client:ZoneSnippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` | Lists error messages. |
| `id` | `string` |  |
| `messages` | `table` | Contain warning messages. |
| `result` | `table` | Define a snippet. |
| `result_info` | `table` | Additional information to navigate the results. |
| `rules` | `table` | Lists snippet rules. |
| `success` | `boolean` | Indicate whether the API call was successful. |

#### Example: Load

```lua
local zone_snippet, err = client:ZoneSnippet():load({ id = "zone_snippet_id", zone_id = "zone_id" })
```

#### Example: List

```lua
local zone_snippets, err = client:ZoneSnippet():list()
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

8 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `changelog` | `result` | 5 | 41 levels |
| `flag` | `result` | 5 | 36 levels |
| `flag` | `rules` | 5 | 34 levels |
| `flag` | `variations` | 5 | 1 level |
| `flagship_evaluation_result` | `context` | 5 | 1 level |
| `flagship_evaluation_result` | `value` | 5 | 0 levels |
| `flagship_flag_definition` | `rules` | 5 | 34 levels |
| `flagship_flag_definition` | `variations` | 5 | 1 level |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudflare-developer-platform_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudflare-developer-platform_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local changelog = client:Changelog()
changelog:list()

-- changelog:data_get() now returns the changelog data from the last list
-- changelog:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

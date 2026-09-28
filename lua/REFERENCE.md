# CloudflareDeveloperPlatform Lua SDK Reference

Complete API reference for the CloudflareDeveloperPlatform Lua SDK.


## CloudflareDeveloperPlatformSDK

### Constructor

```lua
local sdk = require("cloudflare-developer-platform_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `App(data)`

Create a new `App` entity instance. Pass `nil` for no initial data.

#### `Artifact(data)`

Create a new `Artifact` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiBulkAccountSubscription(data)`

Create a new `BillSubsApiBulkAccountSubscription` entity instance. Pass `nil` for no initial data.

#### `BrandProtection(data)`

Create a new `BrandProtection` entity instance. Pass `nil` for no initial data.

#### `Changelog(data)`

Create a new `Changelog` entity instance. Pass `nil` for no initial data.

#### `Flag(data)`

Create a new `Flag` entity instance. Pass `nil` for no initial data.

#### `FlagshipEvaluationResult(data)`

Create a new `FlagshipEvaluationResult` entity instance. Pass `nil` for no initial data.

#### `FlagshipFlagDefinition(data)`

Create a new `FlagshipFlagDefinition` entity instance. Pass `nil` for no initial data.

#### `MonolithHealth(data)`

Create a new `MonolithHealth` entity instance. Pass `nil` for no initial data.

#### `ZoneSnippet(data)`

Create a new `ZoneSnippet` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AppEntity

```lua
local app = client:App(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `errors` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `messages` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `result` | - | - | - | - | - |
| `success` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:App():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:App():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:App():load({ id = "app_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:App():remove({ id = "app_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:App():update({
  id = "app_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ArtifactEntity

```lua
local artifact = client:Artifact(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_branch` | `string` | No | Git branch name. |
| `description` | `string` | No |  |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `read_only` | `boolean` | No |  |
| `repo` | `string` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `any` | No |  |
| `scope` | `string` | No |  |
| `success` | `boolean` | Yes |  |
| `ttl` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Artifact():create({
  account_id = --[[ string ]],
  namespace_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  repo = --[[ string ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Artifact():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Artifact():load({ account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Artifact():remove({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArtifactEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiBulkAccountSubscriptionEntity

```lua
local bill_subs_api_bulk_account_subscription = client:BillSubsApiBulkAccountSubscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coupon_code` | `string` | No |  |
| `payment_hold_id` | `number` | No |  |
| `subscriptions` | `table` | No |  |
| `user_is_on_session` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BillSubsApiBulkAccountSubscription():create({
  account_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiBulkAccountSubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BrandProtectionEntity

```lua
local brand_protection = client:BrandProtection(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BrandProtection():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BrandProtection():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrandProtectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChangelogEntity

```lua
local changelog = client:Changelog(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Changelog():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChangelogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FlagEntity

```lua
local flag = client:Flag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_variation` | `string` | Yes | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `description` | `string` | No |  |
| `enabled` | `boolean` | Yes | When false, the flag bypasses all rules and always serves `default_variation`. |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `key` | `string` | Yes | Unique identifier for the flag within an app. |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `rules` | `table` | Yes | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `success` | `boolean` | Yes |  |
| `type` | `string` | No | Deprecated compatibility field. |
| `variations` | `table` | Yes | Map of variation name to value. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Flag():create({
  account_id = --[[ string ]],
  app_id = --[[ string ]],
  default_variation = --[[ string ]],
  enabled = --[[ boolean ]],
  errors = --[[ table ]],
  key = --[[ string ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  rules = --[[ table ]],
  success = --[[ boolean ]],
  variations = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Flag():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Flag():load({ id = "flag_id", account_id = "account_id", app_id = "app_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Flag():remove({ id = "flag_id", account_id = "account_id", app_id = "app_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Flag():update({
  id = "flag_id",
  account_id = "account_id",
  app_id = "app_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FlagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FlagshipEvaluationResultEntity

```lua
local flagship_evaluation_result = client:FlagshipEvaluationResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `table` | No |  |
| `flagKey` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `value` | `any` | No |  |
| `variant` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FlagshipEvaluationResult():create({
  account_id = --[[ string ]],
  app_id = --[[ string ]],
  flagKey = --[[ string ]],
  reason = --[[ string ]],
  variant = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FlagshipEvaluationResult():load({ account_id = "account_id", app_id = "app_id", flag_key = "flag_key" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FlagshipEvaluationResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FlagshipFlagDefinitionEntity

```lua
local flagship_flag_definition = client:FlagshipFlagDefinition(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_variation` | `string` | Yes | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `enabled` | `boolean` | Yes | When false, the flag bypasses all rules and always serves `default_variation`. |
| `key` | `string` | Yes | Unique identifier for the flag within an app. |
| `rules` | `table` | Yes |  |
| `variations` | `table` | Yes | Map of variation name to value. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FlagshipFlagDefinition():load({ account_id = "account_id", app_id = "app_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FlagshipFlagDefinitionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MonolithHealthEntity

```lua
local monolith_health = client:MonolithHealth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MonolithHealth():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonolithHealthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZoneSnippetEntity

```lua
local zone_snippet = client:ZoneSnippet(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes | Lists error messages. |
| `id` | `string` | No |  |
| `messages` | `table` | Yes | Contain warning messages. |
| `result` | `table` | Yes | Define a snippet. |
| `result_info` | `table` | Yes | Additional information to navigate the results. |
| `rules` | `table` | Yes | Lists snippet rules. |
| `success` | `boolean` | Yes | Indicate whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | update | remove |
| --- | --- | --- | --- | --- |
| `errors` | Yes | Yes | - | - |
| `id` | - | - | - | - |
| `messages` | - | - | - | - |
| `result` | - | Yes | - | - |
| `result_info` | - | - | - | - |
| `rules` | - | - | - | - |
| `success` | Yes | Yes | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZoneSnippet():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZoneSnippet():load({ id = "zone_snippet_id", zone_id = "zone_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ZoneSnippet():remove({ id = "zone_snippet_id", zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZoneSnippet():update({
  id = "zone_snippet_id",
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZoneSnippetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.


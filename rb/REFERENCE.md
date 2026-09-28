# CloudflareDeveloperPlatform Ruby SDK Reference

Complete API reference for the CloudflareDeveloperPlatform Ruby SDK.


## CloudflareDeveloperPlatformSDK

### Constructor

```ruby
require_relative 'CloudflareDeveloperPlatform_sdk'

client = CloudflareDeveloperPlatformSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareDeveloperPlatformSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudflareDeveloperPlatformSDK.test
```


### Instance Methods

#### `App(data = nil)`

Create a new `App` entity instance. Pass `nil` for no initial data.

#### `Artifact(data = nil)`

Create a new `Artifact` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiBulkAccountSubscription(data = nil)`

Create a new `BillSubsApiBulkAccountSubscription` entity instance. Pass `nil` for no initial data.

#### `BrandProtection(data = nil)`

Create a new `BrandProtection` entity instance. Pass `nil` for no initial data.

#### `Changelog(data = nil)`

Create a new `Changelog` entity instance. Pass `nil` for no initial data.

#### `Flag(data = nil)`

Create a new `Flag` entity instance. Pass `nil` for no initial data.

#### `FlagshipEvaluationResult(data = nil)`

Create a new `FlagshipEvaluationResult` entity instance. Pass `nil` for no initial data.

#### `FlagshipFlagDefinition(data = nil)`

Create a new `FlagshipFlagDefinition` entity instance. Pass `nil` for no initial data.

#### `MonolithHealth(data = nil)`

Create a new `MonolithHealth` entity instance. Pass `nil` for no initial data.

#### `ZoneSnippet(data = nil)`

Create a new `ZoneSnippet` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AppEntity

```ruby
app = client.App
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `name` | `String` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.App.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.App.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.App.load({ "id" => "app_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.App.remove({ "id" => "app_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.App.update({
  "id" => "app_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AppEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ArtifactEntity

```ruby
artifact = client.Artifact
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_branch` | `String` | No | Git branch name. |
| `description` | `String` | No |  |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `name` | `String` | Yes |  |
| `read_only` | `Boolean` | No |  |
| `repo` | `String` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Object` | No |  |
| `scope` | `String` | No |  |
| `success` | `Boolean` | Yes |  |
| `ttl` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Artifact.create({
  "account_id" => "example_account_id", # String
  "namespace_id" => "example_namespace_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "repo" => "example_repo", # String
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Artifact.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Artifact.load({ "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Artifact.remove({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ArtifactEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiBulkAccountSubscriptionEntity

```ruby
bill_subs_api_bulk_account_subscription = client.BillSubsApiBulkAccountSubscription
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coupon_code` | `String` | No |  |
| `payment_hold_id` | `Integer` | No |  |
| `subscriptions` | `Array` | No |  |
| `user_is_on_session` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BillSubsApiBulkAccountSubscription.create({
  "account_id" => "example_account_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiBulkAccountSubscriptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BrandProtectionEntity

```ruby
brand_protection = client.BrandProtection
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BrandProtection.create({
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BrandProtection.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BrandProtectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ChangelogEntity

```ruby
changelog = client.Changelog
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Changelog.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ChangelogEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FlagEntity

```ruby
flag = client.Flag
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_variation` | `String` | Yes | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `description` | `String` | No |  |
| `enabled` | `Boolean` | Yes | When false, the flag bypasses all rules and always serves `default_variation`. |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `key` | `String` | Yes | Unique identifier for the flag within an app. |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `rules` | `Array` | Yes | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `success` | `Boolean` | Yes |  |
| `type` | `String` | No | Deprecated compatibility field. |
| `variations` | `Hash` | Yes | Map of variation name to value. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Flag.create({
  "account_id" => "example_account_id", # String
  "app_id" => "example_app_id", # String
  "default_variation" => "example_default_variation", # String
  "enabled" => true, # Boolean
  "errors" => [], # Array
  "key" => "example_key", # String
  "messages" => [], # Array
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "rules" => [], # Array
  "success" => true, # Boolean
  "variations" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Flag.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Flag.load({ "id" => "flag_id", "account_id" => "account_id", "app_id" => "app_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Flag.remove({ "id" => "flag_id", "account_id" => "account_id", "app_id" => "app_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Flag.update({
  "id" => "flag_id",
  "account_id" => "account_id",
  "app_id" => "app_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FlagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FlagshipEvaluationResultEntity

```ruby
flagship_evaluation_result = client.FlagshipEvaluationResult
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `Hash` | No |  |
| `flagKey` | `String` | Yes |  |
| `reason` | `String` | Yes |  |
| `value` | `Object` | No |  |
| `variant` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.FlagshipEvaluationResult.create({
  "account_id" => "example_account_id", # String
  "app_id" => "example_app_id", # String
  "flagKey" => "example_flagKey", # String
  "reason" => "example_reason", # String
  "variant" => "example_variant", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.FlagshipEvaluationResult.load({ "account_id" => "account_id", "app_id" => "app_id", "flag_key" => "flag_key" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FlagshipEvaluationResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FlagshipFlagDefinitionEntity

```ruby
flagship_flag_definition = client.FlagshipFlagDefinition
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_variation` | `String` | Yes | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `enabled` | `Boolean` | Yes | When false, the flag bypasses all rules and always serves `default_variation`. |
| `key` | `String` | Yes | Unique identifier for the flag within an app. |
| `rules` | `Array` | Yes |  |
| `variations` | `Hash` | Yes | Map of variation name to value. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.FlagshipFlagDefinition.load({ "account_id" => "account_id", "app_id" => "app_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FlagshipFlagDefinitionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MonolithHealthEntity

```ruby
monolith_health = client.MonolithHealth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.MonolithHealth.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MonolithHealthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZoneSnippetEntity

```ruby
zone_snippet = client.ZoneSnippet
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes | Lists error messages. |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes | Contain warning messages. |
| `result` | `Hash` | Yes | Define a snippet. |
| `result_info` | `Hash` | Yes | Additional information to navigate the results. |
| `rules` | `Array` | Yes | Lists snippet rules. |
| `success` | `Boolean` | Yes | Indicate whether the API call was successful. |

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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZoneSnippet.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZoneSnippet.load({ "id" => "zone_snippet_id", "zone_id" => "zone_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ZoneSnippet.remove({ "id" => "zone_snippet_id", "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZoneSnippet.update({
  "id" => "zone_snippet_id",
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZoneSnippetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ruby
client = CloudflareDeveloperPlatformSDK.new({
  "feature" => {
    "test" => { "active" => true },
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


# CloudflareDeveloperPlatform Ruby SDK



The Ruby SDK for the CloudflareDeveloperPlatform API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.App` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-developer-platform-sdk/releases](https://github.com/voxgig-sdk/cloudflare-developer-platform-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "CloudflareDeveloperPlatform_sdk"

client = CloudflareDeveloperPlatformSDK.new({
  "apikey" => ENV["CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY"],
})
```

### 2. List app records

```ruby
begin
  # list returns an Array of App records — iterate directly.
  apps = client.App.list
  apps.each do |item|
    puts "#{item["id"]} #{item["errors"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```

### 3. Load a flag

Flag is nested under account, so provide the `account_id`.

```ruby
begin
  # load returns the ENTITY — call data_get for the Flag record (raises on error).
  flag = client.Flag.load({ "account_id" => "example_account_id", "app_id" => "example_app_id", "id" => "example_id" })
  puts flag
rescue => err
  warn "load failed: #{err}"
end
```

### 4. Create, update, and remove

```ruby
# create returns the ENTITY — call data_get for the created App record.
created = client.App.create({ "account_id" => "example_account_id", "errors" => [], "messages" => [], "name" => "example_name", "result" => {}, "success" => true })

# Update — index the record via data_get (created.data_get["id"]).
client.App.update({ "id" => created.data_get["id"], "account_id" => "example_account_id", "errors" => [] })

# Remove
client.App.remove({ "id" => created.data_get["id"], "account_id" => "example_account_id" })
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  changelogs = client.Changelog.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = CloudflareDeveloperPlatformSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
changelog = client.Changelog.list()
puts changelog
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CloudflareDeveloperPlatformSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CloudflareDeveloperPlatformSDK

```ruby
require_relative "CloudflareDeveloperPlatform_sdk"
client = CloudflareDeveloperPlatformSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CloudflareDeveloperPlatformSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareDeveloperPlatformSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `CloudflareDeveloperPlatformError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `app = client.App`

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
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `name` | `String` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the App record (raises on error).
app = client.App.load({ "id" => "app_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of App records (raises on error).
apps = client.App.list
```

#### Example: Create

```ruby
app = client.App.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### Artifact

Create an instance: `artifact = client.Artifact`

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
| `default_branch` | `String` | Git branch name. |
| `description` | `String` |  |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `name` | `String` |  |
| `read_only` | `Boolean` |  |
| `repo` | `String` |  |
| `result` | `Hash` |  |
| `result_info` | `Object` |  |
| `scope` | `String` |  |
| `success` | `Boolean` |  |
| `ttl` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Artifact record (raises on error).
artifact = client.Artifact.load({ "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Artifact records (raises on error).
artifacts = client.Artifact.list
```

#### Example: Create

```ruby
artifact = client.Artifact.create({
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


### BillSubsApiBulkAccountSubscription

Create an instance: `bill_subs_api_bulk_account_subscription = client.BillSubsApiBulkAccountSubscription`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coupon_code` | `String` |  |
| `payment_hold_id` | `Integer` |  |
| `subscriptions` | `Array` |  |
| `user_is_on_session` | `Boolean` |  |

#### Example: Create

```ruby
bill_subs_api_bulk_account_subscription = client.BillSubsApiBulkAccountSubscription.create({
  "account_id" => "example_account_id", # String
})
```


### BrandProtection

Create an instance: `brand_protection = client.BrandProtection`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the BrandProtection record (raises on error).
brand_protection = client.BrandProtection.load()
```

#### Example: Create

```ruby
brand_protection = client.BrandProtection.create({
})
```


### Changelog

Create an instance: `changelog = client.Changelog`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of Changelog records (raises on error).
changelogs = client.Changelog.list
```


### Flag

Create an instance: `flag = client.Flag`

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
| `default_variation` | `String` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `description` | `String` |  |
| `enabled` | `Boolean` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `key` | `String` | Unique identifier for the flag within an app. |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `rules` | `Array` | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `success` | `Boolean` |  |
| `type` | `String` | Deprecated compatibility field. |
| `variations` | `Hash` | Map of variation name to value. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Flag record (raises on error).
flag = client.Flag.load({ "id" => "flag_id", "account_id" => "account_id", "app_id" => "app_id" })
```

#### Example: List

```ruby
# list returns an Array of Flag records (raises on error).
flags = client.Flag.list
```

#### Example: Create

```ruby
flag = client.Flag.create({
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


### FlagshipEvaluationResult

Create an instance: `flagship_evaluation_result = client.FlagshipEvaluationResult`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `Hash` |  |
| `flagKey` | `String` |  |
| `reason` | `String` |  |
| `value` | `Object` |  |
| `variant` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the FlagshipEvaluationResult record (raises on error).
flagship_evaluation_result = client.FlagshipEvaluationResult.load({ "account_id" => "account_id", "app_id" => "app_id", "flag_key" => "flag_key" })
```

#### Example: Create

```ruby
flagship_evaluation_result = client.FlagshipEvaluationResult.create({
  "account_id" => "example_account_id", # String
  "app_id" => "example_app_id", # String
  "flagKey" => "example_flagKey", # String
  "reason" => "example_reason", # String
  "variant" => "example_variant", # String
})
```


### FlagshipFlagDefinition

Create an instance: `flagship_flag_definition = client.FlagshipFlagDefinition`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_variation` | `String` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `enabled` | `Boolean` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `key` | `String` | Unique identifier for the flag within an app. |
| `rules` | `Array` |  |
| `variations` | `Hash` | Map of variation name to value. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the FlagshipFlagDefinition record (raises on error).
flagship_flag_definition = client.FlagshipFlagDefinition.load({ "account_id" => "account_id", "app_id" => "app_id" })
```


### MonolithHealth

Create an instance: `monolith_health = client.MonolithHealth`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of MonolithHealth records (raises on error).
monolith_healths = client.MonolithHealth.list
```


### ZoneSnippet

Create an instance: `zone_snippet = client.ZoneSnippet`

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
| `errors` | `Array` | Lists error messages. |
| `id` | `String` |  |
| `messages` | `Array` | Contain warning messages. |
| `result` | `Hash` | Define a snippet. |
| `result_info` | `Hash` | Additional information to navigate the results. |
| `rules` | `Array` | Lists snippet rules. |
| `success` | `Boolean` | Indicate whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZoneSnippet record (raises on error).
zone_snippet = client.ZoneSnippet.load({ "id" => "zone_snippet_id", "zone_id" => "zone_id" })
```

#### Example: List

```ruby
# list returns an Array of ZoneSnippet records (raises on error).
zone_snippets = client.ZoneSnippet.list
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── CloudflareDeveloperPlatform_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`CloudflareDeveloperPlatform_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
changelog = client.Changelog
changelog.list()

# changelog.data_get now returns the changelog data from the last list
# changelog.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

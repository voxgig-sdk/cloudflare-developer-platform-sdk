# CloudflareDeveloperPlatform Golang SDK Reference

Complete API reference for the CloudflareDeveloperPlatform Golang SDK.


## CloudflareDeveloperPlatformSDK

### Constructor

```go
func NewCloudflareDeveloperPlatformSDK(options map[string]any) *CloudflareDeveloperPlatformSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudflareDeveloperPlatformSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudflareDeveloperPlatformSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `App(data map[string]any) CloudflareDeveloperPlatformEntity`

Create a new `App` entity instance. Pass `nil` for no initial data.

#### `Artifact(data map[string]any) CloudflareDeveloperPlatformEntity`

Create a new `Artifact` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiBulkAccountSubscription(data map[string]any) CloudflareDeveloperPlatformEntity`

Create a new `BillSubsApiBulkAccountSubscription` entity instance. Pass `nil` for no initial data.

#### `BrandProtection(data map[string]any) CloudflareDeveloperPlatformEntity`

Create a new `BrandProtection` entity instance. Pass `nil` for no initial data.

#### `Changelog(data map[string]any) CloudflareDeveloperPlatformEntity`

Create a new `Changelog` entity instance. Pass `nil` for no initial data.

#### `Flag(data map[string]any) CloudflareDeveloperPlatformEntity`

Create a new `Flag` entity instance. Pass `nil` for no initial data.

#### `FlagshipEvaluationResult(data map[string]any) CloudflareDeveloperPlatformEntity`

Create a new `FlagshipEvaluationResult` entity instance. Pass `nil` for no initial data.

#### `FlagshipFlagDefinition(data map[string]any) CloudflareDeveloperPlatformEntity`

Create a new `FlagshipFlagDefinition` entity instance. Pass `nil` for no initial data.

#### `MonolithHealth(data map[string]any) CloudflareDeveloperPlatformEntity`

Create a new `MonolithHealth` entity instance. Pass `nil` for no initial data.

#### `ZoneSnippet(data map[string]any) CloudflareDeveloperPlatformEntity`

Create a new `ZoneSnippet` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AppEntity

```go
app := client.App(nil)
fmt.Println(app.GetName()) // "app"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.App(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.App(nil).Load(map[string]any{"id": "app_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.App(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.App(nil).Update(map[string]any{
    "id": "app_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.App(nil).Remove(map[string]any{"id": "app_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AppEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ArtifactEntity

```go
artifact := client.Artifact(nil)
fmt.Println(artifact.GetName()) // "artifact"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_branch` | `string` | No | Git branch name. |
| `description` | `string` | No |  |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | Yes |  |
| `read_only` | `bool` | No |  |
| `repo` | `string` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `any` | No |  |
| `scope` | `string` | No |  |
| `success` | `bool` | Yes |  |
| `ttl` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Artifact(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Artifact(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Artifact(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "namespace_id": "example_namespace_id",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "repo": "example_repo",
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Artifact(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ArtifactEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiBulkAccountSubscriptionEntity

```go
billSubsApiBulkAccountSubscription := client.BillSubsApiBulkAccountSubscription(nil)
fmt.Println(billSubsApiBulkAccountSubscription.GetName()) // "bill_subs_api_bulk_account_subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coupon_code` | `string` | No |  |
| `payment_hold_id` | `int` | No |  |
| `subscriptions` | `[]any` | No |  |
| `user_is_on_session` | `bool` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BillSubsApiBulkAccountSubscription(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiBulkAccountSubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BrandProtectionEntity

```go
brandProtection := client.BrandProtection(nil)
fmt.Println(brandProtection.GetName()) // "brand_protection"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BrandProtection(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BrandProtection(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BrandProtectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ChangelogEntity

```go
changelog := client.Changelog(nil)
fmt.Println(changelog.GetName()) // "changelog"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Changelog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChangelogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FlagEntity

```go
flag := client.Flag(nil)
fmt.Println(flag.GetName()) // "flag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_variation` | `string` | Yes | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `description` | `string` | No |  |
| `enabled` | `bool` | Yes | When false, the flag bypasses all rules and always serves `default_variation`. |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `key` | `string` | Yes | Unique identifier for the flag within an app. |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `rules` | `[]any` | Yes | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `success` | `bool` | Yes |  |
| `type` | `string` | No | Deprecated compatibility field. |
| `variations` | `map[string]any` | Yes | Map of variation name to value. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Flag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Flag(nil).Load(map[string]any{"id": "flag_id", "account_id": "account_id", "app_id": "app_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Flag(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "app_id": "example_app_id",
    "default_variation": "example_default_variation",
    "enabled": true,
    "errors": []any{},
    "key": "example_key",
    "messages": []any{},
    "result": map[string]any{},
    "result_info": map[string]any{},
    "rules": []any{},
    "success": true,
    "variations": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Flag(nil).Update(map[string]any{
    "id": "flag_id",
    "account_id": "account_id",
    "app_id": "app_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Flag(nil).Remove(map[string]any{"id": "flag_id", "account_id": "account_id", "app_id": "app_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FlagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FlagshipEvaluationResultEntity

```go
flagshipEvaluationResult := client.FlagshipEvaluationResult(nil)
fmt.Println(flagshipEvaluationResult.GetName()) // "flagship_evaluation_result"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `map[string]any` | No |  |
| `flagKey` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `value` | `any` | No |  |
| `variant` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FlagshipEvaluationResult(nil).Load(map[string]any{"account_id": "account_id", "app_id": "app_id", "flag_key": "flag_key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.FlagshipEvaluationResult(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "app_id": "example_app_id",
    "flagKey": "example_flagKey",
    "reason": "example_reason",
    "variant": "example_variant",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FlagshipEvaluationResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FlagshipFlagDefinitionEntity

```go
flagshipFlagDefinition := client.FlagshipFlagDefinition(nil)
fmt.Println(flagshipFlagDefinition.GetName()) // "flagship_flag_definition"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_variation` | `string` | Yes | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `enabled` | `bool` | Yes | When false, the flag bypasses all rules and always serves `default_variation`. |
| `key` | `string` | Yes | Unique identifier for the flag within an app. |
| `rules` | `[]any` | Yes |  |
| `variations` | `map[string]any` | Yes | Map of variation name to value. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FlagshipFlagDefinition(nil).Load(map[string]any{"account_id": "account_id", "app_id": "app_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FlagshipFlagDefinitionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MonolithHealthEntity

```go
monolithHealth := client.MonolithHealth(nil)
fmt.Println(monolithHealth.GetName()) // "monolith_health"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MonolithHealth(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MonolithHealthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZoneSnippetEntity

```go
zoneSnippet := client.ZoneSnippet(nil)
fmt.Println(zoneSnippet.GetName()) // "zone_snippet"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes | Lists error messages. |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes | Contain warning messages. |
| `result` | `map[string]any` | Yes | Define a snippet. |
| `result_info` | `map[string]any` | Yes | Additional information to navigate the results. |
| `rules` | `[]any` | Yes | Lists snippet rules. |
| `success` | `bool` | Yes | Indicate whether the API call was successful. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZoneSnippet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZoneSnippet(nil).Load(map[string]any{"id": "zone_snippet_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZoneSnippet(nil).Update(map[string]any{
    "id": "zone_snippet_id",
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ZoneSnippet(nil).Remove(map[string]any{"id": "zone_snippet_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZoneSnippetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudflareDeveloperPlatformSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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


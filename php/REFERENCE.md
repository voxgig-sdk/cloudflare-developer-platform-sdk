# CloudflareDeveloperPlatform PHP SDK Reference

Complete API reference for the CloudflareDeveloperPlatform PHP SDK.


## CloudflareDeveloperPlatformSDK

### Constructor

```php
require_once __DIR__ . '/cloudflaredeveloperplatform_sdk.php';

$client = new CloudflareDeveloperPlatformSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareDeveloperPlatformSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudflareDeveloperPlatformSDK::test();
```


### Instance Methods

#### `App($data = null)`

Create a new `AppEntity` instance. Pass `null` for no initial data.

#### `Artifact($data = null)`

Create a new `ArtifactEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiBulkAccountSubscription($data = null)`

Create a new `BillSubsApiBulkAccountSubscriptionEntity` instance. Pass `null` for no initial data.

#### `BrandProtection($data = null)`

Create a new `BrandProtectionEntity` instance. Pass `null` for no initial data.

#### `Changelog($data = null)`

Create a new `ChangelogEntity` instance. Pass `null` for no initial data.

#### `Flag($data = null)`

Create a new `FlagEntity` instance. Pass `null` for no initial data.

#### `FlagshipEvaluationResult($data = null)`

Create a new `FlagshipEvaluationResultEntity` instance. Pass `null` for no initial data.

#### `FlagshipFlagDefinition($data = null)`

Create a new `FlagshipFlagDefinitionEntity` instance. Pass `null` for no initial data.

#### `MonolithHealth($data = null)`

Create a new `MonolithHealthEntity` instance. Pass `null` for no initial data.

#### `ZoneSnippet($data = null)`

Create a new `ZoneSnippetEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudflareDeveloperPlatformUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AppEntity

```php
$app = $client->App();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `result` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->App()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "name" => null, // string
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->App()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->App()->load(["id" => "app_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->App()->remove(["id" => "app_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->App()->update([
  "id" => "app_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AppEntity`

Create a new `AppEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ArtifactEntity

```php
$artifact = $client->Artifact();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_branch` | `string` | No | Git branch name. |
| `description` | `string` | No |  |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `read_only` | `bool` | No |  |
| `repo` | `string` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `mixed` | No |  |
| `scope` | `string` | No |  |
| `success` | `bool` | Yes |  |
| `ttl` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Artifact()->create([
  "account_id" => null, // string
  "namespace_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "name" => null, // string
  "repo" => null, // string
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Artifact()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Artifact()->load(["account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Artifact()->remove(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ArtifactEntity`

Create a new `ArtifactEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiBulkAccountSubscriptionEntity

```php
$bill_subs_api_bulk_account_subscription = $client->BillSubsApiBulkAccountSubscription();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coupon_code` | `string` | No |  |
| `payment_hold_id` | `int` | No |  |
| `subscriptions` | `array` | No |  |
| `user_is_on_session` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BillSubsApiBulkAccountSubscription()->create([
  "account_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiBulkAccountSubscriptionEntity`

Create a new `BillSubsApiBulkAccountSubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BrandProtectionEntity

```php
$brand_protection = $client->BrandProtection();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BrandProtection()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BrandProtection()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BrandProtectionEntity`

Create a new `BrandProtectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChangelogEntity

```php
$changelog = $client->Changelog();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Changelog()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChangelogEntity`

Create a new `ChangelogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FlagEntity

```php
$flag = $client->Flag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_variation` | `string` | Yes | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `description` | `string` | No |  |
| `enabled` | `bool` | Yes | When false, the flag bypasses all rules and always serves `default_variation`. |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `key` | `string` | Yes | Unique identifier for the flag within an app. |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `rules` | `array` | Yes | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `success` | `bool` | Yes |  |
| `type` | `string` | No | Deprecated compatibility field. |
| `variations` | `array` | Yes | Map of variation name to value. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Flag()->create([
  "account_id" => null, // string
  "app_id" => null, // string
  "default_variation" => null, // string
  "enabled" => null, // bool
  "errors" => null, // array
  "key" => null, // string
  "messages" => null, // array
  "result" => null, // array
  "result_info" => null, // array
  "rules" => null, // array
  "success" => null, // bool
  "variations" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Flag()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Flag()->load(["id" => "flag_id", "account_id" => "account_id", "app_id" => "app_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Flag()->remove(["id" => "flag_id", "account_id" => "account_id", "app_id" => "app_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Flag()->update([
  "id" => "flag_id",
  "account_id" => "account_id",
  "app_id" => "app_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FlagEntity`

Create a new `FlagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FlagshipEvaluationResultEntity

```php
$flagship_evaluation_result = $client->FlagshipEvaluationResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `array` | No |  |
| `flagKey` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `value` | `mixed` | No |  |
| `variant` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FlagshipEvaluationResult()->create([
  "account_id" => null, // string
  "app_id" => null, // string
  "flagKey" => null, // string
  "reason" => null, // string
  "variant" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FlagshipEvaluationResult()->load(["account_id" => "account_id", "app_id" => "app_id", "flag_key" => "flag_key"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FlagshipEvaluationResultEntity`

Create a new `FlagshipEvaluationResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FlagshipFlagDefinitionEntity

```php
$flagship_flag_definition = $client->FlagshipFlagDefinition();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_variation` | `string` | Yes | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `enabled` | `bool` | Yes | When false, the flag bypasses all rules and always serves `default_variation`. |
| `key` | `string` | Yes | Unique identifier for the flag within an app. |
| `rules` | `array` | Yes |  |
| `variations` | `array` | Yes | Map of variation name to value. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FlagshipFlagDefinition()->load(["account_id" => "account_id", "app_id" => "app_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FlagshipFlagDefinitionEntity`

Create a new `FlagshipFlagDefinitionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MonolithHealthEntity

```php
$monolith_health = $client->MonolithHealth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MonolithHealth()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MonolithHealthEntity`

Create a new `MonolithHealthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZoneSnippetEntity

```php
$zone_snippet = $client->ZoneSnippet();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes | Lists error messages. |
| `id` | `string` | No |  |
| `messages` | `array` | Yes | Contain warning messages. |
| `result` | `array` | Yes | Define a snippet. |
| `result_info` | `array` | Yes | Additional information to navigate the results. |
| `rules` | `array` | Yes | Lists snippet rules. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZoneSnippet()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZoneSnippet()->load(["id" => "zone_snippet_id", "zone_id" => "zone_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ZoneSnippet()->remove(["id" => "zone_snippet_id", "zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZoneSnippet()->update([
  "id" => "zone_snippet_id",
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZoneSnippetEntity`

Create a new `ZoneSnippetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```php
$client = new CloudflareDeveloperPlatformSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
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


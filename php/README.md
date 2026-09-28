# CloudflareDeveloperPlatform PHP SDK



The PHP SDK for the CloudflareDeveloperPlatform API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->App()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-developer-platform-sdk/releases](https://github.com/voxgig-sdk/cloudflare-developer-platform-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'cloudflaredeveloperplatform_sdk.php';

$client = new CloudflareDeveloperPlatformSDK([
    "apikey" => getenv("CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY"),
]);
```

### 2. List app records

```php
try {
    // list() returns entity instances; data_get() reads each record.
    $apps = $client->App()->list();
    foreach ($apps as $record) {
        $item = $record->data_get();
        echo $item["id"] . " " . $item["errors"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load a flag

Flag is nested under account, so provide the `account_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the Flag record (throws on error).
    $flag = $client->Flag()->load(["account_id" => "example_account_id", "app_id" => "example_app_id", "id" => "example_id"]);
    print_r($flag->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created App record.
$created = $client->App()->create(["account_id" => "example_account_id", "errors" => [], "messages" => [], "name" => "example_name", "result" => [], "success" => true]);

// Update — index the record via data_get() ($created->data_get()["id"]).
$client->App()->update(["id" => $created->data_get()["id"], "account_id" => "example_account_id", "errors" => []]);

// Remove
$client->App()->remove(["id" => $created->data_get()["id"], "account_id" => "example_account_id"]);
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $changelogs = $client->Changelog()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = CloudflareDeveloperPlatformSDK::test([
    "entity" => ["app" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$app = $client->App()->list();
print_r(array_map(fn($item) => $item->data_get(), $app));
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CloudflareDeveloperPlatformSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE=TRUE
CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CloudflareDeveloperPlatformSDK

```php
require_once 'cloudflaredeveloperplatform_sdk.php';
$client = new CloudflareDeveloperPlatformSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CloudflareDeveloperPlatformSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CloudflareDeveloperPlatformSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `App` | `($data): AppEntity` | Create an App entity instance. |
| `Artifact` | `($data): ArtifactEntity` | Create an Artifact entity instance. |
| `BillSubsApiBulkAccountSubscription` | `($data): BillSubsApiBulkAccountSubscriptionEntity` | Create a BillSubsApiBulkAccountSubscription entity instance. |
| `BrandProtection` | `($data): BrandProtectionEntity` | Create a BrandProtection entity instance. |
| `Changelog` | `($data): ChangelogEntity` | Create a Changelog entity instance. |
| `Flag` | `($data): FlagEntity` | Create a Flag entity instance. |
| `FlagshipEvaluationResult` | `($data): FlagshipEvaluationResultEntity` | Create a FlagshipEvaluationResult entity instance. |
| `FlagshipFlagDefinition` | `($data): FlagshipFlagDefinitionEntity` | Create a FlagshipFlagDefinition entity instance. |
| `MonolithHealth` | `($data): MonolithHealthEntity` | Create a MonolithHealth entity instance. |
| `ZoneSnippet` | `($data): ZoneSnippetEntity` | Create a ZoneSnippet entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$app = $client->App();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `name` | `string` |  |
| `result` | `array` |  |
| `success` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the App record (throws on error).
$app = $client->App()->load(["id" => "app_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of App records (throws on error).
$apps = $client->App()->list();
```

#### Example: Create

```php
$app = $client->App()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "name" => null, // string
    "result" => null, // array
    "success" => null, // bool
]);
```


### Artifact

Create an instance: `$artifact = $client->Artifact();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `name` | `string` |  |
| `read_only` | `bool` |  |
| `repo` | `string` |  |
| `result` | `array` |  |
| `result_info` | `mixed` |  |
| `scope` | `string` |  |
| `success` | `bool` |  |
| `ttl` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Artifact record (throws on error).
$artifact = $client->Artifact()->load(["account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Artifact records (throws on error).
$artifacts = $client->Artifact()->list();
```

#### Example: Create

```php
$artifact = $client->Artifact()->create([
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


### BillSubsApiBulkAccountSubscription

Create an instance: `$bill_subs_api_bulk_account_subscription = $client->BillSubsApiBulkAccountSubscription();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coupon_code` | `string` |  |
| `payment_hold_id` | `int` |  |
| `subscriptions` | `array` |  |
| `user_is_on_session` | `bool` |  |

#### Example: Create

```php
$bill_subs_api_bulk_account_subscription = $client->BillSubsApiBulkAccountSubscription()->create([
    "account_id" => null, // string
]);
```


### BrandProtection

Create an instance: `$brand_protection = $client->BrandProtection();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the BrandProtection record (throws on error).
$brand_protection = $client->BrandProtection()->load();
```

#### Example: Create

```php
$brand_protection = $client->BrandProtection()->create([
]);
```


### Changelog

Create an instance: `$changelog = $client->Changelog();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of Changelog records (throws on error).
$changelogs = $client->Changelog()->list();
```


### Flag

Create an instance: `$flag = $client->Flag();`

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
| `enabled` | `bool` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `errors` | `array` |  |
| `id` | `string` |  |
| `key` | `string` | Unique identifier for the flag within an app. |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `rules` | `array` | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `success` | `bool` |  |
| `type` | `string` | Deprecated compatibility field. |
| `variations` | `array` | Map of variation name to value. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Flag record (throws on error).
$flag = $client->Flag()->load(["id" => "flag_id", "account_id" => "account_id", "app_id" => "app_id"]);
```

#### Example: List

```php
// list() returns an array of Flag records (throws on error).
$flags = $client->Flag()->list();
```

#### Example: Create

```php
$flag = $client->Flag()->create([
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


### FlagshipEvaluationResult

Create an instance: `$flagship_evaluation_result = $client->FlagshipEvaluationResult();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `array` |  |
| `flagKey` | `string` |  |
| `reason` | `string` |  |
| `value` | `mixed` |  |
| `variant` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the FlagshipEvaluationResult record (throws on error).
$flagship_evaluation_result = $client->FlagshipEvaluationResult()->load(["account_id" => "account_id", "app_id" => "app_id", "flag_key" => "flag_key"]);
```

#### Example: Create

```php
$flagship_evaluation_result = $client->FlagshipEvaluationResult()->create([
    "account_id" => null, // string
    "app_id" => null, // string
    "flagKey" => null, // string
    "reason" => null, // string
    "variant" => null, // string
]);
```


### FlagshipFlagDefinition

Create an instance: `$flagship_flag_definition = $client->FlagshipFlagDefinition();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_variation` | `string` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `enabled` | `bool` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `key` | `string` | Unique identifier for the flag within an app. |
| `rules` | `array` |  |
| `variations` | `array` | Map of variation name to value. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the FlagshipFlagDefinition record (throws on error).
$flagship_flag_definition = $client->FlagshipFlagDefinition()->load(["account_id" => "account_id", "app_id" => "app_id"]);
```


### MonolithHealth

Create an instance: `$monolith_health = $client->MonolithHealth();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of MonolithHealth records (throws on error).
$monolith_healths = $client->MonolithHealth()->list();
```


### ZoneSnippet

Create an instance: `$zone_snippet = $client->ZoneSnippet();`

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
| `errors` | `array` | Lists error messages. |
| `id` | `string` |  |
| `messages` | `array` | Contain warning messages. |
| `result` | `array` | Define a snippet. |
| `result_info` | `array` | Additional information to navigate the results. |
| `rules` | `array` | Lists snippet rules. |
| `success` | `bool` | Indicate whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZoneSnippet record (throws on error).
$zone_snippet = $client->ZoneSnippet()->load(["id" => "zone_snippet_id", "zone_id" => "zone_id"]);
```

#### Example: List

```php
// list() returns an array of ZoneSnippet records (throws on error).
$zone_snippets = $client->ZoneSnippet()->list();
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── cloudflaredeveloperplatform_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`cloudflaredeveloperplatform_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$changelog = $client->Changelog();
$changelog->list();

// $changelog->data_get() now returns the changelog data from the last list
// $changelog->match_get() returns the last match criteria
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

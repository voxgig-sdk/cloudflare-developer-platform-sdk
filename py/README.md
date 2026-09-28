# CloudflareDeveloperPlatform Python SDK



The Python SDK for the CloudflareDeveloperPlatform API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.App()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-developer-platform-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cloudflaredeveloperplatform_sdk import CloudflareDeveloperPlatformSDK

client = CloudflareDeveloperPlatformSDK({
    "apikey": os.environ.get("CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY"),
})
```

### 2. List app records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    apps = client.App().list({"account_id": "example"})
    for app in apps:
        print(app)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load a flag

Flag is nested under account, so provide the `account_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    flag = client.Flag().load({"account_id": "example_account_id", "app_id": "example_app_id", "id": "example_id"})
    print(flag)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.App().create({"account_id": "example_account_id", "errors": [], "messages": [], "name": "example_name", "result": {}, "success": True})

# Update — the created record's id is a plain dict key
client.App().update({"id": created.data_get()["id"], "account_id": "example_account_id", "errors": []})

# Remove
client.App().remove({"id": created.data_get()["id"], "account_id": "example_account_id"})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    changelogs = client.Changelog().list()
    print(changelogs)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CloudflareDeveloperPlatformSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
changelog = client.Changelog().list()
# changelog contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CloudflareDeveloperPlatformSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### CloudflareDeveloperPlatformSDK

```python
from cloudflaredeveloperplatform_sdk import CloudflareDeveloperPlatformSDK

client = CloudflareDeveloperPlatformSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CloudflareDeveloperPlatformSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CloudflareDeveloperPlatformSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `app = client.App()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `name` | `str` |  |
| `result` | `dict` |  |
| `success` | `bool` |  |

#### Example: Load

```python
app = client.App().load({"id": "app_id", "account_id": "account_id"})
```

#### Example: List

```python
apps = client.App().list({"account_id": "example"})
```

#### Example: Create

```python
app = client.App().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "result": {},  # dict
    "success": True,  # bool
})
```


### Artifact

Create an instance: `artifact = client.Artifact()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_branch` | `str` | Git branch name. |
| `description` | `str` |  |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `name` | `str` |  |
| `read_only` | `bool` |  |
| `repo` | `str` |  |
| `result` | `dict` |  |
| `result_info` | `Any` |  |
| `scope` | `str` |  |
| `success` | `bool` |  |
| `ttl` | `int` |  |

#### Example: Load

```python
artifact = client.Artifact().load({"account_id": "account_id"})
```

#### Example: List

```python
artifacts = client.Artifact().list({"account_id": "example", "namespace_id": "example"})
```

#### Example: Create

```python
artifact = client.Artifact().create({
    "account_id": "example_account_id",  # str
    "namespace_id": "example_namespace_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "repo": "example_repo",  # str
    "result": {},  # dict
    "success": True,  # bool
})
```


### BillSubsApiBulkAccountSubscription

Create an instance: `bill_subs_api_bulk_account_subscription = client.BillSubsApiBulkAccountSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coupon_code` | `str` |  |
| `payment_hold_id` | `int` |  |
| `subscriptions` | `list` |  |
| `user_is_on_session` | `bool` |  |

#### Example: Create

```python
bill_subs_api_bulk_account_subscription = client.BillSubsApiBulkAccountSubscription().create({
    "account_id": "example_account_id",  # str
})
```


### BrandProtection

Create an instance: `brand_protection = client.BrandProtection()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
brand_protection = client.BrandProtection().load()
```

#### Example: Create

```python
brand_protection = client.BrandProtection().create({
})
```


### Changelog

Create an instance: `changelog = client.Changelog()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: List

```python
changelogs = client.Changelog().list({"account_id": "example", "app_id": "example", "flag_key": "example"})
```


### Flag

Create an instance: `flag = client.Flag()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_variation` | `str` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `description` | `str` |  |
| `enabled` | `bool` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `errors` | `list` |  |
| `id` | `str` |  |
| `key` | `str` | Unique identifier for the flag within an app. |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `rules` | `list` | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `success` | `bool` |  |
| `type` | `str` | Deprecated compatibility field. |
| `variations` | `dict` | Map of variation name to value. |

#### Example: Load

```python
flag = client.Flag().load({"id": "flag_id", "account_id": "account_id", "app_id": "app_id"})
```

#### Example: List

```python
flags = client.Flag().list({"account_id": "example", "app_id": "example"})
```

#### Example: Create

```python
flag = client.Flag().create({
    "account_id": "example_account_id",  # str
    "app_id": "example_app_id",  # str
    "default_variation": "example_default_variation",  # str
    "enabled": True,  # bool
    "errors": [],  # list
    "key": "example_key",  # str
    "messages": [],  # list
    "result": {},  # dict
    "result_info": {},  # dict
    "rules": [],  # list
    "success": True,  # bool
    "variations": {},  # dict
})
```


### FlagshipEvaluationResult

Create an instance: `flagship_evaluation_result = client.FlagshipEvaluationResult()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `dict` |  |
| `flagKey` | `str` |  |
| `reason` | `str` |  |
| `value` | `Any` |  |
| `variant` | `str` |  |

#### Example: Load

```python
flagship_evaluation_result = client.FlagshipEvaluationResult().load({"account_id": "account_id", "app_id": "app_id", "flag_key": "flag_key"})
```

#### Example: Create

```python
flagship_evaluation_result = client.FlagshipEvaluationResult().create({
    "account_id": "example_account_id",  # str
    "app_id": "example_app_id",  # str
    "flagKey": "example_flagKey",  # str
    "reason": "example_reason",  # str
    "variant": "example_variant",  # str
})
```


### FlagshipFlagDefinition

Create an instance: `flagship_flag_definition = client.FlagshipFlagDefinition()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_variation` | `str` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `enabled` | `bool` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `key` | `str` | Unique identifier for the flag within an app. |
| `rules` | `list` |  |
| `variations` | `dict` | Map of variation name to value. |

#### Example: Load

```python
flagship_flag_definition = client.FlagshipFlagDefinition().load({"account_id": "account_id", "app_id": "app_id"})
```


### MonolithHealth

Create an instance: `monolith_health = client.MonolithHealth()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` |  |

#### Example: List

```python
monolith_healths = client.MonolithHealth().list()
```


### ZoneSnippet

Create an instance: `zone_snippet = client.ZoneSnippet()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` | Lists error messages. |
| `id` | `str` |  |
| `messages` | `list` | Contain warning messages. |
| `result` | `dict` | Define a snippet. |
| `result_info` | `dict` | Additional information to navigate the results. |
| `rules` | `list` | Lists snippet rules. |
| `success` | `bool` | Indicate whether the API call was successful. |

#### Example: Load

```python
zone_snippet = client.ZoneSnippet().load({"id": "zone_snippet_id", "zone_id": "zone_id"})
```

#### Example: List

```python
zone_snippets = client.ZoneSnippet().list({"id": "example_id"})
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cloudflaredeveloperplatform_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cloudflaredeveloperplatform_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
changelog = client.Changelog()
changelog.list()

# changelog.data_get() now returns the changelog data from the last list
# changelog.match_get() returns the last match criteria
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

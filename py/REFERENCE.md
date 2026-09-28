# CloudflareDeveloperPlatform Python SDK Reference

Complete API reference for the CloudflareDeveloperPlatform Python SDK.


## CloudflareDeveloperPlatformSDK

### Constructor

```python
from cloudflaredeveloperplatform_sdk import CloudflareDeveloperPlatformSDK

client = CloudflareDeveloperPlatformSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareDeveloperPlatformSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudflareDeveloperPlatformSDK.test()
```


### Instance Methods

#### `App(data=None)`

Create a new `AppEntity` instance. Pass `None` for no initial data.

#### `Artifact(data=None)`

Create a new `ArtifactEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiBulkAccountSubscription(data=None)`

Create a new `BillSubsApiBulkAccountSubscriptionEntity` instance. Pass `None` for no initial data.

#### `BrandProtection(data=None)`

Create a new `BrandProtectionEntity` instance. Pass `None` for no initial data.

#### `Changelog(data=None)`

Create a new `ChangelogEntity` instance. Pass `None` for no initial data.

#### `Flag(data=None)`

Create a new `FlagEntity` instance. Pass `None` for no initial data.

#### `FlagshipEvaluationResult(data=None)`

Create a new `FlagshipEvaluationResultEntity` instance. Pass `None` for no initial data.

#### `FlagshipFlagDefinition(data=None)`

Create a new `FlagshipFlagDefinitionEntity` instance. Pass `None` for no initial data.

#### `MonolithHealth(data=None)`

Create a new `MonolithHealthEntity` instance. Pass `None` for no initial data.

#### `ZoneSnippet(data=None)`

Create a new `ZoneSnippetEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AppEntity

```python
app = client.App()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `result` | `dict` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.App().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.App().list({"account_id": "example"})
for app in results:
    print(app)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.App().load({"id": "app_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.App().remove({"id": "app_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.App().update({
    "id": "app_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ArtifactEntity

```python
artifact = client.Artifact()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_branch` | `str` | No | Git branch name. |
| `description` | `str` | No |  |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `read_only` | `bool` | No |  |
| `repo` | `str` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `Any` | No |  |
| `scope` | `str` | No |  |
| `success` | `bool` | Yes |  |
| `ttl` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Artifact().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Artifact().list({"account_id": "example", "namespace_id": "example"})
for artifact in results:
    print(artifact)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Artifact().load({"account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Artifact().remove({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArtifactEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiBulkAccountSubscriptionEntity

```python
bill_subs_api_bulk_account_subscription = client.BillSubsApiBulkAccountSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coupon_code` | `str` | No |  |
| `payment_hold_id` | `int` | No |  |
| `subscriptions` | `list` | No |  |
| `user_is_on_session` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BillSubsApiBulkAccountSubscription().create({
    "account_id": "example_account_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiBulkAccountSubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BrandProtectionEntity

```python
brand_protection = client.BrandProtection()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BrandProtection().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BrandProtection().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrandProtectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChangelogEntity

```python
changelog = client.Changelog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Changelog().list({"account_id": "example", "app_id": "example", "flag_key": "example"})
for changelog in results:
    print(changelog)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChangelogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FlagEntity

```python
flag = client.Flag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_variation` | `str` | Yes | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `description` | `str` | No |  |
| `enabled` | `bool` | Yes | When false, the flag bypasses all rules and always serves `default_variation`. |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `key` | `str` | Yes | Unique identifier for the flag within an app. |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `rules` | `list` | Yes | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `success` | `bool` | Yes |  |
| `type` | `str` | No | Deprecated compatibility field. |
| `variations` | `dict` | Yes | Map of variation name to value. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Flag().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Flag().list({"account_id": "example", "app_id": "example"})
for flag in results:
    print(flag)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Flag().load({"id": "flag_id", "account_id": "account_id", "app_id": "app_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Flag().remove({"id": "flag_id", "account_id": "account_id", "app_id": "app_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Flag().update({
    "id": "flag_id",
    "account_id": "account_id",
    "app_id": "app_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FlagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FlagshipEvaluationResultEntity

```python
flagship_evaluation_result = client.FlagshipEvaluationResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `dict` | No |  |
| `flagKey` | `str` | Yes |  |
| `reason` | `str` | Yes |  |
| `value` | `Any` | No |  |
| `variant` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FlagshipEvaluationResult().create({
    "account_id": "example_account_id",  # str
    "app_id": "example_app_id",  # str
    "flagKey": "example_flagKey",  # str
    "reason": "example_reason",  # str
    "variant": "example_variant",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FlagshipEvaluationResult().load({"account_id": "account_id", "app_id": "app_id", "flag_key": "flag_key"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FlagshipEvaluationResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FlagshipFlagDefinitionEntity

```python
flagship_flag_definition = client.FlagshipFlagDefinition()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_variation` | `str` | Yes | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `enabled` | `bool` | Yes | When false, the flag bypasses all rules and always serves `default_variation`. |
| `key` | `str` | Yes | Unique identifier for the flag within an app. |
| `rules` | `list` | Yes |  |
| `variations` | `dict` | Yes | Map of variation name to value. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FlagshipFlagDefinition().load({"account_id": "account_id", "app_id": "app_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FlagshipFlagDefinitionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MonolithHealthEntity

```python
monolith_health = client.MonolithHealth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MonolithHealth().list()
for monolith_health in results:
    print(monolith_health)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonolithHealthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZoneSnippetEntity

```python
zone_snippet = client.ZoneSnippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes | Lists error messages. |
| `id` | `str` | No |  |
| `messages` | `list` | Yes | Contain warning messages. |
| `result` | `dict` | Yes | Define a snippet. |
| `result_info` | `dict` | Yes | Additional information to navigate the results. |
| `rules` | `list` | Yes | Lists snippet rules. |
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZoneSnippet().list({"id": "example_id"})
for zone_snippet in results:
    print(zone_snippet)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZoneSnippet().load({"id": "zone_snippet_id", "zone_id": "zone_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ZoneSnippet().remove({"id": "zone_snippet_id", "zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZoneSnippet().update({
    "id": "zone_snippet_id",
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZoneSnippetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = CloudflareDeveloperPlatformSDK({
    "feature": {
        "test": {"active": True},
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


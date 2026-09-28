# CloudflareDeveloperPlatform TypeScript SDK Reference

Complete API reference for the CloudflareDeveloperPlatform TypeScript SDK.


## CloudflareDeveloperPlatformSDK

### Constructor

```ts
new CloudflareDeveloperPlatformSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareDeveloperPlatformSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudflareDeveloperPlatformSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudflareDeveloperPlatformSDK` instance in test mode.


### Instance Methods

#### `App(data?: object)`

Create a new `App` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AppEntity` instance.

#### `Artifact(data?: object)`

Create a new `Artifact` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ArtifactEntity` instance.

#### `BillSubsApiBulkAccountSubscription(data?: object)`

Create a new `BillSubsApiBulkAccountSubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiBulkAccountSubscriptionEntity` instance.

#### `BrandProtection(data?: object)`

Create a new `BrandProtection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BrandProtectionEntity` instance.

#### `Changelog(data?: object)`

Create a new `Changelog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChangelogEntity` instance.

#### `Flag(data?: object)`

Create a new `Flag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FlagEntity` instance.

#### `FlagshipEvaluationResult(data?: object)`

Create a new `FlagshipEvaluationResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FlagshipEvaluationResultEntity` instance.

#### `FlagshipFlagDefinition(data?: object)`

Create a new `FlagshipFlagDefinition` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FlagshipFlagDefinitionEntity` instance.

#### `MonolithHealth(data?: object)`

Create a new `MonolithHealth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MonolithHealthEntity` instance.

#### `ZoneSnippet(data?: object)`

Create a new `ZoneSnippet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZoneSnippetEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudflareDeveloperPlatformSDK.test()`.

**Returns:** `CloudflareDeveloperPlatformSDK` instance in test mode.


---

## AppEntity

```ts
const app = client.App()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.App().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.App().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.App().load({ id: 'app_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.App().remove({ id: 'app_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.App().update({
  id: 'app_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AppEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDeveloperPlatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ArtifactEntity

```ts
const artifact = client.Artifact()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_branch` | `string` | No | Git branch name. |
| `description` | `string` | No |  |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `read_only` | `boolean` | No |  |
| `repo` | `string` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `any` | No |  |
| `scope` | `string` | No |  |
| `success` | `boolean` | Yes |  |
| `ttl` | `number` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `fork` | `/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/fork` | `client.Artifact().create({ $action: 'fork', ... })` |
| `import` | `/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/import` | `client.Artifact().create({ $action: 'import', ... })` |
| `namespace` | `/accounts/{account_id}/artifacts/namespaces` | `client.Artifact().create({ $action: 'namespace', ... })` |
| `namespace` | `/accounts/{account_id}/artifacts/namespaces` | `client.Artifact().list({ $action: 'namespace', ... })` |

An action returns that action's OWN response, which is not necessarily a
Artifact record — check the API definition for its shape.

```ts
const result = await client.Artifact().create({
  $action: 'fork',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Artifact().create({
  account_id: 'example_account_id',
  namespace_id: 'example_namespace_id',
  errors: [],
  messages: [],
  name: 'example_name',
  repo: 'example_repo',
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Artifact().list({ account_id: "example", namespace_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Artifact().load({ account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Artifact().remove({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ArtifactEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDeveloperPlatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiBulkAccountSubscriptionEntity

```ts
const bill_subs_api_bulk_account_subscription = client.BillSubsApiBulkAccountSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coupon_code` | `string` | No |  |
| `payment_hold_id` | `number` | No |  |
| `subscriptions` | `any[]` | No |  |
| `user_is_on_session` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BillSubsApiBulkAccountSubscription().create({
  account_id: 'example_account_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiBulkAccountSubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDeveloperPlatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BrandProtectionEntity

```ts
const brand_protection = client.BrandProtection()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BrandProtection().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BrandProtection().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BrandProtectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDeveloperPlatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChangelogEntity

```ts
const changelog = client.Changelog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Changelog().list({ account_id: "example", app_id: "example", flag_key: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChangelogEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDeveloperPlatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FlagEntity

```ts
const flag = client.Flag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_variation` | `string` | Yes | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `description` | `string` | No |  |
| `enabled` | `boolean` | Yes | When false, the flag bypasses all rules and always serves `default_variation`. |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `key` | `string` | Yes | Unique identifier for the flag within an app. |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `rules` | `any[]` | Yes | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `success` | `boolean` | Yes |  |
| `type` | `string` | No | Deprecated compatibility field. |
| `variations` | `Record<string, any>` | Yes | Map of variation name to value. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Flag().create({
  account_id: 'example_account_id',
  app_id: 'example_app_id',
  default_variation: 'example_default_variation',
  enabled: true,
  errors: [],
  key: 'example_key',
  messages: [],
  result: {},
  result_info: {},
  rules: [],
  success: true,
  variations: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Flag().list({ account_id: "example", app_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Flag().load({ id: 'flag_id', account_id: 'account_id', app_id: 'app_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Flag().remove({ id: 'flag_id', account_id: 'account_id', app_id: 'app_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Flag().update({
  id: 'flag_id',
  account_id: 'account_id',
  app_id: 'app_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FlagEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDeveloperPlatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FlagshipEvaluationResultEntity

```ts
const flagship_evaluation_result = client.FlagshipEvaluationResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `Record<string, any>` | No |  |
| `flagKey` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `value` | `any` | No |  |
| `variant` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FlagshipEvaluationResult().create({
  account_id: 'example_account_id',
  app_id: 'example_app_id',
  flagKey: 'example_flagKey',
  reason: 'example_reason',
  variant: 'example_variant',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FlagshipEvaluationResult().load({ account_id: 'account_id', app_id: 'app_id', flag_key: 'flag_key' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FlagshipEvaluationResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDeveloperPlatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FlagshipFlagDefinitionEntity

```ts
const flagship_flag_definition = client.FlagshipFlagDefinition()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_variation` | `string` | Yes | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `enabled` | `boolean` | Yes | When false, the flag bypasses all rules and always serves `default_variation`. |
| `key` | `string` | Yes | Unique identifier for the flag within an app. |
| `rules` | `any[]` | Yes |  |
| `variations` | `Record<string, any>` | Yes | Map of variation name to value. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FlagshipFlagDefinition().load({ account_id: 'account_id', app_id: 'app_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FlagshipFlagDefinitionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDeveloperPlatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MonolithHealthEntity

```ts
const monolith_health = client.MonolithHealth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MonolithHealth().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MonolithHealthEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDeveloperPlatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZoneSnippetEntity

```ts
const zone_snippet = client.ZoneSnippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes | Lists error messages. |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes | Contain warning messages. |
| `result` | `Record<string, any>` | Yes | Define a snippet. |
| `result_info` | `Record<string, any>` | Yes | Additional information to navigate the results. |
| `rules` | `any[]` | Yes | Lists snippet rules. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZoneSnippet().list({ id: "example_id" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZoneSnippet().load({ id: 'zone_snippet_id', zone_id: 'zone_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ZoneSnippet().remove({ id: 'zone_snippet_id', zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZoneSnippet().update({
  id: 'zone_snippet_id',
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZoneSnippetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareDeveloperPlatformSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CloudflareDeveloperPlatformSDK({
  feature: {
    test: { active: true },
  }
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


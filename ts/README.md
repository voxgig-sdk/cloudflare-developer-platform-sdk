# CloudflareDeveloperPlatform TypeScript SDK



The TypeScript SDK for the CloudflareDeveloperPlatform API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.App()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-developer-platform-sdk/releases](https://github.com/voxgig-sdk/cloudflare-developer-platform-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudflareDeveloperPlatformSDK } from '@voxgig-sdk/cloudflare-developer-platform-sdk'

const client = new CloudflareDeveloperPlatformSDK({
  apikey: process.env.CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY,
})
```

### 2. List app records

`list()` resolves to an array of App ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const apps = await client.App().list({ account_id: "example" })

for (const app of apps) {
  console.log(app)
}
```

### 3. Load a flag

Flag is nested under account, so provide the `account_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const flag = await client.Flag().load({
    account_id: 'example_account_id',
    app_id: 'example_app_id',
    id: 'example_id',
  })
  console.log(flag)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created App ENTITY (.data() for the record)
const created = await client.App().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  result: {},
  success: true,
})

// Update — the id comes off the returned entity's data()
const updated = await client.App().update({
  id: created.data().id!,
  account_id: 'example_account_id',
  errors: [],
})

// Remove
await client.App().remove({
  id: created.data().id!,
  account_id: 'example_account_id',
})
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const changelogs = await client.Changelog().list()
  console.log(changelogs)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudflareDeveloperPlatformSDK.test()

const changelog = await client.Changelog().list()
// changelog is the entity, populated with mock response data
// — call changelog.data() for the record itself
console.log(changelog)
```

You can also use the instance method:

```ts
const client = new CloudflareDeveloperPlatformSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Changelog()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudflareDeveloperPlatformSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CloudflareDeveloperPlatformSDK

#### Constructor

```ts
new CloudflareDeveloperPlatformSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `App(data?)` | `AppEntity` | Create an App entity instance. |
| `Artifact(data?)` | `ArtifactEntity` | Create an Artifact entity instance. |
| `BillSubsApiBulkAccountSubscription(data?)` | `BillSubsApiBulkAccountSubscriptionEntity` | Create a BillSubsApiBulkAccountSubscription entity instance. |
| `BrandProtection(data?)` | `BrandProtectionEntity` | Create a BrandProtection entity instance. |
| `Changelog(data?)` | `ChangelogEntity` | Create a Changelog entity instance. |
| `Flag(data?)` | `FlagEntity` | Create a Flag entity instance. |
| `FlagshipEvaluationResult(data?)` | `FlagshipEvaluationResultEntity` | Create a FlagshipEvaluationResult entity instance. |
| `FlagshipFlagDefinition(data?)` | `FlagshipFlagDefinitionEntity` | Create a FlagshipFlagDefinition entity instance. |
| `MonolithHealth(data?)` | `MonolithHealthEntity` | Create a MonolithHealth entity instance. |
| `ZoneSnippet(data?)` | `ZoneSnippetEntity` | Create a ZoneSnippet entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudflareDeveloperPlatformSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudflareDeveloperPlatformSDK.test(testopts?, sdkopts?)` | `CloudflareDeveloperPlatformSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudflareDeveloperPlatformSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove.

API path: `/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/fork`

#### BillSubsApiBulkAccountSubscription

| Field | Description |
| --- | --- |
| `coupon_code` |  |
| `payment_hold_id` |  |
| `subscriptions` |  |
| `user_is_on_session` |  |

Operations: create.

API path: `/accounts/{account_id}/bulk/subscriptions`

#### BrandProtection

| Field | Description |
| --- | --- |

Operations: create, load.

API path: `/internal/submit`

#### Changelog

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: list.

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

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/flagship/apps/{app_id}/flags`

#### FlagshipEvaluationResult

| Field | Description |
| --- | --- |
| `context` |  |
| `flagKey` |  |
| `reason` |  |
| `value` |  |
| `variant` |  |

Operations: create, load.

API path: `/accounts/{account_id}/flagship/apps/{app_id}/evaluate`

#### FlagshipFlagDefinition

| Field | Description |
| --- | --- |
| `default_variation` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `enabled` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `key` | Unique identifier for the flag within an app. |
| `rules` |  |
| `variations` | Map of variation name to value. |

Operations: load.

API path: `/accounts/{account_id}/flagship/apps/{app_id}/definitions`

#### MonolithHealth

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: list.

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

Operations: list, load, remove, update.

API path: `/zones/{zone_id}/snippets`



## Entities


### App

Create an instance: `const app = client.App()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `name` | `string` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const app = await client.App().load({ id: 'app_id', account_id: 'account_id' })
```

#### Example: List

```ts
const apps = await client.App().list({ account_id: "example" })
```

#### Example: Create

```ts
const app = await client.App().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  result: {},
  success: true,
})
```


### Artifact

Create an instance: `const artifact = client.Artifact()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `name` | `string` |  |
| `read_only` | `boolean` |  |
| `repo` | `string` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `any` |  |
| `scope` | `string` |  |
| `success` | `boolean` |  |
| `ttl` | `number` |  |

#### Example: Load

```ts
const artifact = await client.Artifact().load({ account_id: 'account_id' })
```

#### Example: List

```ts
const artifacts = await client.Artifact().list({ account_id: "example", namespace_id: "example" })
```

#### Example: Create

```ts
const artifact = await client.Artifact().create({
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


### BillSubsApiBulkAccountSubscription

Create an instance: `const bill_subs_api_bulk_account_subscription = client.BillSubsApiBulkAccountSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coupon_code` | `string` |  |
| `payment_hold_id` | `number` |  |
| `subscriptions` | `any[]` |  |
| `user_is_on_session` | `boolean` |  |

#### Example: Create

```ts
const bill_subs_api_bulk_account_subscription = await client.BillSubsApiBulkAccountSubscription().create({
  account_id: 'example_account_id',
})
```


### BrandProtection

Create an instance: `const brand_protection = client.BrandProtection()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const brand_protection = await client.BrandProtection().load()
```

#### Example: Create

```ts
const brand_protection = await client.BrandProtection().create({
})
```


### Changelog

Create an instance: `const changelog = client.Changelog()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const changelogs = await client.Changelog().list({ account_id: "example", app_id: "example", flag_key: "example" })
```


### Flag

Create an instance: `const flag = client.Flag()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `key` | `string` | Unique identifier for the flag within an app. |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `rules` | `any[]` | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `success` | `boolean` |  |
| `type` | `string` | Deprecated compatibility field. |
| `variations` | `Record<string, any>` | Map of variation name to value. |

#### Example: Load

```ts
const flag = await client.Flag().load({ id: 'flag_id', account_id: 'account_id', app_id: 'app_id' })
```

#### Example: List

```ts
const flags = await client.Flag().list({ account_id: "example", app_id: "example" })
```

#### Example: Create

```ts
const flag = await client.Flag().create({
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


### FlagshipEvaluationResult

Create an instance: `const flagship_evaluation_result = client.FlagshipEvaluationResult()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `Record<string, any>` |  |
| `flagKey` | `string` |  |
| `reason` | `string` |  |
| `value` | `any` |  |
| `variant` | `string` |  |

#### Example: Load

```ts
const flagship_evaluation_result = await client.FlagshipEvaluationResult().load({ account_id: 'account_id', app_id: 'app_id', flag_key: 'flag_key' })
```

#### Example: Create

```ts
const flagship_evaluation_result = await client.FlagshipEvaluationResult().create({
  account_id: 'example_account_id',
  app_id: 'example_app_id',
  flagKey: 'example_flagKey',
  reason: 'example_reason',
  variant: 'example_variant',
})
```


### FlagshipFlagDefinition

Create an instance: `const flagship_flag_definition = client.FlagshipFlagDefinition()`

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
| `rules` | `any[]` |  |
| `variations` | `Record<string, any>` | Map of variation name to value. |

#### Example: Load

```ts
const flagship_flag_definition = await client.FlagshipFlagDefinition().load({ account_id: 'account_id', app_id: 'app_id' })
```


### MonolithHealth

Create an instance: `const monolith_health = client.MonolithHealth()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const monolith_healths = await client.MonolithHealth().list()
```


### ZoneSnippet

Create an instance: `const zone_snippet = client.ZoneSnippet()`

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
| `errors` | `any[]` | Lists error messages. |
| `id` | `string` |  |
| `messages` | `any[]` | Contain warning messages. |
| `result` | `Record<string, any>` | Define a snippet. |
| `result_info` | `Record<string, any>` | Additional information to navigate the results. |
| `rules` | `any[]` | Lists snippet rules. |
| `success` | `boolean` | Indicate whether the API call was successful. |

#### Example: Load

```ts
const zone_snippet = await client.ZoneSnippet().load({ id: 'zone_snippet_id', zone_id: 'zone_id' })
```

#### Example: List

```ts
const zone_snippets = await client.ZoneSnippet().list({ id: "example_id" })
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudflare-developer-platform/
├── src/
│   ├── CloudflareDeveloperPlatformSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudflareDeveloperPlatformSDK } from '@voxgig-sdk/cloudflare-developer-platform-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const changelog = client.Changelog()
await changelog.list()

// changelog.data() now returns the changelog data from the last `list`
// changelog.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

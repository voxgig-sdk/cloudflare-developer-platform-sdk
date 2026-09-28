# CloudflareDeveloperPlatform Golang SDK



The Golang SDK for the CloudflareDeveloperPlatform API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.App(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudflare-developer-platform-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudflare-developer-platform-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudflare-developer-platform-sdk/go=../cloudflare-developer-platform-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cloudflare-developer-platform-sdk/go"
)

func main() {
    client := sdk.NewCloudflareDeveloperPlatformSDK(map[string]any{
        "apikey": os.Getenv("CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY"),
    })

    // List app records — the value is the array of records itself.
    apps, err := client.App(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range apps.([]any) {
        fmt.Println(item)
    }

    // Load a single app — the value is the loaded record.
    app, err := client.App(nil).Load(map[string]any{"id": "example_id", "account_id": "example_account_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(app)

    // Create a app.
    created, err := client.App(nil).Create(map[string]any{"account_id": "example_account_id", "errors": []any{}, "messages": []any{}, "name": "example_name", "result": map[string]any{}, "success": true}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)

    // Update a app.
    updated, err := client.App(nil).Update(map[string]any{"id": "example_id", "account_id": "example_account_id", "errors": []any{}}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)

    // Remove a app.
    removed, err := client.App(nil).Remove(map[string]any{"id": "example_id", "account_id": "example_account_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
changelogs, err := client.Changelog(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = changelogs
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

changelog, err := client.Changelog(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(changelog) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudflareDeveloperPlatformSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCloudflareDeveloperPlatformSDK

```go
func NewCloudflareDeveloperPlatformSDK(options map[string]any) *CloudflareDeveloperPlatformSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareDeveloperPlatformSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareDeveloperPlatformSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `App` | `(data map[string]any) CloudflareDeveloperPlatformEntity` | Create an App entity instance. |
| `Artifact` | `(data map[string]any) CloudflareDeveloperPlatformEntity` | Create an Artifact entity instance. |
| `BillSubsApiBulkAccountSubscription` | `(data map[string]any) CloudflareDeveloperPlatformEntity` | Create a BillSubsApiBulkAccountSubscription entity instance. |
| `BrandProtection` | `(data map[string]any) CloudflareDeveloperPlatformEntity` | Create a BrandProtection entity instance. |
| `Changelog` | `(data map[string]any) CloudflareDeveloperPlatformEntity` | Create a Changelog entity instance. |
| `Flag` | `(data map[string]any) CloudflareDeveloperPlatformEntity` | Create a Flag entity instance. |
| `FlagshipEvaluationResult` | `(data map[string]any) CloudflareDeveloperPlatformEntity` | Create a FlagshipEvaluationResult entity instance. |
| `FlagshipFlagDefinition` | `(data map[string]any) CloudflareDeveloperPlatformEntity` | Create a FlagshipFlagDefinition entity instance. |
| `MonolithHealth` | `(data map[string]any) CloudflareDeveloperPlatformEntity` | Create a MonolithHealth entity instance. |
| `ZoneSnippet` | `(data map[string]any) CloudflareDeveloperPlatformEntity` | Create a ZoneSnippet entity instance. |

### Entity interface (CloudflareDeveloperPlatformEntity)

All entities implement the `CloudflareDeveloperPlatformEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    app, err := client.App(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // app is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### App

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"name"` |  |
| `"result"` |  |
| `"success"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/flagship/apps`

#### Artifact

| Field | Description |
| --- | --- |
| `"default_branch"` | Git branch name. |
| `"description"` |  |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"name"` |  |
| `"read_only"` |  |
| `"repo"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"scope"` |  |
| `"success"` |  |
| `"ttl"` |  |

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/fork`

#### BillSubsApiBulkAccountSubscription

| Field | Description |
| --- | --- |
| `"coupon_code"` |  |
| `"payment_hold_id"` |  |
| `"subscriptions"` |  |
| `"user_is_on_session"` |  |

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
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}/changelog`

#### Flag

| Field | Description |
| --- | --- |
| `"default_variation"` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `"description"` |  |
| `"enabled"` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `"errors"` |  |
| `"id"` |  |
| `"key"` | Unique identifier for the flag within an app. |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"rules"` | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `"success"` |  |
| `"type"` | Deprecated compatibility field. |
| `"variations"` | Map of variation name to value. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/flagship/apps/{app_id}/flags`

#### FlagshipEvaluationResult

| Field | Description |
| --- | --- |
| `"context"` |  |
| `"flagKey"` |  |
| `"reason"` |  |
| `"value"` |  |
| `"variant"` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/flagship/apps/{app_id}/evaluate`

#### FlagshipFlagDefinition

| Field | Description |
| --- | --- |
| `"default_variation"` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `"enabled"` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `"key"` | Unique identifier for the flag within an app. |
| `"rules"` |  |
| `"variations"` | Map of variation name to value. |

Operations: Load.

API path: `/accounts/{account_id}/flagship/apps/{app_id}/definitions`

#### MonolithHealth

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` |  |

Operations: List.

API path: `/api/v4/health`

#### ZoneSnippet

| Field | Description |
| --- | --- |
| `"errors"` | Lists error messages. |
| `"id"` |  |
| `"messages"` | Contain warning messages. |
| `"result"` | Define a snippet. |
| `"result_info"` | Additional information to navigate the results. |
| `"rules"` | Lists snippet rules. |
| `"success"` | Indicate whether the API call was successful. |

Operations: List, Load, Remove, Update.

API path: `/zones/{zone_id}/snippets`



## Entities


### App

Create an instance: `app := client.App(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `name` | `string` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: Load

```go
app, err := client.App(nil).Load(map[string]any{"id": "app_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(app) // the loaded record
```

#### Example: List

```go
apps, err := client.App(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apps) // the array of records
```

#### Example: Create

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


### Artifact

Create an instance: `artifact := client.Artifact(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_branch` | `string` | Git branch name. |
| `description` | `string` |  |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `name` | `string` |  |
| `read_only` | `bool` |  |
| `repo` | `string` |  |
| `result` | `map[string]any` |  |
| `result_info` | `any` |  |
| `scope` | `string` |  |
| `success` | `bool` |  |
| `ttl` | `int` |  |

#### Example: Load

```go
artifact, err := client.Artifact(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(artifact) // the loaded record
```

#### Example: List

```go
artifacts, err := client.Artifact(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(artifacts) // the array of records
```

#### Example: Create

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


### BillSubsApiBulkAccountSubscription

Create an instance: `billSubsApiBulkAccountSubscription := client.BillSubsApiBulkAccountSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coupon_code` | `string` |  |
| `payment_hold_id` | `int` |  |
| `subscriptions` | `[]any` |  |
| `user_is_on_session` | `bool` |  |

#### Example: Create

```go
result, err := client.BillSubsApiBulkAccountSubscription(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BrandProtection

Create an instance: `brandProtection := client.BrandProtection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
brandProtection, err := client.BrandProtection(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(brandProtection) // the loaded record
```

#### Example: Create

```go
result, err := client.BrandProtection(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Changelog

Create an instance: `changelog := client.Changelog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
changelogs, err := client.Changelog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(changelogs) // the array of records
```


### Flag

Create an instance: `flag := client.Flag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_variation` | `string` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `description` | `string` |  |
| `enabled` | `bool` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `key` | `string` | Unique identifier for the flag within an app. |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `rules` | `[]any` | Targeting rules evaluated in ascending `priority`; the first matching rule wins. |
| `success` | `bool` |  |
| `type` | `string` | Deprecated compatibility field. |
| `variations` | `map[string]any` | Map of variation name to value. |

#### Example: Load

```go
flag, err := client.Flag(nil).Load(map[string]any{"id": "flag_id", "account_id": "account_id", "app_id": "app_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(flag) // the loaded record
```

#### Example: List

```go
flags, err := client.Flag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(flags) // the array of records
```

#### Example: Create

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


### FlagshipEvaluationResult

Create an instance: `flagshipEvaluationResult := client.FlagshipEvaluationResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `map[string]any` |  |
| `flagKey` | `string` |  |
| `reason` | `string` |  |
| `value` | `any` |  |
| `variant` | `string` |  |

#### Example: Load

```go
flagshipEvaluationResult, err := client.FlagshipEvaluationResult(nil).Load(map[string]any{"account_id": "account_id", "app_id": "app_id", "flag_key": "flag_key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(flagshipEvaluationResult) // the loaded record
```

#### Example: Create

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


### FlagshipFlagDefinition

Create an instance: `flagshipFlagDefinition := client.FlagshipFlagDefinition(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_variation` | `string` | Variation the API serves when the flag is off, or when it's on but no rule matches the context. |
| `enabled` | `bool` | When false, the flag bypasses all rules and always serves `default_variation`. |
| `key` | `string` | Unique identifier for the flag within an app. |
| `rules` | `[]any` |  |
| `variations` | `map[string]any` | Map of variation name to value. |

#### Example: Load

```go
flagshipFlagDefinition, err := client.FlagshipFlagDefinition(nil).Load(map[string]any{"account_id": "account_id", "app_id": "app_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(flagshipFlagDefinition) // the loaded record
```


### MonolithHealth

Create an instance: `monolithHealth := client.MonolithHealth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
monolithHealths, err := client.MonolithHealth(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(monolithHealths) // the array of records
```


### ZoneSnippet

Create an instance: `zoneSnippet := client.ZoneSnippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | Lists error messages. |
| `id` | `string` |  |
| `messages` | `[]any` | Contain warning messages. |
| `result` | `map[string]any` | Define a snippet. |
| `result_info` | `map[string]any` | Additional information to navigate the results. |
| `rules` | `[]any` | Lists snippet rules. |
| `success` | `bool` | Indicate whether the API call was successful. |

#### Example: Load

```go
zoneSnippet, err := client.ZoneSnippet(nil).Load(map[string]any{"id": "zone_snippet_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zoneSnippet) // the loaded record
```

#### Example: List

```go
zoneSnippets, err := client.ZoneSnippet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zoneSnippets) // the array of records
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudflare-developer-platform-sdk/go/
├── cloudflare-developer-platform.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudflare-developer-platform-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
changelog := client.Changelog(nil)
changelog.List(nil, nil)

// changelog.Data() now returns the changelog data from the last list
// changelog.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

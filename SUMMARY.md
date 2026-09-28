# Cloudflare Developer Platform

Cloudflare developer platform services: artifacts, feature flags, bulk operations, snippets, and platform readiness endpoints.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 10 entities and 45 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [App](docs/api/app.html)

Results: App created.; List of apps.; App details.; App deleted.; Updated app.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [Artifact](docs/api/artifact.html)

Results: Repository forked.; Repository import started.; Repository created.; Token created.; Namespace created.; Repositories.; Commits.; Tokens.; Namespaces.; File bytes with sniffed Content-Type and browser-safe response headers.; File bytes.; Blob bytes.; Commit metadata.; Tree entries.; Repository.; Namespace.; Token revoked.; Delete accepted.; Namespace deleted.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `default_branch`: Default branch name. Must not contain &#39;..&#39; and must not end with &#39;/&#39; or &#39;.&#39;.

### [BillSubsApiBulkAccountSubscription](docs/api/bill_subs_api_bulk_account_subscription.html)

Results: Create Subscriptions response.

SDK operations: `create`.

### [BrandProtection](docs/api/brand_protection.html)

SDK operations: `create`, `load`.

### [Changelog](docs/api/changelog.html)

Results: Paginated flag changelog.

SDK operations: `list`.

### [Flag](docs/api/flag.html)

Results: Flag created.; Paginated list of flags.; Flag details.; Flag deleted.; Updated flag.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `default_variation`: Variation the API serves when the flag is off, or when it&#39;s on but no rule matches the context. Must be a key in `variations`.
- `enabled`: When false, the flag bypasses all rules and always serves `default_variation`.
- `key`: Unique identifier for the flag within an app. Used in all evaluation and SDK calls.
- `rules`: Targeting rules evaluated in ascending `priority`; the first matching rule wins. An empty array means the flag always serves `default_variation`.
- `type`: Server-inferred value type shared by all of the flag&#39;s variations.

### [FlagshipEvaluationResult](docs/api/flagship_evaluation_result.html)

Results: Flag evaluation result.

SDK operations: `create`, `load`.

### [FlagshipFlagDefinition](docs/api/flagship_flag_definition.html)

Results: Evaluation-only flag definitions.

SDK operations: `load`.

Key fields to recognise:

- `default_variation`: Variation the API serves when the flag is off, or when it&#39;s on but no rule matches the context. Must be a key in `variations`.
- `enabled`: When false, the flag bypasses all rules and always serves `default_variation`.
- `key`: Unique identifier for the flag within an app. Used in all evaluation and SDK calls.
- `variations`: Map of variation name to value. All values share the same type (boolean, string, number, or JSON object/array), and each serialized value stays within 10KB.

### [MonolithHealth](docs/api/monolith_health.html)

Results: The API is healthy.

SDK operations: `list`.

### [ZoneSnippet](docs/api/zone_snippet.html)

Results: A snippets response.; A snippet rules response.; Return a snippet response.; Return snippet content.; Return a null response.

SDK operations: `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `errors`: Lists error messages.
- `id`: Specify the unique ID of the rule.
- `messages`: Contain warning messages.
- `result`: Contain snippets.
- `result_info`: Additional information to navigate the results.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [App](docs/api/app.html) | `create` | `POST /accounts/{account_id}/flagship/apps` | Required |
| [App](docs/api/app.html) | `list` | `GET /accounts/{account_id}/flagship/apps` | Required |
| [App](docs/api/app.html) | `load` | `GET /accounts/{account_id}/flagship/apps/{app_id}` | Required |
| [App](docs/api/app.html) | `remove` | `DELETE /accounts/{account_id}/flagship/apps/{app_id}` | Required |
| [App](docs/api/app.html) | `update` | `PUT /accounts/{account_id}/flagship/apps/{app_id}` | Required |
| [Artifact](docs/api/artifact.html) | `create` | `POST /accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/fork` | Required |
| [Artifact](docs/api/artifact.html) | `create` | `POST /accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/import` | Required |
| [Artifact](docs/api/artifact.html) | `create` | `POST /accounts/{account_id}/artifacts/namespaces/{namespace}/repos` | Required |
| [Artifact](docs/api/artifact.html) | `create` | `POST /accounts/{account_id}/artifacts/namespaces/{namespace}/tokens` | Required |
| [Artifact](docs/api/artifact.html) | `create` | `POST /accounts/{account_id}/artifacts/namespaces` | Required |
| [Artifact](docs/api/artifact.html) | `list` | `GET /accounts/{account_id}/artifacts/namespaces/{namespace}/repos` | Required |
| [Artifact](docs/api/artifact.html) | `list` | `GET /accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/log` | Required |
| [Artifact](docs/api/artifact.html) | `list` | `GET /accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/tokens` | Required |
| [Artifact](docs/api/artifact.html) | `list` | `GET /accounts/{account_id}/artifacts/namespaces` | Required |
| [Artifact](docs/api/artifact.html) | `load` | `GET /accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/raw/{ref}/{path}` | Required |
| [Artifact](docs/api/artifact.html) | `load` | `GET /accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/file` | Required |
| [Artifact](docs/api/artifact.html) | `load` | `GET /accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/blob/{hash}` | Required |
| [Artifact](docs/api/artifact.html) | `load` | `GET /accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/commit/{hash}` | Required |
| [Artifact](docs/api/artifact.html) | `load` | `GET /accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/tree/{hash}` | Required |
| [Artifact](docs/api/artifact.html) | `load` | `GET /accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}` | Required |
| [Artifact](docs/api/artifact.html) | `load` | `GET /accounts/{account_id}/artifacts/namespaces/{namespace}` | Required |
| [Artifact](docs/api/artifact.html) | `remove` | `DELETE /accounts/{account_id}/artifacts/namespaces/{namespace}/tokens/{id}` | Required |
| [Artifact](docs/api/artifact.html) | `remove` | `DELETE /accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}` | Required |
| [Artifact](docs/api/artifact.html) | `remove` | `DELETE /accounts/{account_id}/artifacts/namespaces/{namespace}` | Required |
| [BillSubsApiBulkAccountSubscription](docs/api/bill_subs_api_bulk_account_subscription.html) | `create` | `POST /accounts/{account_id}/bulk/subscriptions` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `create` | `POST /internal/submit` | Required |
| [BrandProtection](docs/api/brand_protection.html) | `load` | `GET /ready` | Required |
| [Changelog](docs/api/changelog.html) | `list` | `GET /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}/changelog` | Required |
| [Flag](docs/api/flag.html) | `create` | `POST /accounts/{account_id}/flagship/apps/{app_id}/flags` | Required |
| [Flag](docs/api/flag.html) | `list` | `GET /accounts/{account_id}/flagship/apps/{app_id}/flags` | Required |
| [Flag](docs/api/flag.html) | `load` | `GET /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}` | Required |
| [Flag](docs/api/flag.html) | `remove` | `DELETE /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}` | Required |
| [Flag](docs/api/flag.html) | `update` | `PUT /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}` | Required |
| [FlagshipEvaluationResult](docs/api/flagship_evaluation_result.html) | `create` | `POST /accounts/{account_id}/flagship/apps/{app_id}/evaluate` | Required |
| [FlagshipEvaluationResult](docs/api/flagship_evaluation_result.html) | `load` | `GET /accounts/{account_id}/flagship/apps/{app_id}/evaluate` | Required |
| [FlagshipFlagDefinition](docs/api/flagship_flag_definition.html) | `load` | `GET /accounts/{account_id}/flagship/apps/{app_id}/definitions` | Required |
| [MonolithHealth](docs/api/monolith_health.html) | `list` | `GET /api/v4/health` | Not required |
| [ZoneSnippet](docs/api/zone_snippet.html) | `list` | `GET /zones/{zone_id}/snippets` | Required |
| [ZoneSnippet](docs/api/zone_snippet.html) | `list` | `GET /zones/{zone_id}/snippets/snippet_rules` | Required |
| [ZoneSnippet](docs/api/zone_snippet.html) | `load` | `GET /zones/{zone_id}/snippets/{snippet_name}` | Required |
| [ZoneSnippet](docs/api/zone_snippet.html) | `load` | `GET /zones/{zone_id}/snippets/{snippet_name}/content` | Required |
| [ZoneSnippet](docs/api/zone_snippet.html) | `remove` | `DELETE /zones/{zone_id}/snippets/{snippet_name}` | Required |
| [ZoneSnippet](docs/api/zone_snippet.html) | `remove` | `DELETE /zones/{zone_id}/snippets/snippet_rules` | Required |
| [ZoneSnippet](docs/api/zone_snippet.html) | `update` | `PUT /zones/{zone_id}/snippets/{snippet_name}` | Required |
| [ZoneSnippet](docs/api/zone_snippet.html) | `update` | `PUT /zones/{zone_id}/snippets/snippet_rules` | Required |

## Connect to the API

- Client API: `https://api.cloudflare.com/client/v4`

The default credential is sent in the `X-Auth-Email` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

A read request without required parameters or authentication is `GET /api/v4/health`. For example:

```sh
curl --fail-with-body --silent --show-error 'https://api.cloudflare.com/client/v4/api/v4/health'
```

Inspect the response using the [MonolithHealth](docs/api/monolith_health.html) reference. This checks the public route; authenticated operations need their own credentials and request data.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudflare-developer-platform_list`: List records for an entity. Supported entities: `app`, `artifact`, `changelog`, `flag`, `monolith_health`, `zone_snippet`.
- `cloudflare-developer-platform_load`: Load one record for an entity. Supported entities: `app`, `artifact`, `brand_protection`, `flag`, `flagship_evaluation_result`, `flagship_flag_definition`, `zone_snippet`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.


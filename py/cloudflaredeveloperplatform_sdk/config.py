# CloudflareDeveloperPlatform SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "CloudflareDeveloperPlatform",
            "slug": "cloudflare-developer-platform",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
        },
        "options": {
            "base": "https://api.cloudflare.com/client/v4",
            "auth": {
                "prefix": "",
                "name": "X-Auth-Email",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "app": {},
                "artifact": {},
                "bill_subs_api_bulk_account_subscription": {},
                "brand_protection": {},
                "changelog": {},
                "flag": {},
                "flagship_evaluation_result": {},
                "flagship_flag_definition": {},
                "monolith_health": {},
                "zone_snippet": {},
            },
        },
        "entity": {
      "app": {
        "fields": [
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "messages",
            "title": "Messages",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "update": {
                "type": "`$STRING`",
              },
            },
          },
          {
            "name": "result",
            "title": "Result",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "success",
            "title": "Success",
            "type": "`$BOOLEAN`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "app",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/accounts/{account_id}/flagship/apps",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                ],
                "rename": {},
                "transform": {
                  "req": {
                    "name": "`reqdata.name`",
                  },
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                  ],
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/flagship/apps",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/flagship/apps/{app_id}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "app_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "id",
                  ],
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/accounts/{account_id}/flagship/apps/{app_id}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "app_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "id",
                  ],
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/accounts/{account_id}/flagship/apps/{app_id}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "app_id": "id",
                  },
                },
                "transform": {
                  "req": {
                    "name": "`reqdata.name`",
                  },
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "artifact": {
        "fields": [
          {
            "name": "default_branch",
            "title": "Default Branch",
            "type": "`$STRING`",
            "short": "Git branch name.",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "messages",
            "title": "Messages",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "read_only",
            "title": "Read Only",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "repo",
            "title": "Repo",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "result",
            "title": "Result",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "result_info",
            "title": "Result Info",
            "type": "`$ANY`",
          },
          {
            "name": "scope",
            "title": "Scope",
            "type": "`$STRING`",
          },
          {
            "name": "success",
            "title": "Success",
            "type": "`$BOOLEAN`",
            "req": True,
          },
          {
            "name": "ttl",
            "title": "Ttl",
            "type": "`$INTEGER`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "artifact",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/fork",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "repos",
                  },
                  {
                    "var": "name",
                  },
                  {
                    "lit": "fork",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "repos",
                  "{name}",
                  "fork",
                ],
                "rename": {
                  "param": {
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "fork",
                  "exist": [
                    "account_id",
                    "name",
                    "namespace_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/import",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "repos",
                  },
                  {
                    "var": "name",
                  },
                  {
                    "lit": "import",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "repos",
                  "{name}",
                  "import",
                ],
                "rename": {
                  "param": {
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "import",
                  "exist": [
                    "account_id",
                    "name",
                    "namespace_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "repos",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "repos",
                ],
                "rename": {
                  "param": {
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "namespace_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/tokens",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "tokens",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "tokens",
                ],
                "rename": {
                  "param": {
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "namespace_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/accounts/{account_id}/artifacts/namespaces",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "namespace",
                  "exist": [
                    "account_id",
                  ],
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "repos",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "repos",
                ],
                "rename": {
                  "param": {
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "direction",
                      "orig": "direction",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "desc",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 50,
                    },
                    {
                      "name": "search",
                      "orig": "search",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "created_at",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "cursor",
                    "direction",
                    "limit",
                    "namespace_id",
                    "search",
                    "sort",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/log",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "repos",
                  },
                  {
                    "var": "name",
                  },
                  {
                    "lit": "log",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "repos",
                  "{name}",
                  "log",
                ],
                "rename": {
                  "param": {
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "ref",
                      "orig": "ref",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "limit",
                    "name",
                    "namespace_id",
                    "offset",
                    "ref",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/tokens",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "repos",
                  },
                  {
                    "var": "name",
                  },
                  {
                    "lit": "tokens",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "repos",
                  "{name}",
                  "tokens",
                ],
                "rename": {
                  "param": {
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "per_page",
                      "orig": "per_page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 30,
                    },
                    {
                      "name": "state",
                      "orig": "state",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "active",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "name",
                    "namespace_id",
                    "page",
                    "per_page",
                    "state",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/artifacts/namespaces",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 100,
                    },
                  ],
                },
                "select": {
                  "$action": "namespace",
                  "exist": [
                    "account_id",
                    "cursor",
                    "limit",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/raw/{ref}/{path}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace",
                  },
                  {
                    "lit": "repos",
                  },
                  {
                    "var": "name",
                  },
                  {
                    "lit": "raw",
                  },
                  {
                    "var": "ref",
                  },
                  {
                    "var": "path",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace}",
                  "repos",
                  "{name}",
                  "raw",
                  "{ref}",
                  "{path}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "path",
                      "orig": "path",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "ref",
                      "orig": "ref",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "name",
                    "namespace",
                    "path",
                    "ref",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/file",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "repos",
                  },
                  {
                    "var": "name",
                  },
                  {
                    "lit": "file",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "repos",
                  "{name}",
                  "file",
                ],
                "rename": {
                  "param": {
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "path",
                      "orig": "path",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "ref",
                      "orig": "ref",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "name",
                    "namespace_id",
                    "path",
                    "ref",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/blob/{hash}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "repos",
                  },
                  {
                    "var": "repo_id",
                  },
                  {
                    "lit": "blob",
                  },
                  {
                    "var": "hash",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "repos",
                  "{repo_id}",
                  "blob",
                  "{hash}",
                ],
                "rename": {
                  "param": {
                    "name": "repo_id",
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "hash",
                      "orig": "hash",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "repo_id",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "hash",
                    "namespace_id",
                    "repo_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/commit/{hash}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "repos",
                  },
                  {
                    "var": "repo_id",
                  },
                  {
                    "lit": "commit",
                  },
                  {
                    "var": "hash",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "repos",
                  "{repo_id}",
                  "commit",
                  "{hash}",
                ],
                "rename": {
                  "param": {
                    "name": "repo_id",
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "hash",
                      "orig": "hash",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "repo_id",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "hash",
                    "namespace_id",
                    "repo_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/tree/{hash}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "repos",
                  },
                  {
                    "var": "repo_id",
                  },
                  {
                    "lit": "tree",
                  },
                  {
                    "var": "hash",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "repos",
                  "{repo_id}",
                  "tree",
                  "{hash}",
                ],
                "rename": {
                  "param": {
                    "name": "repo_id",
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "hash",
                      "orig": "hash",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "repo_id",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "hash",
                    "namespace_id",
                    "repo_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "repos",
                  },
                  {
                    "var": "name",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "repos",
                  "{name}",
                ],
                "rename": {
                  "param": {
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "name",
                    "namespace_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "namespace",
                  ],
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/tokens/{id}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "tokens",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "tokens",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "id",
                    "namespace_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace_id",
                  },
                  {
                    "lit": "repos",
                  },
                  {
                    "var": "name",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace_id}",
                  "repos",
                  "{name}",
                ],
                "rename": {
                  "param": {
                    "namespace": "namespace_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace_id",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "name",
                    "namespace_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "artifacts",
                  },
                  {
                    "lit": "namespaces",
                  },
                  {
                    "var": "namespace",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "artifacts",
                  "namespaces",
                  "{namespace}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "namespace",
                      "orig": "namespace",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "namespace",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "bill_subs_api_bulk_account_subscription": {
        "fields": [
          {
            "name": "coupon_code",
            "title": "Coupon Code",
            "type": "`$STRING`",
          },
          {
            "name": "payment_hold_id",
            "title": "Payment Hold Id",
            "type": "`$INTEGER`",
            "format": "int64",
          },
          {
            "name": "subscriptions",
            "title": "Subscriptions",
            "type": "`$ARRAY`",
          },
          {
            "name": "user_is_on_session",
            "title": "User Is On Session",
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "bill_subs_api_bulk_account_subscription",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/accounts/{account_id}/bulk/subscriptions",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "bulk",
                  },
                  {
                    "lit": "subscriptions",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "bulk",
                  "subscriptions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  ],
                  "query": [
                    {
                      "name": "idemp_key",
                      "orig": "idemp_key",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "idemp_key",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "brand_protection": {
        "fields": [],
        "name": "brand_protection",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/internal/submit",
                "segments": [
                  {
                    "lit": "internal",
                  },
                  {
                    "lit": "submit",
                  },
                ],
                "parts": [
                  "internal",
                  "submit",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/ready",
                "segments": [
                  {
                    "lit": "ready",
                  },
                ],
                "parts": [
                  "ready",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "changelog": {
        "fields": [
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "messages",
            "title": "Messages",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "result",
            "title": "Result",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "result_info",
            "title": "Result Info",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "success",
            "title": "Success",
            "type": "`$BOOLEAN`",
            "req": True,
          },
        ],
        "name": "changelog",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}/changelog",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "flags",
                  },
                  {
                    "var": "flag_key",
                  },
                  {
                    "lit": "changelog",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                  "{app_id}",
                  "flags",
                  "{flag_key}",
                  "changelog",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "app_id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "flag_key",
                      "orig": "flag_key",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "app_id",
                    "cursor",
                    "flag_key",
                    "limit",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.app",
              "$.main.kit.entity.flag",
            ],
          ],
        },
      },
      "flag": {
        "fields": [
          {
            "name": "default_variation",
            "title": "Default Variation",
            "type": "`$STRING`",
            "req": True,
            "short": "Variation the API serves when the flag is off, or when it's on but no rule matches the context.",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
          },
          {
            "name": "enabled",
            "title": "Enabled",
            "type": "`$BOOLEAN`",
            "req": True,
            "short": "When false, the flag bypasses all rules and always serves `default_variation`.",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "key",
            "title": "Key",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the flag within an app.",
          },
          {
            "name": "messages",
            "title": "Messages",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "result",
            "title": "Result",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "result_info",
            "title": "Result Info",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "rules",
            "title": "Rules",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Targeting rules evaluated in ascending `priority`; the first matching rule wins.",
          },
          {
            "name": "success",
            "title": "Success",
            "type": "`$BOOLEAN`",
            "req": True,
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "Deprecated compatibility field.",
            "deprecated": True,
          },
          {
            "name": "variations",
            "title": "Variations",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Map of variation name to value.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "flag",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/accounts/{account_id}/flagship/apps/{app_id}/flags",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "flags",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                  "{app_id}",
                  "flags",
                ],
                "rename": {},
                "transform": {
                  "req": {
                    "default_variation": "`reqdata.default_variation`",
                    "description": "`reqdata.description`",
                    "enabled": "`reqdata.enabled`",
                    "key": "`reqdata.key`",
                    "rules": "`reqdata.rule`",
                    "type": "`reqdata.type`",
                    "variations": "`reqdata.variation`",
                  },
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "app_id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "app_id",
                  ],
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/flagship/apps/{app_id}/flags",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "flags",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                  "{app_id}",
                  "flags",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "app_id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "app_id",
                    "cursor",
                    "limit",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "flags",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                  "{app_id}",
                  "flags",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "flag_key": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "app_id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "id",
                      "orig": "flag_key",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "app_id",
                    "id",
                  ],
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "flags",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                  "{app_id}",
                  "flags",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "flag_key": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "app_id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "id",
                      "orig": "flag_key",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "app_id",
                    "id",
                  ],
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "flags",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                  "{app_id}",
                  "flags",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "flag_key": "id",
                  },
                },
                "transform": {
                  "req": {
                    "default_variation": "`reqdata.default_variation`",
                    "description": "`reqdata.description`",
                    "enabled": "`reqdata.enabled`",
                    "key": "`reqdata.key`",
                    "rules": "`reqdata.rule`",
                    "type": "`reqdata.type`",
                    "variations": "`reqdata.variation`",
                  },
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "app_id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "id",
                      "orig": "flag_key",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "app_id",
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.app",
            ],
          ],
        },
      },
      "flagship_evaluation_result": {
        "fields": [
          {
            "name": "context",
            "title": "Context",
            "type": "`$OBJECT`",
          },
          {
            "name": "flagKey",
            "title": "Flag Key",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "reason",
            "title": "Reason",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$ANY`",
          },
          {
            "name": "variant",
            "title": "Variant",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "flagship_evaluation_result",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/accounts/{account_id}/flagship/apps/{app_id}/evaluate",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "evaluate",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                  "{app_id}",
                  "evaluate",
                ],
                "rename": {},
                "transform": {
                  "req": {
                    "context": "`reqdata.context`",
                    "flagKey": "`reqdata.flag_key`",
                  },
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "app_id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "app_id",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/flagship/apps/{app_id}/evaluate",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "evaluate",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                  "{app_id}",
                  "evaluate",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "app_id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "flag_key",
                      "orig": "flag_key",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "targeting_key",
                      "orig": "targeting_key",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "app_id",
                    "flag_key",
                    "targeting_key",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.app",
            ],
          ],
        },
      },
      "flagship_flag_definition": {
        "fields": [
          {
            "name": "default_variation",
            "title": "Default Variation",
            "type": "`$STRING`",
            "req": True,
            "short": "Variation the API serves when the flag is off, or when it's on but no rule matches the context.",
          },
          {
            "name": "enabled",
            "title": "Enabled",
            "type": "`$BOOLEAN`",
            "req": True,
            "short": "When false, the flag bypasses all rules and always serves `default_variation`.",
          },
          {
            "name": "key",
            "title": "Key",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the flag within an app.",
          },
          {
            "name": "rules",
            "title": "Rules",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "variations",
            "title": "Variations",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Map of variation name to value.",
          },
        ],
        "name": "flagship_flag_definition",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/accounts/{account_id}/flagship/apps/{app_id}/definitions",
                "segments": [
                  {
                    "lit": "accounts",
                  },
                  {
                    "var": "account_id",
                  },
                  {
                    "lit": "flagship",
                  },
                  {
                    "lit": "apps",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "definitions",
                  },
                ],
                "parts": [
                  "accounts",
                  "{account_id}",
                  "flagship",
                  "apps",
                  "{app_id}",
                  "definitions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.flags`",
                },
                "args": {
                  "header": [
                    {
                      "name": "if_none_match",
                      "orig": "if_none_match",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "account_id",
                      "orig": "account_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "app_id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_id",
                    "app_id",
                    "if_none_match",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.app",
            ],
          ],
        },
      },
      "monolith_health": {
        "fields": [
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "messages",
            "title": "Messages",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "result",
            "title": "Result",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "success",
            "title": "Success",
            "type": "`$BOOLEAN`",
            "req": True,
          },
        ],
        "name": "monolith_health",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/v4/health",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "v4",
                  },
                  {
                    "lit": "health",
                  },
                ],
                "parts": [
                  "api",
                  "v4",
                  "health",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "zone_snippet": {
        "fields": [
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "req": True,
            "op": {
              "list": {
                "type": "`$ARRAY`",
              },
              "load": {
                "type": "`$ARRAY`",
              },
            },
            "short": "Lists error messages.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "messages",
            "title": "Messages",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Contain warning messages.",
          },
          {
            "name": "result",
            "title": "Result",
            "type": "`$OBJECT`",
            "req": True,
            "op": {
              "list": {
                "type": "`$ARRAY`",
              },
            },
            "short": "Define a snippet.",
          },
          {
            "name": "result_info",
            "title": "Result Info",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Additional information to navigate the results.",
          },
          {
            "name": "rules",
            "title": "Rules",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Lists snippet rules.",
          },
          {
            "name": "success",
            "title": "Success",
            "type": "`$BOOLEAN`",
            "req": True,
            "op": {
              "list": {
                "type": "`$BOOLEAN`",
              },
              "load": {
                "type": "`$BOOLEAN`",
              },
            },
            "short": "Indicate whether the API call was successful.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "zone_snippet",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/zones/{zone_id}/snippets",
                "segments": [
                  {
                    "lit": "zones",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "snippets",
                  },
                ],
                "parts": [
                  "zones",
                  "{id}",
                  "snippets",
                ],
                "rename": {
                  "param": {
                    "zone_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "zone_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "9f1839b6152d298aca64c4e906b6d074",
                    },
                  ],
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "per_page",
                      "orig": "per_page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "page",
                    "per_page",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/zones/{zone_id}/snippets/snippet_rules",
                "segments": [
                  {
                    "lit": "zones",
                  },
                  {
                    "var": "zone_id",
                  },
                  {
                    "lit": "snippets",
                  },
                  {
                    "lit": "snippet_rules",
                  },
                ],
                "parts": [
                  "zones",
                  "{zone_id}",
                  "snippets",
                  "snippet_rules",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "zone_id",
                      "orig": "zone_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "9f1839b6152d298aca64c4e906b6d074",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "zone_id",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/zones/{zone_id}/snippets/{snippet_name}",
                "segments": [
                  {
                    "lit": "zones",
                  },
                  {
                    "var": "zone_id",
                  },
                  {
                    "lit": "snippets",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "zones",
                  "{zone_id}",
                  "snippets",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "snippet_name": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "snippet_name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "my_snippet",
                    },
                    {
                      "name": "zone_id",
                      "orig": "zone_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "9f1839b6152d298aca64c4e906b6d074",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "zone_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/zones/{zone_id}/snippets/{snippet_name}/content",
                "segments": [
                  {
                    "lit": "zones",
                  },
                  {
                    "var": "zone_id",
                  },
                  {
                    "lit": "snippets",
                  },
                  {
                    "var": "snippet_name",
                  },
                  {
                    "lit": "content",
                  },
                ],
                "parts": [
                  "zones",
                  "{zone_id}",
                  "snippets",
                  "{snippet_name}",
                  "content",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "snippet_name",
                      "orig": "snippet_name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "my_snippet",
                    },
                    {
                      "name": "zone_id",
                      "orig": "zone_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "9f1839b6152d298aca64c4e906b6d074",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "snippet_name",
                    "zone_id",
                  ],
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/zones/{zone_id}/snippets/{snippet_name}",
                "segments": [
                  {
                    "lit": "zones",
                  },
                  {
                    "var": "zone_id",
                  },
                  {
                    "lit": "snippets",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "zones",
                  "{zone_id}",
                  "snippets",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "snippet_name": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "snippet_name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "my_snippet",
                    },
                    {
                      "name": "zone_id",
                      "orig": "zone_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "9f1839b6152d298aca64c4e906b6d074",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "zone_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/zones/{zone_id}/snippets/snippet_rules",
                "segments": [
                  {
                    "lit": "zones",
                  },
                  {
                    "var": "zone_id",
                  },
                  {
                    "lit": "snippets",
                  },
                  {
                    "lit": "snippet_rules",
                  },
                ],
                "parts": [
                  "zones",
                  "{zone_id}",
                  "snippets",
                  "snippet_rules",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "zone_id",
                      "orig": "zone_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "9f1839b6152d298aca64c4e906b6d074",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "zone_id",
                  ],
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/zones/{zone_id}/snippets/{snippet_name}",
                "segments": [
                  {
                    "lit": "zones",
                  },
                  {
                    "var": "zone_id",
                  },
                  {
                    "lit": "snippets",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "zones",
                  "{zone_id}",
                  "snippets",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "snippet_name": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "snippet_name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "my_snippet",
                    },
                    {
                      "name": "zone_id",
                      "orig": "zone_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "9f1839b6152d298aca64c4e906b6d074",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "zone_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/zones/{zone_id}/snippets/snippet_rules",
                "segments": [
                  {
                    "lit": "zones",
                  },
                  {
                    "var": "zone_id",
                  },
                  {
                    "lit": "snippets",
                  },
                  {
                    "lit": "snippet_rules",
                  },
                ],
                "parts": [
                  "zones",
                  "{zone_id}",
                  "snippets",
                  "snippet_rules",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "zone_id",
                      "orig": "zone_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "9f1839b6152d298aca64c4e906b6d074",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "zone_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

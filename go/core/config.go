package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CloudflareDeveloperPlatform",
			"slug": "cloudflare-developer-platform",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.cloudflare.com/client/v4",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-Auth-Email",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"app": map[string]any{},
				"artifact": map[string]any{},
				"bill_subs_api_bulk_account_subscription": map[string]any{},
				"brand_protection": map[string]any{},
				"changelog": map[string]any{},
				"flag": map[string]any{},
				"flagship_evaluation_result": map[string]any{},
				"flagship_flag_definition": map[string]any{},
				"monolith_health": map[string]any{},
				"zone_snippet": map[string]any{},
			},
		},
		"entity": map[string]any{
			"app": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "app",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/flagship/apps",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"name": "`reqdata.name`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/flagship/apps",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/flagship/apps/{app_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"app_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "app_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/flagship/apps/{app_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"app_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "app_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/flagship/apps/{app_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"app_id": "id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"name": "`reqdata.name`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "app_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"artifact": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "default_branch",
						"title": "Default Branch",
						"type": "`$STRING`",
						"short": "Git branch name.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "read_only",
						"title": "Read Only",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "repo",
						"title": "Repo",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "scope",
						"title": "Scope",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "ttl",
						"title": "Ttl",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "artifact",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/fork",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "repos",
									},
									map[string]any{
										"var": "name",
									},
									map[string]any{
										"lit": "fork",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"repos",
									"{name}",
									"fork",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "fork",
									"exist": []any{
										"account_id",
										"name",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/import",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "repos",
									},
									map[string]any{
										"var": "name",
									},
									map[string]any{
										"lit": "import",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"repos",
									"{name}",
									"import",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "import",
									"exist": []any{
										"account_id",
										"name",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "repos",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"repos",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/tokens",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "tokens",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"tokens",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/artifacts/namespaces",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "namespace",
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "repos",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"repos",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
											"example": "created_at",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cursor",
										"direction",
										"limit",
										"namespace_id",
										"search",
										"sort",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/log",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "repos",
									},
									map[string]any{
										"var": "name",
									},
									map[string]any{
										"lit": "log",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"repos",
									"{name}",
									"log",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "ref",
											"orig": "ref",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"limit",
										"name",
										"namespace_id",
										"offset",
										"ref",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/tokens",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "repos",
									},
									map[string]any{
										"var": "name",
									},
									map[string]any{
										"lit": "tokens",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"repos",
									"{name}",
									"tokens",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 30,
										},
										map[string]any{
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
											"kind": "query",
											"example": "active",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"name",
										"namespace_id",
										"page",
										"per_page",
										"state",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/artifacts/namespaces",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
									},
								},
								"select": map[string]any{
									"$action": "namespace",
									"exist": []any{
										"account_id",
										"cursor",
										"limit",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/raw/{ref}/{path}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace",
									},
									map[string]any{
										"lit": "repos",
									},
									map[string]any{
										"var": "name",
									},
									map[string]any{
										"lit": "raw",
									},
									map[string]any{
										"var": "ref",
									},
									map[string]any{
										"var": "path",
									},
								},
								"parts": []any{
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
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "path",
											"orig": "path",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "ref",
											"orig": "ref",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"name",
										"namespace",
										"path",
										"ref",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/file",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "repos",
									},
									map[string]any{
										"var": "name",
									},
									map[string]any{
										"lit": "file",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"repos",
									"{name}",
									"file",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "path",
											"orig": "path",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "ref",
											"orig": "ref",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"name",
										"namespace_id",
										"path",
										"ref",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/blob/{hash}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "repos",
									},
									map[string]any{
										"var": "repo_id",
									},
									map[string]any{
										"lit": "blob",
									},
									map[string]any{
										"var": "hash",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"repos",
									"{repo_id}",
									"blob",
									"{hash}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"name": "repo_id",
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "hash",
											"orig": "hash",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "repo_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"hash",
										"namespace_id",
										"repo_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/commit/{hash}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "repos",
									},
									map[string]any{
										"var": "repo_id",
									},
									map[string]any{
										"lit": "commit",
									},
									map[string]any{
										"var": "hash",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"repos",
									"{repo_id}",
									"commit",
									"{hash}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"name": "repo_id",
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "hash",
											"orig": "hash",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "repo_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"hash",
										"namespace_id",
										"repo_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/tree/{hash}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "repos",
									},
									map[string]any{
										"var": "repo_id",
									},
									map[string]any{
										"lit": "tree",
									},
									map[string]any{
										"var": "hash",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"repos",
									"{repo_id}",
									"tree",
									"{hash}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"name": "repo_id",
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "hash",
											"orig": "hash",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "repo_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"hash",
										"namespace_id",
										"repo_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "repos",
									},
									map[string]any{
										"var": "name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"repos",
									"{name}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"name",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"namespace",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/tokens/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"tokens",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "repos",
									},
									map[string]any{
										"var": "name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace_id}",
									"repos",
									"{name}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"name",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/artifacts/namespaces/{namespace}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "artifacts",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"artifacts",
									"namespaces",
									"{namespace}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"namespace",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bill_subs_api_bulk_account_subscription": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coupon_code",
						"title": "Coupon Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payment_hold_id",
						"title": "Payment Hold Id",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "subscriptions",
						"title": "Subscriptions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "user_is_on_session",
						"title": "User Is On Session",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "bill_subs_api_bulk_account_subscription",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/bulk/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "bulk",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"bulk",
									"subscriptions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "idemp_key",
											"orig": "idemp_key",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"idemp_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"brand_protection": map[string]any{
				"fields": []any{},
				"name": "brand_protection",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/internal/submit",
								"segments": []any{
									map[string]any{
										"lit": "internal",
									},
									map[string]any{
										"lit": "submit",
									},
								},
								"parts": []any{
									"internal",
									"submit",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/ready",
								"segments": []any{
									map[string]any{
										"lit": "ready",
									},
								},
								"parts": []any{
									"ready",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"changelog": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "changelog",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}/changelog",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "flags",
									},
									map[string]any{
										"var": "flag_key",
									},
									map[string]any{
										"lit": "changelog",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
									"{app_id}",
									"flags",
									"{flag_key}",
									"changelog",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "flag_key",
											"orig": "flag_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"app_id",
										"cursor",
										"flag_key",
										"limit",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.app",
							"$.main.kit.entity.flag",
						},
					},
				},
			},
			"flag": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "default_variation",
						"title": "Default Variation",
						"type": "`$STRING`",
						"req": true,
						"short": "Variation the API serves when the flag is off, or when it's on but no rule matches the context.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "When false, the flag bypasses all rules and always serves `default_variation`.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the flag within an app.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "rules",
						"title": "Rules",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Targeting rules evaluated in ascending `priority`; the first matching rule wins.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Deprecated compatibility field.",
						"deprecated": true,
					},
					map[string]any{
						"name": "variations",
						"title": "Variations",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Map of variation name to value.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "flag",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/flagship/apps/{app_id}/flags",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "flags",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
									"{app_id}",
									"flags",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
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
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"app_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/flagship/apps/{app_id}/flags",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "flags",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
									"{app_id}",
									"flags",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"app_id",
										"cursor",
										"limit",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "flags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
									"{app_id}",
									"flags",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"flag_key": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "flag_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"app_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "flags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
									"{app_id}",
									"flags",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"flag_key": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "flag_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"app_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "flags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
									"{app_id}",
									"flags",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"flag_key": "id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
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
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "flag_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"app_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.app",
						},
					},
				},
			},
			"flagship_evaluation_result": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "context",
						"title": "Context",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "flagKey",
						"title": "Flag Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "reason",
						"title": "Reason",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "variant",
						"title": "Variant",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "flagship_evaluation_result",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/flagship/apps/{app_id}/evaluate",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "evaluate",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
									"{app_id}",
									"evaluate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"context": "`reqdata.context`",
										"flagKey": "`reqdata.flag_key`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"app_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/flagship/apps/{app_id}/evaluate",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "evaluate",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
									"{app_id}",
									"evaluate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "flag_key",
											"orig": "flag_key",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "targeting_key",
											"orig": "targeting_key",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"app_id",
										"flag_key",
										"targeting_key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.app",
						},
					},
				},
			},
			"flagship_flag_definition": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "default_variation",
						"title": "Default Variation",
						"type": "`$STRING`",
						"req": true,
						"short": "Variation the API serves when the flag is off, or when it's on but no rule matches the context.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "When false, the flag bypasses all rules and always serves `default_variation`.",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the flag within an app.",
					},
					map[string]any{
						"name": "rules",
						"title": "Rules",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "variations",
						"title": "Variations",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Map of variation name to value.",
					},
				},
				"name": "flagship_flag_definition",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/flagship/apps/{app_id}/definitions",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "flagship",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "definitions",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"flagship",
									"apps",
									"{app_id}",
									"definitions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.flags`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "if_none_match",
											"orig": "if_none_match",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"app_id",
										"if_none_match",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.app",
						},
					},
				},
			},
			"monolith_health": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "monolith_health",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v4/health",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v4",
									},
									map[string]any{
										"lit": "health",
									},
								},
								"parts": []any{
									"api",
									"v4",
									"health",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zone_snippet": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
							"load": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "Lists error messages.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contain warning messages.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "Define a snippet.",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Additional information to navigate the results.",
					},
					map[string]any{
						"name": "rules",
						"title": "Rules",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Lists snippet rules.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"load": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Indicate whether the API call was successful.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "zone_snippet",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/snippets",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "snippets",
									},
								},
								"parts": []any{
									"zones",
									"{id}",
									"snippets",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"zone_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/snippets/snippet_rules",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "snippets",
									},
									map[string]any{
										"lit": "snippet_rules",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"snippets",
									"snippet_rules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/snippets/{snippet_name}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "snippets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"snippets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"snippet_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "snippet_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my_snippet",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/snippets/{snippet_name}/content",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "snippets",
									},
									map[string]any{
										"var": "snippet_name",
									},
									map[string]any{
										"lit": "content",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"snippets",
									"{snippet_name}",
									"content",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "snippet_name",
											"orig": "snippet_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my_snippet",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"snippet_name",
										"zone_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/snippets/{snippet_name}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "snippets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"snippets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"snippet_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "snippet_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my_snippet",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/snippets/snippet_rules",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "snippets",
									},
									map[string]any{
										"lit": "snippet_rules",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"snippets",
									"snippet_rules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/snippets/{snippet_name}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "snippets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"snippets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"snippet_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "snippet_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my_snippet",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/snippets/snippet_rules",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "snippets",
									},
									map[string]any{
										"lit": "snippet_rules",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"snippets",
									"snippet_rules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

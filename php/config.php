<?php
declare(strict_types=1);

// CloudflareDeveloperPlatform SDK configuration

class CloudflareDeveloperPlatformConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "CloudflareDeveloperPlatform",
                "slug" => "cloudflare-developer-platform",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api.cloudflare.com/client/v4",
                "auth" => [
                    "prefix" => "",
                    "name" => "X-Auth-Email",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "app" => [],
                    "artifact" => [],
                    "bill_subs_api_bulk_account_subscription" => [],
                    "brand_protection" => [],
                    "changelog" => [],
                    "flag" => [],
                    "flagship_evaluation_result" => [],
                    "flagship_flag_definition" => [],
                    "monolith_health" => [],
                    "zone_snippet" => [],
                ],
            ],
            "entity" => [
        'app' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'app',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/flagship/apps',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => [
                      'name' => '`reqdata.name`',
                    ],
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/flagship/apps',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/flagship/apps/{app_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'app_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'app_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/flagship/apps/{app_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'app_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'app_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/flagship/apps/{app_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'app_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'name' => '`reqdata.name`',
                    ],
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'app_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'artifact' => [
          'fields' => [
            [
              'name' => 'default_branch',
              'title' => 'Default Branch',
              'type' => '`$STRING`',
              'short' => 'Git branch name.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'read_only',
              'title' => 'Read Only',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'repo',
              'title' => 'Repo',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'result_info',
              'title' => 'Result Info',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'scope',
              'title' => 'Scope',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'ttl',
              'title' => 'Ttl',
              'type' => '`$INTEGER`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'artifact',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/fork',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'repos',
                    ],
                    [
                      'var' => 'name',
                    ],
                    [
                      'lit' => 'fork',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'repos',
                    '{name}',
                    'fork',
                  ],
                  'rename' => [
                    'param' => [
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'fork',
                    'exist' => [
                      'account_id',
                      'name',
                      'namespace_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/import',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'repos',
                    ],
                    [
                      'var' => 'name',
                    ],
                    [
                      'lit' => 'import',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'repos',
                    '{name}',
                    'import',
                  ],
                  'rename' => [
                    'param' => [
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'import',
                    'exist' => [
                      'account_id',
                      'name',
                      'namespace_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'repos',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'repos',
                  ],
                  'rename' => [
                    'param' => [
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'namespace_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/tokens',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'tokens',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'tokens',
                  ],
                  'rename' => [
                    'param' => [
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'namespace_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'namespace',
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'repos',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'repos',
                  ],
                  'rename' => [
                    'param' => [
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'cursor',
                        'orig' => 'cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'direction',
                        'orig' => 'direction',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'desc',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 50,
                      ],
                      [
                        'name' => 'search',
                        'orig' => 'search',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'created_at',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'cursor',
                      'direction',
                      'limit',
                      'namespace_id',
                      'search',
                      'sort',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/log',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'repos',
                    ],
                    [
                      'var' => 'name',
                    ],
                    [
                      'lit' => 'log',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'repos',
                    '{name}',
                    'log',
                  ],
                  'rename' => [
                    'param' => [
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'ref',
                        'orig' => 'ref',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'limit',
                      'name',
                      'namespace_id',
                      'offset',
                      'ref',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/tokens',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'repos',
                    ],
                    [
                      'var' => 'name',
                    ],
                    [
                      'lit' => 'tokens',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'repos',
                    '{name}',
                    'tokens',
                  ],
                  'rename' => [
                    'param' => [
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                      [
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 30,
                      ],
                      [
                        'name' => 'state',
                        'orig' => 'state',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'active',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'name',
                      'namespace_id',
                      'page',
                      'per_page',
                      'state',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'cursor',
                        'orig' => 'cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 100,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'namespace',
                    'exist' => [
                      'account_id',
                      'cursor',
                      'limit',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/raw/{ref}/{path}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace',
                    ],
                    [
                      'lit' => 'repos',
                    ],
                    [
                      'var' => 'name',
                    ],
                    [
                      'lit' => 'raw',
                    ],
                    [
                      'var' => 'ref',
                    ],
                    [
                      'var' => 'path',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace}',
                    'repos',
                    '{name}',
                    'raw',
                    '{ref}',
                    '{path}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'path',
                        'orig' => 'path',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'ref',
                        'orig' => 'ref',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'name',
                      'namespace',
                      'path',
                      'ref',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/file',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'repos',
                    ],
                    [
                      'var' => 'name',
                    ],
                    [
                      'lit' => 'file',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'repos',
                    '{name}',
                    'file',
                  ],
                  'rename' => [
                    'param' => [
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'path',
                        'orig' => 'path',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'ref',
                        'orig' => 'ref',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'name',
                      'namespace_id',
                      'path',
                      'ref',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/blob/{hash}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'repos',
                    ],
                    [
                      'var' => 'repo_id',
                    ],
                    [
                      'lit' => 'blob',
                    ],
                    [
                      'var' => 'hash',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'repos',
                    '{repo_id}',
                    'blob',
                    '{hash}',
                  ],
                  'rename' => [
                    'param' => [
                      'name' => 'repo_id',
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'hash',
                        'orig' => 'hash',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'repo_id',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'hash',
                      'namespace_id',
                      'repo_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/commit/{hash}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'repos',
                    ],
                    [
                      'var' => 'repo_id',
                    ],
                    [
                      'lit' => 'commit',
                    ],
                    [
                      'var' => 'hash',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'repos',
                    '{repo_id}',
                    'commit',
                    '{hash}',
                  ],
                  'rename' => [
                    'param' => [
                      'name' => 'repo_id',
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'hash',
                        'orig' => 'hash',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'repo_id',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'hash',
                      'namespace_id',
                      'repo_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}/tree/{hash}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'repos',
                    ],
                    [
                      'var' => 'repo_id',
                    ],
                    [
                      'lit' => 'tree',
                    ],
                    [
                      'var' => 'hash',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'repos',
                    '{repo_id}',
                    'tree',
                    '{hash}',
                  ],
                  'rename' => [
                    'param' => [
                      'name' => 'repo_id',
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'hash',
                        'orig' => 'hash',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'repo_id',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'hash',
                      'namespace_id',
                      'repo_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'repos',
                    ],
                    [
                      'var' => 'name',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'repos',
                    '{name}',
                  ],
                  'rename' => [
                    'param' => [
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'name',
                      'namespace_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'namespace',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/tokens/{id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'tokens',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'tokens',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                      'namespace_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}/repos/{name}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace_id',
                    ],
                    [
                      'lit' => 'repos',
                    ],
                    [
                      'var' => 'name',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace_id}',
                    'repos',
                    '{name}',
                  ],
                  'rename' => [
                    'param' => [
                      'namespace' => 'namespace_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace_id',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'name',
                      'namespace_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/artifacts/namespaces/{namespace}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'artifacts',
                    ],
                    [
                      'lit' => 'namespaces',
                    ],
                    [
                      'var' => 'namespace',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'artifacts',
                    'namespaces',
                    '{namespace}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'namespace',
                        'orig' => 'namespace',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'namespace',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'bill_subs_api_bulk_account_subscription' => [
          'fields' => [
            [
              'name' => 'coupon_code',
              'title' => 'Coupon Code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'payment_hold_id',
              'title' => 'Payment Hold Id',
              'type' => '`$INTEGER`',
              'format' => 'int64',
            ],
            [
              'name' => 'subscriptions',
              'title' => 'Subscriptions',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'user_is_on_session',
              'title' => 'User Is On Session',
              'type' => '`$BOOLEAN`',
            ],
          ],
          'name' => 'bill_subs_api_bulk_account_subscription',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/bulk/subscriptions',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'bulk',
                    ],
                    [
                      'lit' => 'subscriptions',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'bulk',
                    'subscriptions',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'idemp_key',
                        'orig' => 'idemp_key',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'idemp_key',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'brand_protection' => [
          'fields' => [],
          'name' => 'brand_protection',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/internal/submit',
                  'segments' => [
                    [
                      'lit' => 'internal',
                    ],
                    [
                      'lit' => 'submit',
                    ],
                  ],
                  'parts' => [
                    'internal',
                    'submit',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/ready',
                  'segments' => [
                    [
                      'lit' => 'ready',
                    ],
                  ],
                  'parts' => [
                    'ready',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'changelog' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result_info',
              'title' => 'Result Info',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
          ],
          'name' => 'changelog',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}/changelog',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                    [
                      'var' => 'app_id',
                    ],
                    [
                      'lit' => 'flags',
                    ],
                    [
                      'var' => 'flag_key',
                    ],
                    [
                      'lit' => 'changelog',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                    '{app_id}',
                    'flags',
                    '{flag_key}',
                    'changelog',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'app_id',
                        'orig' => 'app_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'flag_key',
                        'orig' => 'flag_key',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'cursor',
                        'orig' => 'cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'app_id',
                      'cursor',
                      'flag_key',
                      'limit',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.app',
                '$.main.kit.entity.flag',
              ],
            ],
          ],
        ],
        'flag' => [
          'fields' => [
            [
              'name' => 'default_variation',
              'title' => 'Default Variation',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Variation the API serves when the flag is off, or when it\'s on but no rule matches the context.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'enabled',
              'title' => 'Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'When false, the flag bypasses all rules and always serves `default_variation`.',
            ],
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'key',
              'title' => 'Key',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Unique identifier for the flag within an app.',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'result_info',
              'title' => 'Result Info',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'rules',
              'title' => 'Rules',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Targeting rules evaluated in ascending `priority`; the first matching rule wins.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'short' => 'Deprecated compatibility field.',
              'deprecated' => true,
            ],
            [
              'name' => 'variations',
              'title' => 'Variations',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Map of variation name to value.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'flag',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/flagship/apps/{app_id}/flags',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                    [
                      'var' => 'app_id',
                    ],
                    [
                      'lit' => 'flags',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                    '{app_id}',
                    'flags',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => [
                      'default_variation' => '`reqdata.default_variation`',
                      'description' => '`reqdata.description`',
                      'enabled' => '`reqdata.enabled`',
                      'key' => '`reqdata.key`',
                      'rules' => '`reqdata.rule`',
                      'type' => '`reqdata.type`',
                      'variations' => '`reqdata.variation`',
                    ],
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'app_id',
                        'orig' => 'app_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'app_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/flagship/apps/{app_id}/flags',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                    [
                      'var' => 'app_id',
                    ],
                    [
                      'lit' => 'flags',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                    '{app_id}',
                    'flags',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'app_id',
                        'orig' => 'app_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'cursor',
                        'orig' => 'cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'app_id',
                      'cursor',
                      'limit',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                    [
                      'var' => 'app_id',
                    ],
                    [
                      'lit' => 'flags',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                    '{app_id}',
                    'flags',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'flag_key' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'app_id',
                        'orig' => 'app_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'flag_key',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'app_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                    [
                      'var' => 'app_id',
                    ],
                    [
                      'lit' => 'flags',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                    '{app_id}',
                    'flags',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'flag_key' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'app_id',
                        'orig' => 'app_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'flag_key',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'app_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                    [
                      'var' => 'app_id',
                    ],
                    [
                      'lit' => 'flags',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                    '{app_id}',
                    'flags',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'flag_key' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'default_variation' => '`reqdata.default_variation`',
                      'description' => '`reqdata.description`',
                      'enabled' => '`reqdata.enabled`',
                      'key' => '`reqdata.key`',
                      'rules' => '`reqdata.rule`',
                      'type' => '`reqdata.type`',
                      'variations' => '`reqdata.variation`',
                    ],
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'app_id',
                        'orig' => 'app_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'flag_key',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'app_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.app',
              ],
            ],
          ],
        ],
        'flagship_evaluation_result' => [
          'fields' => [
            [
              'name' => 'context',
              'title' => 'Context',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'flagKey',
              'title' => 'Flag Key',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'reason',
              'title' => 'Reason',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'variant',
              'title' => 'Variant',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'name' => 'flagship_evaluation_result',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/flagship/apps/{app_id}/evaluate',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                    [
                      'var' => 'app_id',
                    ],
                    [
                      'lit' => 'evaluate',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                    '{app_id}',
                    'evaluate',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => [
                      'context' => '`reqdata.context`',
                      'flagKey' => '`reqdata.flag_key`',
                    ],
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'app_id',
                        'orig' => 'app_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'app_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/flagship/apps/{app_id}/evaluate',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                    [
                      'var' => 'app_id',
                    ],
                    [
                      'lit' => 'evaluate',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                    '{app_id}',
                    'evaluate',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'app_id',
                        'orig' => 'app_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'flag_key',
                        'orig' => 'flag_key',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'targeting_key',
                        'orig' => 'targeting_key',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'app_id',
                      'flag_key',
                      'targeting_key',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.app',
              ],
            ],
          ],
        ],
        'flagship_flag_definition' => [
          'fields' => [
            [
              'name' => 'default_variation',
              'title' => 'Default Variation',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Variation the API serves when the flag is off, or when it\'s on but no rule matches the context.',
            ],
            [
              'name' => 'enabled',
              'title' => 'Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'When false, the flag bypasses all rules and always serves `default_variation`.',
            ],
            [
              'name' => 'key',
              'title' => 'Key',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Unique identifier for the flag within an app.',
            ],
            [
              'name' => 'rules',
              'title' => 'Rules',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'variations',
              'title' => 'Variations',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Map of variation name to value.',
            ],
          ],
          'name' => 'flagship_flag_definition',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/flagship/apps/{app_id}/definitions',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'flagship',
                    ],
                    [
                      'lit' => 'apps',
                    ],
                    [
                      'var' => 'app_id',
                    ],
                    [
                      'lit' => 'definitions',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'flagship',
                    'apps',
                    '{app_id}',
                    'definitions',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.flags`',
                  ],
                  'args' => [
                    'header' => [
                      [
                        'name' => 'if_none_match',
                        'orig' => 'if_none_match',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                      ],
                    ],
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'app_id',
                        'orig' => 'app_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'app_id',
                      'if_none_match',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.app',
              ],
            ],
          ],
        ],
        'monolith_health' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
          ],
          'name' => 'monolith_health',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v4/health',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'v4',
                    ],
                    [
                      'lit' => 'health',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'v4',
                    'health',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'zone_snippet' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
                'load' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'Lists error messages.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Contain warning messages.',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'Define a snippet.',
            ],
            [
              'name' => 'result_info',
              'title' => 'Result Info',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Additional information to navigate the results.',
            ],
            [
              'name' => 'rules',
              'title' => 'Rules',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Lists snippet rules.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$BOOLEAN`',
                ],
                'load' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'Indicate whether the API call was successful.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'zone_snippet',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/snippets',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'snippets',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{id}',
                    'snippets',
                  ],
                  'rename' => [
                    'param' => [
                      'zone_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '9f1839b6152d298aca64c4e906b6d074',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                      [
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 25,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'page',
                      'per_page',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/snippets/snippet_rules',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'snippets',
                    ],
                    [
                      'lit' => 'snippet_rules',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'snippets',
                    'snippet_rules',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '9f1839b6152d298aca64c4e906b6d074',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/snippets/{snippet_name}',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'snippets',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'snippets',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'snippet_name' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'snippet_name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'my_snippet',
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '9f1839b6152d298aca64c4e906b6d074',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/snippets/{snippet_name}/content',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'snippets',
                    ],
                    [
                      'var' => 'snippet_name',
                    ],
                    [
                      'lit' => 'content',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'snippets',
                    '{snippet_name}',
                    'content',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'snippet_name',
                        'orig' => 'snippet_name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'my_snippet',
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '9f1839b6152d298aca64c4e906b6d074',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'snippet_name',
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/zones/{zone_id}/snippets/{snippet_name}',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'snippets',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'snippets',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'snippet_name' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'snippet_name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'my_snippet',
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '9f1839b6152d298aca64c4e906b6d074',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/zones/{zone_id}/snippets/snippet_rules',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'snippets',
                    ],
                    [
                      'lit' => 'snippet_rules',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'snippets',
                    'snippet_rules',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '9f1839b6152d298aca64c4e906b6d074',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/zones/{zone_id}/snippets/{snippet_name}',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'snippets',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'snippets',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'snippet_name' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'snippet_name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'my_snippet',
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '9f1839b6152d298aca64c4e906b6d074',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/zones/{zone_id}/snippets/snippet_rules',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'snippets',
                    ],
                    [
                      'lit' => 'snippet_rules',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'snippets',
                    'snippet_rules',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '9f1839b6152d298aca64c4e906b6d074',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CloudflareDeveloperPlatformFeatures::make_feature($name);
    }
}

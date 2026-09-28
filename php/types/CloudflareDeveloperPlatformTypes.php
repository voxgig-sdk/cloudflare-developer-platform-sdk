<?php
declare(strict_types=1);

// Typed models for the CloudflareDeveloperPlatform SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** App entity data model. */
class App
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public array $result;
    public bool $success;
}

/** Request payload for App#load. */
class AppLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for App#list. */
class AppListMatch
{
    public string $account_id;
}

/** Request payload for App#create. */
class AppCreateData
{
    public string $account_id;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public array $result;
    public bool $success;
}

/** Request payload for App#update. */
class AppUpdateData
{
    public string $account_id;
    public string $id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** Request payload for App#remove. */
class AppRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Artifact entity data model. */
class Artifact
{
    public ?string $default_branch = null;
    public ?string $description = null;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public ?bool $read_only = null;
    public string $repo;
    public array $result;
    public mixed $result_info = null;
    public ?string $scope = null;
    public bool $success;
    public ?int $ttl = null;
}

/** Request payload for Artifact#load. */
class ArtifactLoadMatch
{
    public string $account_id;
    public ?string $name = null;
    public ?string $namespace = null;
    public ?string $path = null;
    public ?string $ref = null;
    public ?string $namespace_id = null;
    public ?string $hash = null;
    public ?string $repo_id = null;
}

/** Request payload for Artifact#list. */
class ArtifactListMatch
{
    public string $account_id;
    public string $namespace_id;
    public ?string $cursor = null;
    public ?string $direction = null;
    public ?int $limit = null;
    public ?string $search = null;
    public ?string $sort = null;
    public ?string $name = null;
    public ?int $offset = null;
    public ?string $ref = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $state = null;
}

/** Request payload for Artifact#create. */
class ArtifactCreateData
{
    public string $account_id;
    public string $namespace_id;
    public ?string $default_branch = null;
    public ?string $description = null;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public ?bool $read_only = null;
    public string $repo;
    public array $result;
    public mixed $result_info = null;
    public ?string $scope = null;
    public bool $success;
    public ?int $ttl = null;
}

/** Request payload for Artifact#remove. */
class ArtifactRemoveMatch
{
    public string $account_id;
    public ?string $id = null;
    public ?string $namespace_id = null;
    public ?string $name = null;
    public ?string $namespace = null;
}

/** BillSubsApiBulkAccountSubscription entity data model. */
class BillSubsApiBulkAccountSubscription
{
    public ?string $coupon_code = null;
    public ?int $payment_hold_id = null;
    public ?array $subscriptions = null;
    public ?bool $user_is_on_session = null;
}

/** Request payload for BillSubsApiBulkAccountSubscription#create. */
class BillSubsApiBulkAccountSubscriptionCreateData
{
    public string $account_id;
    public ?string $idemp_key = null;
    public ?string $coupon_code = null;
    public ?int $payment_hold_id = null;
    public ?array $subscriptions = null;
    public ?bool $user_is_on_session = null;
}

/** BrandProtection entity data model. */
class BrandProtection
{
}

/** Request payload for BrandProtection#load. */
class BrandProtectionLoadMatch
{
}

/** Request payload for BrandProtection#create. */
class BrandProtectionCreateData
{
}

/** Changelog entity data model. */
class Changelog
{
    public array $errors;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for Changelog#list. */
class ChangelogListMatch
{
    public string $account_id;
    public string $app_id;
    public string $flag_key;
    public ?string $cursor = null;
    public ?string $limit = null;
}

/** Flag entity data model. */
class Flag
{
    public string $default_variation;
    public ?string $description = null;
    public bool $enabled;
    public array $errors;
    public ?string $id = null;
    public string $key;
    public array $messages;
    public array $result;
    public array $result_info;
    public array $rules;
    public bool $success;
    public ?string $type = null;
    public array $variations;
}

/** Request payload for Flag#load. */
class FlagLoadMatch
{
    public string $account_id;
    public string $app_id;
    public string $id;
}

/** Request payload for Flag#list. */
class FlagListMatch
{
    public string $account_id;
    public string $app_id;
    public ?string $cursor = null;
    public ?string $limit = null;
}

/** Request payload for Flag#create. */
class FlagCreateData
{
    public string $account_id;
    public string $app_id;
    public string $default_variation;
    public ?string $description = null;
    public bool $enabled;
    public array $errors;
    public ?string $id = null;
    public string $key;
    public array $messages;
    public array $result;
    public array $result_info;
    public array $rules;
    public bool $success;
    public ?string $type = null;
    public array $variations;
}

/** Request payload for Flag#update. */
class FlagUpdateData
{
    public string $account_id;
    public string $app_id;
    public string $id;
    public ?string $default_variation = null;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?array $errors = null;
    public ?string $key = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?array $rules = null;
    public ?bool $success = null;
    public ?string $type = null;
    public ?array $variations = null;
}

/** Request payload for Flag#remove. */
class FlagRemoveMatch
{
    public string $account_id;
    public string $app_id;
    public string $id;
}

/** FlagshipEvaluationResult entity data model. */
class FlagshipEvaluationResult
{
    public ?array $context = null;
    public string $flagKey;
    public string $reason;
    public mixed $value = null;
    public string $variant;
}

/** Request payload for FlagshipEvaluationResult#load. */
class FlagshipEvaluationResultLoadMatch
{
    public string $account_id;
    public string $app_id;
    public string $flag_key;
    public ?string $targeting_key = null;
}

/** Request payload for FlagshipEvaluationResult#create. */
class FlagshipEvaluationResultCreateData
{
    public string $account_id;
    public string $app_id;
    public ?array $context = null;
    public string $flagKey;
    public string $reason;
    public mixed $value = null;
    public string $variant;
}

/** FlagshipFlagDefinition entity data model. */
class FlagshipFlagDefinition
{
    public string $default_variation;
    public bool $enabled;
    public string $key;
    public array $rules;
    public array $variations;
}

/** Request payload for FlagshipFlagDefinition#load. */
class FlagshipFlagDefinitionLoadMatch
{
    public string $account_id;
    public string $app_id;
}

/** MonolithHealth entity data model. */
class MonolithHealth
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for MonolithHealth#list. */
class MonolithHealthListMatch
{
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** ZoneSnippet entity data model. */
class ZoneSnippet
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public array $result_info;
    public array $rules;
    public bool $success;
}

/** Request payload for ZoneSnippet#load. */
class ZoneSnippetLoadMatch
{
    public ?string $id = null;
    public string $zone_id;
    public ?string $snippet_name = null;
}

/** Request payload for ZoneSnippet#list. */
class ZoneSnippetListMatch
{
    public string $id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for ZoneSnippet#update. */
class ZoneSnippetUpdateData
{
    public ?string $id = null;
    public string $zone_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?array $rules = null;
    public ?bool $success = null;
}

/** Request payload for ZoneSnippet#remove. */
class ZoneSnippetRemoveMatch
{
    public ?string $id = null;
    public string $zone_id;
}


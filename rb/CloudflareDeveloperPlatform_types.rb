# frozen_string_literal: true

# Typed models for the CloudflareDeveloperPlatform SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# App entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
App = Struct.new(
  :errors,
  :id,
  :messages,
  :name,
  :result,
  :success,
  keyword_init: true
)

# Request payload for App#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AppLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for App#list.
#
# @!attribute [rw] account_id
#   @return [String]
AppListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for App#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AppCreateData = Struct.new(
  :account_id,
  :errors,
  :id,
  :messages,
  :name,
  :result,
  :success,
  keyword_init: true
)

# Request payload for App#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
AppUpdateData = Struct.new(
  :account_id,
  :id,
  :errors,
  :messages,
  :name,
  :result,
  :success,
  keyword_init: true
)

# Request payload for App#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AppRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Artifact entity data model.
#
# @!attribute [rw] default_branch
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] read_only
#   @return [Boolean, nil]
#
# @!attribute [rw] repo
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Object, nil]
#
# @!attribute [rw] scope
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] ttl
#   @return [Integer, nil]
Artifact = Struct.new(
  :default_branch,
  :description,
  :errors,
  :id,
  :messages,
  :name,
  :read_only,
  :repo,
  :result,
  :result_info,
  :scope,
  :success,
  :ttl,
  keyword_init: true
)

# Request payload for Artifact#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] hash
#   @return [String, nil]
#
# @!attribute [rw] repo_id
#   @return [String, nil]
ArtifactLoadMatch = Struct.new(
  :account_id,
  :name,
  :namespace,
  :path,
  :ref,
  :namespace_id,
  :hash,
  :repo_id,
  keyword_init: true
)

# Request payload for Artifact#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] ref
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
ArtifactListMatch = Struct.new(
  :account_id,
  :namespace_id,
  :cursor,
  :direction,
  :limit,
  :search,
  :sort,
  :name,
  :offset,
  :ref,
  :page,
  :per_page,
  :state,
  keyword_init: true
)

# Request payload for Artifact#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] default_branch
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] read_only
#   @return [Boolean, nil]
#
# @!attribute [rw] repo
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Object, nil]
#
# @!attribute [rw] scope
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] ttl
#   @return [Integer, nil]
ArtifactCreateData = Struct.new(
  :account_id,
  :namespace_id,
  :default_branch,
  :description,
  :errors,
  :id,
  :messages,
  :name,
  :read_only,
  :repo,
  :result,
  :result_info,
  :scope,
  :success,
  :ttl,
  keyword_init: true
)

# Request payload for Artifact#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [String, nil]
ArtifactRemoveMatch = Struct.new(
  :account_id,
  :id,
  :namespace_id,
  :name,
  :namespace,
  keyword_init: true
)

# BillSubsApiBulkAccountSubscription entity data model.
#
# @!attribute [rw] coupon_code
#   @return [String, nil]
#
# @!attribute [rw] payment_hold_id
#   @return [Integer, nil]
#
# @!attribute [rw] subscriptions
#   @return [Array, nil]
#
# @!attribute [rw] user_is_on_session
#   @return [Boolean, nil]
BillSubsApiBulkAccountSubscription = Struct.new(
  :coupon_code,
  :payment_hold_id,
  :subscriptions,
  :user_is_on_session,
  keyword_init: true
)

# Request payload for BillSubsApiBulkAccountSubscription#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] idemp_key
#   @return [String, nil]
#
# @!attribute [rw] coupon_code
#   @return [String, nil]
#
# @!attribute [rw] payment_hold_id
#   @return [Integer, nil]
#
# @!attribute [rw] subscriptions
#   @return [Array, nil]
#
# @!attribute [rw] user_is_on_session
#   @return [Boolean, nil]
BillSubsApiBulkAccountSubscriptionCreateData = Struct.new(
  :account_id,
  :idemp_key,
  :coupon_code,
  :payment_hold_id,
  :subscriptions,
  :user_is_on_session,
  keyword_init: true
)

# BrandProtection entity data model.
class BrandProtection
end

# Request payload for BrandProtection#load.
class BrandProtectionLoadMatch
end

# Request payload for BrandProtection#create.
class BrandProtectionCreateData
end

# Changelog entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
Changelog = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for Changelog#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] app_id
#   @return [String]
#
# @!attribute [rw] flag_key
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [String, nil]
ChangelogListMatch = Struct.new(
  :account_id,
  :app_id,
  :flag_key,
  :cursor,
  :limit,
  keyword_init: true
)

# Flag entity data model.
#
# @!attribute [rw] default_variation
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] rules
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] variations
#   @return [Hash]
Flag = Struct.new(
  :default_variation,
  :description,
  :enabled,
  :errors,
  :id,
  :key,
  :messages,
  :result,
  :result_info,
  :rules,
  :success,
  :type,
  :variations,
  keyword_init: true
)

# Request payload for Flag#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] app_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
FlagLoadMatch = Struct.new(
  :account_id,
  :app_id,
  :id,
  keyword_init: true
)

# Request payload for Flag#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] app_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [String, nil]
FlagListMatch = Struct.new(
  :account_id,
  :app_id,
  :cursor,
  :limit,
  keyword_init: true
)

# Request payload for Flag#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] app_id
#   @return [String]
#
# @!attribute [rw] default_variation
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] rules
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] variations
#   @return [Hash]
FlagCreateData = Struct.new(
  :account_id,
  :app_id,
  :default_variation,
  :description,
  :enabled,
  :errors,
  :id,
  :key,
  :messages,
  :result,
  :result_info,
  :rules,
  :success,
  :type,
  :variations,
  keyword_init: true
)

# Request payload for Flag#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] app_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] default_variation
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] rules
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] variations
#   @return [Hash, nil]
FlagUpdateData = Struct.new(
  :account_id,
  :app_id,
  :id,
  :default_variation,
  :description,
  :enabled,
  :errors,
  :key,
  :messages,
  :result,
  :result_info,
  :rules,
  :success,
  :type,
  :variations,
  keyword_init: true
)

# Request payload for Flag#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] app_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
FlagRemoveMatch = Struct.new(
  :account_id,
  :app_id,
  :id,
  keyword_init: true
)

# FlagshipEvaluationResult entity data model.
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] flagKey
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] value
#   @return [Object, nil]
#
# @!attribute [rw] variant
#   @return [String]
FlagshipEvaluationResult = Struct.new(
  :context,
  :flagKey,
  :reason,
  :value,
  :variant,
  keyword_init: true
)

# Request payload for FlagshipEvaluationResult#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] app_id
#   @return [String]
#
# @!attribute [rw] flag_key
#   @return [String]
#
# @!attribute [rw] targeting_key
#   @return [String, nil]
FlagshipEvaluationResultLoadMatch = Struct.new(
  :account_id,
  :app_id,
  :flag_key,
  :targeting_key,
  keyword_init: true
)

# Request payload for FlagshipEvaluationResult#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] app_id
#   @return [String]
#
# @!attribute [rw] context
#   @return [Hash, nil]
#
# @!attribute [rw] flagKey
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] value
#   @return [Object, nil]
#
# @!attribute [rw] variant
#   @return [String]
FlagshipEvaluationResultCreateData = Struct.new(
  :account_id,
  :app_id,
  :context,
  :flagKey,
  :reason,
  :value,
  :variant,
  keyword_init: true
)

# FlagshipFlagDefinition entity data model.
#
# @!attribute [rw] default_variation
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] rules
#   @return [Array]
#
# @!attribute [rw] variations
#   @return [Hash]
FlagshipFlagDefinition = Struct.new(
  :default_variation,
  :enabled,
  :key,
  :rules,
  :variations,
  keyword_init: true
)

# Request payload for FlagshipFlagDefinition#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] app_id
#   @return [String]
FlagshipFlagDefinitionLoadMatch = Struct.new(
  :account_id,
  :app_id,
  keyword_init: true
)

# MonolithHealth entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
MonolithHealth = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for MonolithHealth#list.
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
MonolithHealthListMatch = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# ZoneSnippet entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] rules
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
ZoneSnippet = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :result_info,
  :rules,
  :success,
  keyword_init: true
)

# Request payload for ZoneSnippet#load.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] snippet_name
#   @return [String, nil]
ZoneSnippetLoadMatch = Struct.new(
  :id,
  :zone_id,
  :snippet_name,
  keyword_init: true
)

# Request payload for ZoneSnippet#list.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
ZoneSnippetListMatch = Struct.new(
  :id,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for ZoneSnippet#update.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] rules
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
ZoneSnippetUpdateData = Struct.new(
  :id,
  :zone_id,
  :errors,
  :messages,
  :result,
  :result_info,
  :rules,
  :success,
  keyword_init: true
)

# Request payload for ZoneSnippet#remove.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] zone_id
#   @return [String]
ZoneSnippetRemoveMatch = Struct.new(
  :id,
  :zone_id,
  keyword_init: true
)


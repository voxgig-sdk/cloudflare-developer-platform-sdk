-- Typed models for the CloudflareDeveloperPlatform SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class App
---@field errors table
---@field id? string
---@field messages table
---@field name string
---@field result table
---@field success boolean

---@class AppLoadMatch
---@field account_id string
---@field id string

---@class AppListMatch
---@field account_id string

---@class AppCreateData
---@field account_id string
---@field errors table
---@field id? string
---@field messages table
---@field name string
---@field result table
---@field success boolean

---@class AppUpdateData
---@field account_id string
---@field id string
---@field errors? table
---@field messages? table
---@field name? string
---@field result? table
---@field success? boolean

---@class AppRemoveMatch
---@field account_id string
---@field id string

---@class Artifact
---@field default_branch? string
---@field description? string
---@field errors table
---@field id? string
---@field messages table
---@field name string
---@field read_only? boolean
---@field repo string
---@field result table
---@field result_info? any
---@field scope? string
---@field success boolean
---@field ttl? number

---@class ArtifactLoadMatch
---@field account_id string
---@field name? string
---@field namespace? string
---@field path? string
---@field ref? string
---@field namespace_id? string
---@field hash? string
---@field repo_id? string

---@class ArtifactListMatch
---@field account_id string
---@field namespace_id string
---@field cursor? string
---@field direction? string
---@field limit? number
---@field search? string
---@field sort? string
---@field name? string
---@field offset? number
---@field ref? string
---@field page? number
---@field per_page? number
---@field state? string

---@class ArtifactCreateData
---@field account_id string
---@field namespace_id string
---@field default_branch? string
---@field description? string
---@field errors table
---@field id? string
---@field messages table
---@field name string
---@field read_only? boolean
---@field repo string
---@field result table
---@field result_info? any
---@field scope? string
---@field success boolean
---@field ttl? number

---@class ArtifactRemoveMatch
---@field account_id string
---@field id? string
---@field namespace_id? string
---@field name? string
---@field namespace? string

---@class BillSubsApiBulkAccountSubscription
---@field coupon_code? string
---@field payment_hold_id? number
---@field subscriptions? table
---@field user_is_on_session? boolean

---@class BillSubsApiBulkAccountSubscriptionCreateData
---@field account_id string
---@field idemp_key? string
---@field coupon_code? string
---@field payment_hold_id? number
---@field subscriptions? table
---@field user_is_on_session? boolean

---@class BrandProtection

---@class BrandProtectionLoadMatch

---@class BrandProtectionCreateData

---@class Changelog
---@field errors table
---@field messages table
---@field result table
---@field result_info table
---@field success boolean

---@class ChangelogListMatch
---@field account_id string
---@field app_id string
---@field flag_key string
---@field cursor? string
---@field limit? string

---@class Flag
---@field default_variation string
---@field description? string
---@field enabled boolean
---@field errors table
---@field id? string
---@field key string
---@field messages table
---@field result table
---@field result_info table
---@field rules table
---@field success boolean
---@field type? string
---@field variations table

---@class FlagLoadMatch
---@field account_id string
---@field app_id string
---@field id string

---@class FlagListMatch
---@field account_id string
---@field app_id string
---@field cursor? string
---@field limit? string

---@class FlagCreateData
---@field account_id string
---@field app_id string
---@field default_variation string
---@field description? string
---@field enabled boolean
---@field errors table
---@field id? string
---@field key string
---@field messages table
---@field result table
---@field result_info table
---@field rules table
---@field success boolean
---@field type? string
---@field variations table

---@class FlagUpdateData
---@field account_id string
---@field app_id string
---@field id string
---@field default_variation? string
---@field description? string
---@field enabled? boolean
---@field errors? table
---@field key? string
---@field messages? table
---@field result? table
---@field result_info? table
---@field rules? table
---@field success? boolean
---@field type? string
---@field variations? table

---@class FlagRemoveMatch
---@field account_id string
---@field app_id string
---@field id string

---@class FlagshipEvaluationResult
---@field context? table
---@field flagKey string
---@field reason string
---@field value? any
---@field variant string

---@class FlagshipEvaluationResultLoadMatch
---@field account_id string
---@field app_id string
---@field flag_key string
---@field targeting_key? string

---@class FlagshipEvaluationResultCreateData
---@field account_id string
---@field app_id string
---@field context? table
---@field flagKey string
---@field reason string
---@field value? any
---@field variant string

---@class FlagshipFlagDefinition
---@field default_variation string
---@field enabled boolean
---@field key string
---@field rules table
---@field variations table

---@class FlagshipFlagDefinitionLoadMatch
---@field account_id string
---@field app_id string

---@class MonolithHealth
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class MonolithHealthListMatch
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean

---@class ZoneSnippet
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field result_info table
---@field rules table
---@field success boolean

---@class ZoneSnippetLoadMatch
---@field id? string
---@field zone_id string
---@field snippet_name? string

---@class ZoneSnippetListMatch
---@field id string
---@field page? number
---@field per_page? number

---@class ZoneSnippetUpdateData
---@field id? string
---@field zone_id string
---@field errors? table
---@field messages? table
---@field result? table
---@field result_info? table
---@field rules? table
---@field success? boolean

---@class ZoneSnippetRemoveMatch
---@field id? string
---@field zone_id string

local M = {}

return M

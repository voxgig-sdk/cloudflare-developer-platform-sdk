// Typed models for the CloudflareDeveloperPlatform SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudflare-developer-platform-sdk/go/core"
)

// App is the typed data model for the app entity.
type App struct {
}

// AppLoadMatch is the typed request payload for App.LoadTyped.
type AppLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// AppListMatch is the typed request payload for App.ListTyped.
type AppListMatch struct {
	AccountId string `json:"account_id"`
}

// AppCreateData is the typed request payload for App.CreateTyped.
type AppCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Name string `json:"name"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
}

// AppUpdateData is the typed request payload for App.UpdateTyped.
type AppUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// AppRemoveMatch is the typed request payload for App.RemoveTyped.
type AppRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Artifact is the typed data model for the artifact entity.
type Artifact struct {
}

// ArtifactLoadMatch is the typed request payload for Artifact.LoadTyped.
type ArtifactLoadMatch struct {
	AccountId string `json:"account_id"`
	Name *string `json:"name,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
	Path *string `json:"path,omitempty"`
	Ref *string `json:"ref,omitempty"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	Hash *string `json:"hash,omitempty"`
	RepoId *string `json:"repo_id,omitempty"`
}

// ArtifactListMatch is the typed request payload for Artifact.ListTyped.
type ArtifactListMatch struct {
	AccountId string `json:"account_id"`
	NamespaceId string `json:"namespace_id"`
	Cursor *string `json:"cursor,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Search *string `json:"search,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Name *string `json:"name,omitempty"`
	Offset *int `json:"offset,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	State *string `json:"state,omitempty"`
}

// ArtifactCreateData is the typed request payload for Artifact.CreateTyped.
type ArtifactCreateData struct {
	AccountId string `json:"account_id"`
	NamespaceId string `json:"namespace_id"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	Description *string `json:"description,omitempty"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Name string `json:"name"`
	ReadOnly *bool `json:"read_only,omitempty"`
	Repo string `json:"repo"`
	Result map[string]any `json:"result"`
	ResultInfo *any `json:"result_info,omitempty"`
	Scope *string `json:"scope,omitempty"`
	Success bool `json:"success"`
	Ttl *int `json:"ttl,omitempty"`
}

// ArtifactRemoveMatch is the typed request payload for Artifact.RemoveTyped.
type ArtifactRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
}

// BillSubsApiBulkAccountSubscription is the typed data model for the bill_subs_api_bulk_account_subscription entity.
type BillSubsApiBulkAccountSubscription struct {
}

// BillSubsApiBulkAccountSubscriptionCreateData is the typed request payload for BillSubsApiBulkAccountSubscription.CreateTyped.
type BillSubsApiBulkAccountSubscriptionCreateData struct {
	AccountId string `json:"account_id"`
	IdempKey *string `json:"idemp_key,omitempty"`
	CouponCode *string `json:"coupon_code,omitempty"`
	PaymentHoldId *int `json:"payment_hold_id,omitempty"`
	Subscriptions *[]any `json:"subscriptions,omitempty"`
	UserIsOnSession *bool `json:"user_is_on_session,omitempty"`
}

// BrandProtection is the typed data model for the brand_protection entity.
type BrandProtection struct {
}

// BrandProtectionLoadMatch is the typed request payload for BrandProtection.LoadTyped.
type BrandProtectionLoadMatch struct {
}

// BrandProtectionCreateData is the typed request payload for BrandProtection.CreateTyped.
type BrandProtectionCreateData struct {
}

// Changelog is the typed data model for the changelog entity.
type Changelog struct {
}

// ChangelogListMatch is the typed request payload for Changelog.ListTyped.
type ChangelogListMatch struct {
	AccountId string `json:"account_id"`
	AppId string `json:"app_id"`
	FlagKey string `json:"flag_key"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *string `json:"limit,omitempty"`
}

// Flag is the typed data model for the flag entity.
type Flag struct {
}

// FlagLoadMatch is the typed request payload for Flag.LoadTyped.
type FlagLoadMatch struct {
	AccountId string `json:"account_id"`
	AppId string `json:"app_id"`
	Id string `json:"id"`
}

// FlagListMatch is the typed request payload for Flag.ListTyped.
type FlagListMatch struct {
	AccountId string `json:"account_id"`
	AppId string `json:"app_id"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *string `json:"limit,omitempty"`
}

// FlagCreateData is the typed request payload for Flag.CreateTyped.
type FlagCreateData struct {
	AccountId string `json:"account_id"`
	AppId string `json:"app_id"`
	DefaultVariation string `json:"default_variation"`
	Description *string `json:"description,omitempty"`
	Enabled bool `json:"enabled"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Key string `json:"key"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Rules []any `json:"rules"`
	Success bool `json:"success"`
	Type *string `json:"type,omitempty"`
	Variations map[string]any `json:"variations"`
}

// FlagUpdateData is the typed request payload for Flag.UpdateTyped.
type FlagUpdateData struct {
	AccountId string `json:"account_id"`
	AppId string `json:"app_id"`
	Id string `json:"id"`
	DefaultVariation *string `json:"default_variation,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Key *string `json:"key,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Rules *[]any `json:"rules,omitempty"`
	Success *bool `json:"success,omitempty"`
	Type *string `json:"type,omitempty"`
	Variations *map[string]any `json:"variations,omitempty"`
}

// FlagRemoveMatch is the typed request payload for Flag.RemoveTyped.
type FlagRemoveMatch struct {
	AccountId string `json:"account_id"`
	AppId string `json:"app_id"`
	Id string `json:"id"`
}

// FlagshipEvaluationResult is the typed data model for the flagship_evaluation_result entity.
type FlagshipEvaluationResult struct {
}

// FlagshipEvaluationResultLoadMatch is the typed request payload for FlagshipEvaluationResult.LoadTyped.
type FlagshipEvaluationResultLoadMatch struct {
	AccountId string `json:"account_id"`
	AppId string `json:"app_id"`
	FlagKey string `json:"flag_key"`
	TargetingKey *string `json:"targeting_key,omitempty"`
}

// FlagshipEvaluationResultCreateData is the typed request payload for FlagshipEvaluationResult.CreateTyped.
type FlagshipEvaluationResultCreateData struct {
	AccountId string `json:"account_id"`
	AppId string `json:"app_id"`
	Context *map[string]any `json:"context,omitempty"`
	FlagKey string `json:"flagKey"`
	Reason string `json:"reason"`
	Value *any `json:"value,omitempty"`
	Variant string `json:"variant"`
}

// FlagshipFlagDefinition is the typed data model for the flagship_flag_definition entity.
type FlagshipFlagDefinition struct {
}

// FlagshipFlagDefinitionLoadMatch is the typed request payload for FlagshipFlagDefinition.LoadTyped.
type FlagshipFlagDefinitionLoadMatch struct {
	AccountId string `json:"account_id"`
	AppId string `json:"app_id"`
}

// MonolithHealth is the typed data model for the monolith_health entity.
type MonolithHealth struct {
}

// MonolithHealthListMatch is the typed request payload for MonolithHealth.ListTyped.
type MonolithHealthListMatch struct {
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ZoneSnippet is the typed data model for the zone_snippet entity.
type ZoneSnippet struct {
}

// ZoneSnippetLoadMatch is the typed request payload for ZoneSnippet.LoadTyped.
type ZoneSnippetLoadMatch struct {
	Id *string `json:"id,omitempty"`
	ZoneId string `json:"zone_id"`
	SnippetName *string `json:"snippet_name,omitempty"`
}

// ZoneSnippetListMatch is the typed request payload for ZoneSnippet.ListTyped.
type ZoneSnippetListMatch struct {
	Id string `json:"id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ZoneSnippetUpdateData is the typed request payload for ZoneSnippet.UpdateTyped.
type ZoneSnippetUpdateData struct {
	Id *string `json:"id,omitempty"`
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Rules *[]any `json:"rules,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ZoneSnippetRemoveMatch is the typed request payload for ZoneSnippet.RemoveTyped.
type ZoneSnippetRemoveMatch struct {
	Id *string `json:"id,omitempty"`
	ZoneId string `json:"zone_id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

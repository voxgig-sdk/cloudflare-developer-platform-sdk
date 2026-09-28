package voxgigcloudflaredeveloperplatformsdk

import (
	"github.com/voxgig-sdk/cloudflare-developer-platform-sdk/go/core"
	"github.com/voxgig-sdk/cloudflare-developer-platform-sdk/go/entity"
	"github.com/voxgig-sdk/cloudflare-developer-platform-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudflare-developer-platform-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudflareDeveloperPlatformSDK = core.CloudflareDeveloperPlatformSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudflareDeveloperPlatformEntity = core.CloudflareDeveloperPlatformEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudflareDeveloperPlatformError = core.CloudflareDeveloperPlatformError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAppEntityFunc = func(client *core.CloudflareDeveloperPlatformSDK, entopts map[string]any) core.CloudflareDeveloperPlatformEntity {
		return entity.NewAppEntity(client, entopts)
	}
	core.NewArtifactEntityFunc = func(client *core.CloudflareDeveloperPlatformSDK, entopts map[string]any) core.CloudflareDeveloperPlatformEntity {
		return entity.NewArtifactEntity(client, entopts)
	}
	core.NewBillSubsApiBulkAccountSubscriptionEntityFunc = func(client *core.CloudflareDeveloperPlatformSDK, entopts map[string]any) core.CloudflareDeveloperPlatformEntity {
		return entity.NewBillSubsApiBulkAccountSubscriptionEntity(client, entopts)
	}
	core.NewBrandProtectionEntityFunc = func(client *core.CloudflareDeveloperPlatformSDK, entopts map[string]any) core.CloudflareDeveloperPlatformEntity {
		return entity.NewBrandProtectionEntity(client, entopts)
	}
	core.NewChangelogEntityFunc = func(client *core.CloudflareDeveloperPlatformSDK, entopts map[string]any) core.CloudflareDeveloperPlatformEntity {
		return entity.NewChangelogEntity(client, entopts)
	}
	core.NewFlagEntityFunc = func(client *core.CloudflareDeveloperPlatformSDK, entopts map[string]any) core.CloudflareDeveloperPlatformEntity {
		return entity.NewFlagEntity(client, entopts)
	}
	core.NewFlagshipEvaluationResultEntityFunc = func(client *core.CloudflareDeveloperPlatformSDK, entopts map[string]any) core.CloudflareDeveloperPlatformEntity {
		return entity.NewFlagshipEvaluationResultEntity(client, entopts)
	}
	core.NewFlagshipFlagDefinitionEntityFunc = func(client *core.CloudflareDeveloperPlatformSDK, entopts map[string]any) core.CloudflareDeveloperPlatformEntity {
		return entity.NewFlagshipFlagDefinitionEntity(client, entopts)
	}
	core.NewMonolithHealthEntityFunc = func(client *core.CloudflareDeveloperPlatformSDK, entopts map[string]any) core.CloudflareDeveloperPlatformEntity {
		return entity.NewMonolithHealthEntity(client, entopts)
	}
	core.NewZoneSnippetEntityFunc = func(client *core.CloudflareDeveloperPlatformSDK, entopts map[string]any) core.CloudflareDeveloperPlatformEntity {
		return entity.NewZoneSnippetEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudflareDeveloperPlatformSDK = core.NewCloudflareDeveloperPlatformSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudflareDeveloperPlatformSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudflareDeveloperPlatformSDK  { return NewCloudflareDeveloperPlatformSDK(nil) }
func Test() *CloudflareDeveloperPlatformSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

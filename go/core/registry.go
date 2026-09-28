package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAppEntityFunc func(client *CloudflareDeveloperPlatformSDK, entopts map[string]any) CloudflareDeveloperPlatformEntity

var NewArtifactEntityFunc func(client *CloudflareDeveloperPlatformSDK, entopts map[string]any) CloudflareDeveloperPlatformEntity

var NewBillSubsApiBulkAccountSubscriptionEntityFunc func(client *CloudflareDeveloperPlatformSDK, entopts map[string]any) CloudflareDeveloperPlatformEntity

var NewBrandProtectionEntityFunc func(client *CloudflareDeveloperPlatformSDK, entopts map[string]any) CloudflareDeveloperPlatformEntity

var NewChangelogEntityFunc func(client *CloudflareDeveloperPlatformSDK, entopts map[string]any) CloudflareDeveloperPlatformEntity

var NewFlagEntityFunc func(client *CloudflareDeveloperPlatformSDK, entopts map[string]any) CloudflareDeveloperPlatformEntity

var NewFlagshipEvaluationResultEntityFunc func(client *CloudflareDeveloperPlatformSDK, entopts map[string]any) CloudflareDeveloperPlatformEntity

var NewFlagshipFlagDefinitionEntityFunc func(client *CloudflareDeveloperPlatformSDK, entopts map[string]any) CloudflareDeveloperPlatformEntity

var NewMonolithHealthEntityFunc func(client *CloudflareDeveloperPlatformSDK, entopts map[string]any) CloudflareDeveloperPlatformEntity

var NewZoneSnippetEntityFunc func(client *CloudflareDeveloperPlatformSDK, entopts map[string]any) CloudflareDeveloperPlatformEntity


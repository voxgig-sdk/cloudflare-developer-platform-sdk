# Typed models for the CloudflareDeveloperPlatform SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AppRequired(TypedDict):
    errors: list
    messages: list
    name: str
    result: dict
    success: bool


class App(AppRequired, total=False):
    id: str


class AppLoadMatch(TypedDict):
    account_id: str
    id: str


class AppListMatch(TypedDict):
    account_id: str


class AppCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    name: str
    result: dict
    success: bool


class AppCreateData(AppCreateDataRequired, total=False):
    id: str


class AppUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class AppUpdateData(AppUpdateDataRequired, total=False):
    errors: list
    messages: list
    name: str
    result: dict
    success: bool


class AppRemoveMatch(TypedDict):
    account_id: str
    id: str


class ArtifactRequired(TypedDict):
    errors: list
    messages: list
    name: str
    repo: str
    result: dict
    success: bool


class Artifact(ArtifactRequired, total=False):
    default_branch: str
    description: str
    id: str
    read_only: bool
    result_info: Any
    scope: str
    ttl: int


class ArtifactLoadMatchRequired(TypedDict):
    account_id: str


class ArtifactLoadMatch(ArtifactLoadMatchRequired, total=False):
    name: str
    namespace: str
    path: str
    ref: str
    namespace_id: str
    hash: str
    repo_id: str


class ArtifactListMatchRequired(TypedDict):
    account_id: str
    namespace_id: str


class ArtifactListMatch(ArtifactListMatchRequired, total=False):
    cursor: str
    direction: str
    limit: int
    search: str
    sort: str
    name: str
    offset: int
    ref: str
    page: int
    per_page: int
    state: str


class ArtifactCreateDataRequired(TypedDict):
    account_id: str
    namespace_id: str
    errors: list
    messages: list
    name: str
    repo: str
    result: dict
    success: bool


class ArtifactCreateData(ArtifactCreateDataRequired, total=False):
    default_branch: str
    description: str
    id: str
    read_only: bool
    result_info: Any
    scope: str
    ttl: int


class ArtifactRemoveMatchRequired(TypedDict):
    account_id: str


class ArtifactRemoveMatch(ArtifactRemoveMatchRequired, total=False):
    id: str
    namespace_id: str
    name: str
    namespace: str


class BillSubsApiBulkAccountSubscription(TypedDict, total=False):
    coupon_code: str
    payment_hold_id: int
    subscriptions: list
    user_is_on_session: bool


class BillSubsApiBulkAccountSubscriptionCreateDataRequired(TypedDict):
    account_id: str


class BillSubsApiBulkAccountSubscriptionCreateData(BillSubsApiBulkAccountSubscriptionCreateDataRequired, total=False):
    idemp_key: str
    coupon_code: str
    payment_hold_id: int
    subscriptions: list
    user_is_on_session: bool


class BrandProtection(TypedDict):
    pass


class BrandProtectionLoadMatch(TypedDict):
    pass


class BrandProtectionCreateData(TypedDict):
    pass


class Changelog(TypedDict):
    errors: list
    messages: list
    result: list
    result_info: dict
    success: bool


class ChangelogListMatchRequired(TypedDict):
    account_id: str
    app_id: str
    flag_key: str


class ChangelogListMatch(ChangelogListMatchRequired, total=False):
    cursor: str
    limit: str


class FlagRequired(TypedDict):
    default_variation: str
    enabled: bool
    errors: list
    key: str
    messages: list
    result: dict
    result_info: dict
    rules: list
    success: bool
    variations: dict


class Flag(FlagRequired, total=False):
    description: str
    id: str
    type: str


class FlagLoadMatch(TypedDict):
    account_id: str
    app_id: str
    id: str


class FlagListMatchRequired(TypedDict):
    account_id: str
    app_id: str


class FlagListMatch(FlagListMatchRequired, total=False):
    cursor: str
    limit: str


class FlagCreateDataRequired(TypedDict):
    account_id: str
    app_id: str
    default_variation: str
    enabled: bool
    errors: list
    key: str
    messages: list
    result: dict
    result_info: dict
    rules: list
    success: bool
    variations: dict


class FlagCreateData(FlagCreateDataRequired, total=False):
    description: str
    id: str
    type: str


class FlagUpdateDataRequired(TypedDict):
    account_id: str
    app_id: str
    id: str


class FlagUpdateData(FlagUpdateDataRequired, total=False):
    default_variation: str
    description: str
    enabled: bool
    errors: list
    key: str
    messages: list
    result: dict
    result_info: dict
    rules: list
    success: bool
    type: str
    variations: dict


class FlagRemoveMatch(TypedDict):
    account_id: str
    app_id: str
    id: str


class FlagshipEvaluationResultRequired(TypedDict):
    flagKey: str
    reason: str
    variant: str


class FlagshipEvaluationResult(FlagshipEvaluationResultRequired, total=False):
    context: dict
    value: Any


class FlagshipEvaluationResultLoadMatchRequired(TypedDict):
    account_id: str
    app_id: str
    flag_key: str


class FlagshipEvaluationResultLoadMatch(FlagshipEvaluationResultLoadMatchRequired, total=False):
    targeting_key: str


class FlagshipEvaluationResultCreateDataRequired(TypedDict):
    account_id: str
    app_id: str
    flagKey: str
    reason: str
    variant: str


class FlagshipEvaluationResultCreateData(FlagshipEvaluationResultCreateDataRequired, total=False):
    context: dict
    value: Any


class FlagshipFlagDefinition(TypedDict):
    default_variation: str
    enabled: bool
    key: str
    rules: list
    variations: dict


class FlagshipFlagDefinitionLoadMatch(TypedDict):
    account_id: str
    app_id: str


class MonolithHealth(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class MonolithHealthListMatch(TypedDict, total=False):
    errors: list
    messages: list
    result: dict
    success: bool


class ZoneSnippetRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    result_info: dict
    rules: list
    success: bool


class ZoneSnippet(ZoneSnippetRequired, total=False):
    id: str


class ZoneSnippetLoadMatchRequired(TypedDict):
    zone_id: str


class ZoneSnippetLoadMatch(ZoneSnippetLoadMatchRequired, total=False):
    id: str
    snippet_name: str


class ZoneSnippetListMatchRequired(TypedDict):
    id: str


class ZoneSnippetListMatch(ZoneSnippetListMatchRequired, total=False):
    page: int
    per_page: int


class ZoneSnippetUpdateDataRequired(TypedDict):
    zone_id: str


class ZoneSnippetUpdateData(ZoneSnippetUpdateDataRequired, total=False):
    id: str
    errors: list
    messages: list
    result: dict
    result_info: dict
    rules: list
    success: bool


class ZoneSnippetRemoveMatchRequired(TypedDict):
    zone_id: str


class ZoneSnippetRemoveMatch(ZoneSnippetRemoveMatchRequired, total=False):
    id: str

export interface App {
    errors: any[];
    id?: string;
    messages: any[];
    name: string;
    result: Record<string, any>;
    success: boolean;
}
export interface AppLoadMatch {
    account_id: string;
    id: string;
}
export interface AppListMatch {
    account_id: string;
}
export interface AppCreateData {
    account_id: string;
    errors: any[];
    id?: string;
    messages: any[];
    name: string;
    result: Record<string, any>;
    success: boolean;
}
export interface AppUpdateData {
    account_id: string;
    id: string;
    errors?: any[];
    messages?: any[];
    name?: string;
    result?: Record<string, any>;
    success?: boolean;
}
export interface AppRemoveMatch {
    account_id: string;
    id: string;
}
export interface Artifact {
    default_branch?: string;
    description?: string;
    errors: any[];
    id?: string;
    messages: any[];
    name: string;
    read_only?: boolean;
    repo: string;
    result: Record<string, any>;
    result_info?: any;
    scope?: string;
    success: boolean;
    ttl?: number;
}
export interface ArtifactLoadMatch {
    account_id: string;
    name?: string;
    namespace?: string;
    path?: string;
    ref?: string;
    namespace_id?: string;
    hash?: string;
    repo_id?: string;
}
export interface ArtifactListMatch {
    account_id: string;
    namespace_id: string;
    cursor?: string;
    direction?: string;
    limit?: number;
    search?: string;
    sort?: string;
    name?: string;
    offset?: number;
    ref?: string;
    page?: number;
    per_page?: number;
    state?: string;
    $action?: string;
    [action: string]: any;
}
export interface ArtifactCreateData {
    account_id: string;
    namespace_id: string;
    default_branch?: string;
    description?: string;
    errors: any[];
    id?: string;
    messages: any[];
    name: string;
    read_only?: boolean;
    repo: string;
    result: Record<string, any>;
    result_info?: any;
    scope?: string;
    success: boolean;
    ttl?: number;
    $action?: string;
    [action: string]: any;
}
export interface ArtifactRemoveMatch {
    account_id: string;
    id?: string;
    namespace_id?: string;
    name?: string;
    namespace?: string;
}
export interface BillSubsApiBulkAccountSubscription {
    coupon_code?: string;
    payment_hold_id?: number;
    subscriptions?: any[];
    user_is_on_session?: boolean;
}
export interface BillSubsApiBulkAccountSubscriptionCreateData {
    account_id: string;
    idemp_key?: string;
    coupon_code?: string;
    payment_hold_id?: number;
    subscriptions?: any[];
    user_is_on_session?: boolean;
}
export interface BrandProtection {
}
export interface BrandProtectionLoadMatch {
}
export interface BrandProtectionCreateData {
}
export interface Changelog {
    errors: any[];
    messages: any[];
    result: any[];
    result_info: Record<string, any>;
    success: boolean;
}
export interface ChangelogListMatch {
    account_id: string;
    app_id: string;
    flag_key: string;
    cursor?: string;
    limit?: string;
}
export interface Flag {
    default_variation: string;
    description?: string;
    enabled: boolean;
    errors: any[];
    id?: string;
    key: string;
    messages: any[];
    result: Record<string, any>;
    result_info: Record<string, any>;
    rules: any[];
    success: boolean;
    type?: string;
    variations: Record<string, any>;
}
export interface FlagLoadMatch {
    account_id: string;
    app_id: string;
    id: string;
}
export interface FlagListMatch {
    account_id: string;
    app_id: string;
    cursor?: string;
    limit?: string;
}
export interface FlagCreateData {
    account_id: string;
    app_id: string;
    default_variation: string;
    description?: string;
    enabled: boolean;
    errors: any[];
    id?: string;
    key: string;
    messages: any[];
    result: Record<string, any>;
    result_info: Record<string, any>;
    rules: any[];
    success: boolean;
    type?: string;
    variations: Record<string, any>;
}
export interface FlagUpdateData {
    account_id: string;
    app_id: string;
    id: string;
    default_variation?: string;
    description?: string;
    enabled?: boolean;
    errors?: any[];
    key?: string;
    messages?: any[];
    result?: Record<string, any>;
    result_info?: Record<string, any>;
    rules?: any[];
    success?: boolean;
    type?: string;
    variations?: Record<string, any>;
}
export interface FlagRemoveMatch {
    account_id: string;
    app_id: string;
    id: string;
}
export interface FlagshipEvaluationResult {
    context?: Record<string, any>;
    flagKey: string;
    reason: string;
    value?: any;
    variant: string;
}
export interface FlagshipEvaluationResultLoadMatch {
    account_id: string;
    app_id: string;
    flag_key: string;
    targeting_key?: string;
}
export interface FlagshipEvaluationResultCreateData {
    account_id: string;
    app_id: string;
    context?: Record<string, any>;
    flagKey: string;
    reason: string;
    value?: any;
    variant: string;
}
export interface FlagshipFlagDefinition {
    default_variation: string;
    enabled: boolean;
    key: string;
    rules: any[];
    variations: Record<string, any>;
}
export interface FlagshipFlagDefinitionLoadMatch {
    account_id: string;
    app_id: string;
}
export interface MonolithHealth {
    errors: any[];
    messages: any[];
    result: Record<string, any>;
    success: boolean;
}
export interface MonolithHealthListMatch {
    errors?: any[];
    messages?: any[];
    result?: Record<string, any>;
    success?: boolean;
}
export interface ZoneSnippet {
    errors: any[];
    id?: string;
    messages: any[];
    result: Record<string, any>;
    result_info: Record<string, any>;
    rules: any[];
    success: boolean;
}
export interface ZoneSnippetLoadMatch {
    id?: string;
    zone_id: string;
    snippet_name?: string;
}
export interface ZoneSnippetListMatch {
    id: string;
    page?: number;
    per_page?: number;
}
export interface ZoneSnippetUpdateData {
    id?: string;
    zone_id: string;
    errors?: any[];
    messages?: any[];
    result?: Record<string, any>;
    result_info?: Record<string, any>;
    rules?: any[];
    success?: boolean;
}
export interface ZoneSnippetRemoveMatch {
    id?: string;
    zone_id: string;
}

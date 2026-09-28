import { AppEntity } from './entity/AppEntity';
import { ArtifactEntity } from './entity/ArtifactEntity';
import { BillSubsApiBulkAccountSubscriptionEntity } from './entity/BillSubsApiBulkAccountSubscriptionEntity';
import { BrandProtectionEntity } from './entity/BrandProtectionEntity';
import { ChangelogEntity } from './entity/ChangelogEntity';
import { FlagEntity } from './entity/FlagEntity';
import { FlagshipEvaluationResultEntity } from './entity/FlagshipEvaluationResultEntity';
import { FlagshipFlagDefinitionEntity } from './entity/FlagshipFlagDefinitionEntity';
import { MonolithHealthEntity } from './entity/MonolithHealthEntity';
import { ZoneSnippetEntity } from './entity/ZoneSnippetEntity';
export type * from './CloudflareDeveloperPlatformTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { CloudflareDeveloperPlatformEntityBase } from './CloudflareDeveloperPlatformEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class CloudflareDeveloperPlatformSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    App(entopts?: Record<string, any>): AppEntity;
    Artifact(entopts?: Record<string, any>): ArtifactEntity;
    BillSubsApiBulkAccountSubscription(entopts?: Record<string, any>): BillSubsApiBulkAccountSubscriptionEntity;
    BrandProtection(entopts?: Record<string, any>): BrandProtectionEntity;
    Changelog(entopts?: Record<string, any>): ChangelogEntity;
    Flag(entopts?: Record<string, any>): FlagEntity;
    FlagshipEvaluationResult(entopts?: Record<string, any>): FlagshipEvaluationResultEntity;
    FlagshipFlagDefinition(entopts?: Record<string, any>): FlagshipFlagDefinitionEntity;
    MonolithHealth(entopts?: Record<string, any>): MonolithHealthEntity;
    ZoneSnippet(entopts?: Record<string, any>): ZoneSnippetEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): CloudflareDeveloperPlatformSDK;
    tester(testopts?: any, sdkopts?: any): CloudflareDeveloperPlatformSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof CloudflareDeveloperPlatformSDK;
export { stdutil, config, BaseFeature, CloudflareDeveloperPlatformEntityBase, CloudflareDeveloperPlatformSDK, SDK, };

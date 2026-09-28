import { CloudflareDeveloperPlatformEntityBase } from '../CloudflareDeveloperPlatformEntityBase';
import type { CloudflareDeveloperPlatformSDK } from '../CloudflareDeveloperPlatformSDK';
import type { Control } from '../types';
import type { FlagshipFlagDefinition, FlagshipFlagDefinitionLoadMatch } from '../CloudflareDeveloperPlatformTypes';
declare class FlagshipFlagDefinitionEntity extends CloudflareDeveloperPlatformEntityBase<FlagshipFlagDefinition> {
    constructor(client: CloudflareDeveloperPlatformSDK, entopts: any);
    make(this: FlagshipFlagDefinitionEntity): FlagshipFlagDefinitionEntity;
    load(this: any, reqmatch?: FlagshipFlagDefinitionLoadMatch, ctrl?: Control): Promise<FlagshipFlagDefinitionEntity>;
}
export { FlagshipFlagDefinitionEntity };

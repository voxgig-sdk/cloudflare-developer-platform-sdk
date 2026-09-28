import { CloudflareDeveloperPlatformEntityBase } from '../CloudflareDeveloperPlatformEntityBase';
import type { CloudflareDeveloperPlatformSDK } from '../CloudflareDeveloperPlatformSDK';
import type { Control } from '../types';
import type { FlagshipEvaluationResult, FlagshipEvaluationResultLoadMatch, FlagshipEvaluationResultCreateData } from '../CloudflareDeveloperPlatformTypes';
declare class FlagshipEvaluationResultEntity extends CloudflareDeveloperPlatformEntityBase<FlagshipEvaluationResult> {
    constructor(client: CloudflareDeveloperPlatformSDK, entopts: any);
    make(this: FlagshipEvaluationResultEntity): FlagshipEvaluationResultEntity;
    load(this: any, reqmatch?: FlagshipEvaluationResultLoadMatch, ctrl?: Control): Promise<FlagshipEvaluationResultEntity>;
    create(this: any, reqdata?: FlagshipEvaluationResultCreateData, ctrl?: Control): Promise<FlagshipEvaluationResultEntity>;
}
export { FlagshipEvaluationResultEntity };

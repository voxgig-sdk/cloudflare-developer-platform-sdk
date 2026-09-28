import { CloudflareDeveloperPlatformEntityBase } from '../CloudflareDeveloperPlatformEntityBase';
import type { CloudflareDeveloperPlatformSDK } from '../CloudflareDeveloperPlatformSDK';
import type { Control } from '../types';
import type { Flag, FlagLoadMatch, FlagListMatch, FlagCreateData, FlagUpdateData, FlagRemoveMatch } from '../CloudflareDeveloperPlatformTypes';
declare class FlagEntity extends CloudflareDeveloperPlatformEntityBase<Flag> {
    constructor(client: CloudflareDeveloperPlatformSDK, entopts: any);
    make(this: FlagEntity): FlagEntity;
    load(this: any, reqmatch?: FlagLoadMatch, ctrl?: Control): Promise<FlagEntity>;
    list(this: any, reqmatch?: FlagListMatch, ctrl?: Control): Promise<FlagEntity[]>;
    create(this: any, reqdata?: FlagCreateData, ctrl?: Control): Promise<FlagEntity>;
    update(this: any, reqdata?: FlagUpdateData, ctrl?: Control): Promise<FlagEntity>;
    remove(this: any, reqmatch?: FlagRemoveMatch, ctrl?: Control): Promise<FlagEntity>;
}
export { FlagEntity };

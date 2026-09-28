import { CloudflareDeveloperPlatformEntityBase } from '../CloudflareDeveloperPlatformEntityBase';
import type { CloudflareDeveloperPlatformSDK } from '../CloudflareDeveloperPlatformSDK';
import type { Control } from '../types';
import type { MonolithHealth, MonolithHealthListMatch } from '../CloudflareDeveloperPlatformTypes';
declare class MonolithHealthEntity extends CloudflareDeveloperPlatformEntityBase<MonolithHealth> {
    constructor(client: CloudflareDeveloperPlatformSDK, entopts: any);
    make(this: MonolithHealthEntity): MonolithHealthEntity;
    list(this: any, reqmatch?: MonolithHealthListMatch, ctrl?: Control): Promise<MonolithHealthEntity[]>;
}
export { MonolithHealthEntity };

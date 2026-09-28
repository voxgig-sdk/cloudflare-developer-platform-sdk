import { CloudflareDeveloperPlatformEntityBase } from '../CloudflareDeveloperPlatformEntityBase';
import type { CloudflareDeveloperPlatformSDK } from '../CloudflareDeveloperPlatformSDK';
import type { Control } from '../types';
import type { BrandProtection, BrandProtectionLoadMatch, BrandProtectionCreateData } from '../CloudflareDeveloperPlatformTypes';
declare class BrandProtectionEntity extends CloudflareDeveloperPlatformEntityBase<BrandProtection> {
    constructor(client: CloudflareDeveloperPlatformSDK, entopts: any);
    make(this: BrandProtectionEntity): BrandProtectionEntity;
    load(this: any, reqmatch?: BrandProtectionLoadMatch, ctrl?: Control): Promise<BrandProtectionEntity>;
    create(this: any, reqdata?: BrandProtectionCreateData, ctrl?: Control): Promise<BrandProtectionEntity>;
}
export { BrandProtectionEntity };

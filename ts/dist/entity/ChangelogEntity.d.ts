import { CloudflareDeveloperPlatformEntityBase } from '../CloudflareDeveloperPlatformEntityBase';
import type { CloudflareDeveloperPlatformSDK } from '../CloudflareDeveloperPlatformSDK';
import type { Control } from '../types';
import type { Changelog, ChangelogListMatch } from '../CloudflareDeveloperPlatformTypes';
declare class ChangelogEntity extends CloudflareDeveloperPlatformEntityBase<Changelog> {
    constructor(client: CloudflareDeveloperPlatformSDK, entopts: any);
    make(this: ChangelogEntity): ChangelogEntity;
    list(this: any, reqmatch?: ChangelogListMatch, ctrl?: Control): Promise<ChangelogEntity[]>;
}
export { ChangelogEntity };

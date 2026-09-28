import { CloudflareDeveloperPlatformEntityBase } from '../CloudflareDeveloperPlatformEntityBase';
import type { CloudflareDeveloperPlatformSDK } from '../CloudflareDeveloperPlatformSDK';
import type { Control } from '../types';
import type { ZoneSnippet, ZoneSnippetLoadMatch, ZoneSnippetListMatch, ZoneSnippetUpdateData, ZoneSnippetRemoveMatch } from '../CloudflareDeveloperPlatformTypes';
declare class ZoneSnippetEntity extends CloudflareDeveloperPlatformEntityBase<ZoneSnippet> {
    constructor(client: CloudflareDeveloperPlatformSDK, entopts: any);
    make(this: ZoneSnippetEntity): ZoneSnippetEntity;
    load(this: any, reqmatch?: ZoneSnippetLoadMatch, ctrl?: Control): Promise<ZoneSnippetEntity>;
    list(this: any, reqmatch?: ZoneSnippetListMatch, ctrl?: Control): Promise<ZoneSnippetEntity[]>;
    update(this: any, reqdata?: ZoneSnippetUpdateData, ctrl?: Control): Promise<ZoneSnippetEntity>;
    remove(this: any, reqmatch?: ZoneSnippetRemoveMatch, ctrl?: Control): Promise<ZoneSnippetEntity>;
}
export { ZoneSnippetEntity };

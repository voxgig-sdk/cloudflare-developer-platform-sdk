import { CloudflareDeveloperPlatformEntityBase } from '../CloudflareDeveloperPlatformEntityBase';
import type { CloudflareDeveloperPlatformSDK } from '../CloudflareDeveloperPlatformSDK';
import type { Control } from '../types';
import type { Artifact, ArtifactLoadMatch, ArtifactListMatch, ArtifactCreateData, ArtifactRemoveMatch } from '../CloudflareDeveloperPlatformTypes';
declare class ArtifactEntity extends CloudflareDeveloperPlatformEntityBase<Artifact> {
    constructor(client: CloudflareDeveloperPlatformSDK, entopts: any);
    make(this: ArtifactEntity): ArtifactEntity;
    load(this: any, reqmatch?: ArtifactLoadMatch, ctrl?: Control): Promise<ArtifactEntity>;
    list(this: any, reqmatch?: ArtifactListMatch, ctrl?: Control): Promise<ArtifactEntity[]>;
    create(this: any, reqdata?: ArtifactCreateData, ctrl?: Control): Promise<ArtifactEntity>;
    remove(this: any, reqmatch?: ArtifactRemoveMatch, ctrl?: Control): Promise<ArtifactEntity>;
}
export { ArtifactEntity };

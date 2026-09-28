import { CloudflareDeveloperPlatformEntityBase } from '../CloudflareDeveloperPlatformEntityBase';
import type { CloudflareDeveloperPlatformSDK } from '../CloudflareDeveloperPlatformSDK';
import type { Control } from '../types';
import type { BillSubsApiBulkAccountSubscription, BillSubsApiBulkAccountSubscriptionCreateData } from '../CloudflareDeveloperPlatformTypes';
declare class BillSubsApiBulkAccountSubscriptionEntity extends CloudflareDeveloperPlatformEntityBase<BillSubsApiBulkAccountSubscription> {
    constructor(client: CloudflareDeveloperPlatformSDK, entopts: any);
    make(this: BillSubsApiBulkAccountSubscriptionEntity): BillSubsApiBulkAccountSubscriptionEntity;
    create(this: any, reqdata?: BillSubsApiBulkAccountSubscriptionCreateData, ctrl?: Control): Promise<BillSubsApiBulkAccountSubscriptionEntity>;
}
export { BillSubsApiBulkAccountSubscriptionEntity };

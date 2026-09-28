"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareDeveloperPlatformError = void 0;
class CloudflareDeveloperPlatformError extends Error {
    isCloudflareDeveloperPlatformError = true;
    sdk = 'CloudflareDeveloperPlatform';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CloudflareDeveloperPlatformError = CloudflareDeveloperPlatformError;
//# sourceMappingURL=CloudflareDeveloperPlatformError.js.map
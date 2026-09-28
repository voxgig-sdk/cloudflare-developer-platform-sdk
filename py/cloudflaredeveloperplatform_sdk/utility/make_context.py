# CloudflareDeveloperPlatform SDK utility: make_context

from cloudflaredeveloperplatform_sdk.core.context import CloudflareDeveloperPlatformContext


def make_context_util(ctxmap, basectx):
    return CloudflareDeveloperPlatformContext(ctxmap, basectx)

# CloudflareDeveloperPlatform SDK utility: make_context
require_relative '../core/context'
module CloudflareDeveloperPlatformUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudflareDeveloperPlatformContext.new(ctxmap, basectx)
  }
end

-- CloudflareDeveloperPlatform SDK error

local CloudflareDeveloperPlatformError = {}
CloudflareDeveloperPlatformError.__index = CloudflareDeveloperPlatformError


function CloudflareDeveloperPlatformError.new(code, msg, ctx)
  local self = setmetatable({}, CloudflareDeveloperPlatformError)
  self.is_sdk_error = true
  self.sdk = "CloudflareDeveloperPlatform"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudflareDeveloperPlatformError:error()
  return self.msg
end


function CloudflareDeveloperPlatformError:__tostring()
  return self.msg
end


return CloudflareDeveloperPlatformError

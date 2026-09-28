-- CloudflareDeveloperPlatform SDK exists test

local sdk = require("cloudflare-developer-platform_sdk")

describe("CloudflareDeveloperPlatformSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)

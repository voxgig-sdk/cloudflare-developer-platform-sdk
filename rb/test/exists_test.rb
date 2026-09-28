# CloudflareDeveloperPlatform SDK exists test

require "minitest/autorun"
require_relative "../CloudflareDeveloperPlatform_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CloudflareDeveloperPlatformSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

# CloudflareDeveloperPlatform SDK exists test

import pytest
from cloudflaredeveloperplatform_sdk import CloudflareDeveloperPlatformSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudflareDeveloperPlatformSDK.test(None, None)
        assert testsdk is not None

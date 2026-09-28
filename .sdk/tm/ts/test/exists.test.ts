
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudflareDeveloperPlatformSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudflareDeveloperPlatformSDK.test()
    equal(testsdk instanceof CloudflareDeveloperPlatformSDK, true,
      'CloudflareDeveloperPlatformSDK.test() must return a client synchronously')
  })

})

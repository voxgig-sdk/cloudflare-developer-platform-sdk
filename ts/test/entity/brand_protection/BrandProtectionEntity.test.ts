

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudflareDeveloperPlatformSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('BrandProtectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDeveloperPlatformSDK.test()
    const ent = testsdk.BrandProtection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'brand_protection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"brand_protection","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /internal/submit","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/internal/submit","q":{},"r":{},"s":[{"lit":"internal"},{"lit":"submit"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /ready","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/ready","q":{},"r":{},"s":[{"lit":"ready"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"brand_protection","name__orig":"brand_protection","Name":"BrandProtection","name_":"brand_protection","name-":"brand-protection","NAME":"BRAND_PROTECTION","index$":3}, {"active":true,"entity":"brand_protection","key$":"BasicBrandProtectionFlow","kind":"basic","name":"BasicBrandProtectionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"brand_protection_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"brand_protection_ref01","srcdatavar":"brand_protection_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-brand_protection_ref01"}}],"index$":1}]}, 'BrandProtection', {"POST /internal/submit":{"protocol":"http","parameters":[]},"GET /ready":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const brand_protection_ref01_ent = client.BrandProtection()
    let brand_protection_ref01_data = setup.data.new.brand_protection['brand_protection_ref01']

    brand_protection_ref01_data = (await brand_protection_ref01_ent.create(brand_protection_ref01_data)).data()
    assert(null != brand_protection_ref01_data)


    // LOAD
    const brand_protection_ref01_match_dt0: any = {}
    const brand_protection_ref01_data_dt0 = (await brand_protection_ref01_ent.load(brand_protection_ref01_match_dt0)).data()
    assert(null != brand_protection_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/brand_protection/BrandProtectionTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudflareDeveloperPlatformSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['brand_protection01','brand_protection02','brand_protection03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_BRAND_PROTECTION_ENTID': idmap,
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_BRAND_PROTECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_BRAND_PROTECTION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudflareDeveloperPlatformSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  

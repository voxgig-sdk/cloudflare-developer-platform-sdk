

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


describe('FlagshipFlagDefinitionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDeveloperPlatformSDK.test()
    const ent = testsdk.FlagshipFlagDefinition()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'flagship_flag_definition.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"default_variation":{"a":true,"h":"Default Variation","n":"default_variation","r":true,"sh":"Variation the API serves when the flag is off, or when it's on but no rule matches the context.","t":"`$STRING`","key$":"default_variation","index$":0},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"sh":"When false, the flag bypasses all rules and always serves `default_variation`.","t":"`$BOOLEAN`","key$":"enabled","index$":1},"key":{"a":true,"h":"Key","n":"key","r":true,"sh":"Unique identifier for the flag within an app.","t":"`$STRING`","key$":"key","index$":2},"rules":{"a":true,"h":"Rules","n":"rules","r":true,"t":"`$ARRAY`","union":{"branches":5,"count":13,"depth":34},"key$":"rules","index$":3},"variations":{"a":true,"h":"Variations","n":"variations","r":true,"sh":"Map of variation name to value.","t":"`$OBJECT`","union":{"branches":5,"count":1,"depth":1},"key$":"variations","index$":4}},"name":"flagship_flag_definition","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/flagship/apps/{app_id}/definitions","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"if_none_match","or":"if_none_match","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"app_id","or":"app_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/flagship/apps/{app_id}/definitions","q":{"exist":["account_id","app_id","if_none_match"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"flagship"},{"lit":"apps"},{"var":"app_id"},{"lit":"definitions"}],"t":{"req":"`reqdata`","res":"`body.flags`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.app"]]},"key$":"flagship_flag_definition","name__orig":"flagship_flag_definition","Name":"FlagshipFlagDefinition","name_":"flagship_flag_definition","name-":"flagship-flag-definition","NAME":"FLAGSHIP_FLAG_DEFINITION","index$":7}, {"active":true,"entity":"flagship_flag_definition","key$":"BasicFlagshipFlagDefinitionFlow","kind":"basic","name":"BasicFlagshipFlagDefinitionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"flagship_flag_definition_ref01","srcdatavar":"flagship_flag_definition_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"flagship_flag_definition01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-flagship_flag_definition_ref01"}}],"index$":0}]}, 'FlagshipFlagDefinition', {"GET /accounts/{account_id}/flagship/apps/{app_id}/definitions":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare account ID.","required":true,"schema":{"description":"Cloudflare account ID.","type":"string"},"index$":0},{"name":"app_id","in":"path","description":"App identifier.","required":true,"schema":{"description":"App identifier.","type":"string"},"index$":1},{"name":"If-None-Match","in":"header","description":"Previously returned ETag, or `*`.","schema":{"description":"Previously returned ETag, or `*`.","type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let flagship_flag_definition_ref01_data = Object.values(setup.data.existing.flagship_flag_definition)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const flagship_flag_definition_ref01_ent = client.FlagshipFlagDefinition()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/flagship_flag_definition/FlagshipFlagDefinitionTestData.json')

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
    ['flagship_flag_definition01','flagship_flag_definition02','flagship_flag_definition03','app01','app02','app03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_FLAG_DEFINITION_ENTID': idmap,
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_FLAG_DEFINITION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_FLAG_DEFINITION_ENTID']
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
  

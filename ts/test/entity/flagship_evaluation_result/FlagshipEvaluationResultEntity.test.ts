

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


describe('FlagshipEvaluationResultEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDeveloperPlatformSDK.test()
    const ent = testsdk.FlagshipEvaluationResult()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'flagship_evaluation_result.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"context":{"a":true,"h":"Context","n":"context","r":false,"t":"`$OBJECT`","union":{"branches":5,"count":1,"depth":1},"key$":"context","index$":0},"flagKey":{"a":true,"h":"Flag Key","n":"flagKey","r":true,"t":"`$STRING`","key$":"flagKey","index$":1},"reason":{"a":true,"h":"Reason","n":"reason","r":true,"t":"`$STRING`","key$":"reason","index$":2},"value":{"a":true,"h":"Value","n":"value","r":false,"t":"`$ANY`","union":{"branches":5,"count":1,"depth":0},"key$":"value","index$":3},"variant":{"a":true,"h":"Variant","n":"variant","r":true,"t":"`$STRING`","key$":"variant","index$":4}},"name":"flagship_evaluation_result","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/flagship/apps/{app_id}/evaluate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"app_id","or":"app_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/flagship/apps/{app_id}/evaluate","q":{"exist":["account_id","app_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"flagship"},{"lit":"apps"},{"var":"app_id"},{"lit":"evaluate"}],"t":{"req":{"context":"`reqdata.context`","flagKey":"`reqdata.flag_key`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/flagship/apps/{app_id}/evaluate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"app_id","or":"app_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"flag_key","or":"flag_key","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"targeting_key","or":"targeting_key","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/flagship/apps/{app_id}/evaluate","q":{"exist":["account_id","app_id","flag_key","targeting_key"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"flagship"},{"lit":"apps"},{"var":"app_id"},{"lit":"evaluate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.app"]]},"key$":"flagship_evaluation_result","name__orig":"flagship_evaluation_result","Name":"FlagshipEvaluationResult","name_":"flagship_evaluation_result","name-":"flagship-evaluation-result","NAME":"FLAGSHIP_EVALUATION_RESULT","index$":6}, {"active":true,"entity":"flagship_evaluation_result","key$":"BasicFlagshipEvaluationResultFlow","kind":"basic","name":"BasicFlagshipEvaluationResultFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"flagship_evaluation_result_ref01"},"m":{"account_id":"account01","app_id":"app01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"flagship_evaluation_result_ref01","srcdatavar":"flagship_evaluation_result_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"flagship_evaluation_result01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-flagship_evaluation_result_ref01"}}],"index$":1}]}, 'FlagshipEvaluationResult', {"POST /accounts/{account_id}/flagship/apps/{app_id}/evaluate":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"context":{"type":"object","default":{},"additionalProperties":{"oneOf":[{"nullable":true,"type":"string"},{"type":"number"},{"type":"boolean"},{"additionalProperties":{},"type":"object"},{"items":{},"type":"array"}],"x-ref":"#/components/schemas/flagship_JsonValue"},"key$":"context"},"flagKey":{"type":"string","maxLength":64,"minLength":1,"pattern":"^[a-zA-Z0-9_-]+$","key$":"flagKey"}},"additionalProperties":false,"required":["flagKey"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Cloudflare account ID.","required":true,"schema":{"description":"Cloudflare account ID.","type":"string"},"index$":0},{"name":"app_id","in":"path","description":"App identifier.","required":true,"schema":{"description":"App identifier.","type":"string"},"index$":1}]},"GET /accounts/{account_id}/flagship/apps/{app_id}/evaluate":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare account ID.","required":true,"schema":{"description":"Cloudflare account ID.","type":"string"},"index$":0},{"name":"app_id","in":"path","description":"App identifier.","required":true,"schema":{"description":"App identifier.","type":"string"},"index$":1},{"name":"flagKey","in":"query","description":"The flag key to evaluate.","required":true,"schema":{"description":"The flag key to evaluate.","type":"string"},"index$":2},{"name":"targetingKey","in":"query","description":"Context targeting key (per OpenFeature spec); used for percentage rollout bucketing.","schema":{"description":"Context targeting key (per OpenFeature spec); used for percentage rollout bucketing.","type":"string"},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const flagship_evaluation_result_ref01_ent = client.FlagshipEvaluationResult()
    let flagship_evaluation_result_ref01_data = setup.data.new.flagship_evaluation_result['flagship_evaluation_result_ref01']
    flagship_evaluation_result_ref01_data['account_id'] = setup.idmap['account01']
    flagship_evaluation_result_ref01_data['app_id'] = setup.idmap['app01']

    flagship_evaluation_result_ref01_data = (await flagship_evaluation_result_ref01_ent.create(flagship_evaluation_result_ref01_data)).data()
    assert(null != flagship_evaluation_result_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/flagship_evaluation_result/FlagshipEvaluationResultTestData.json')

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
    ['flagship_evaluation_result01','flagship_evaluation_result02','flagship_evaluation_result03','app01','app02','app03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_EVALUATION_RESULT_ENTID': idmap,
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_EVALUATION_RESULT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_FLAGSHIP_EVALUATION_RESULT_ENTID']
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
  

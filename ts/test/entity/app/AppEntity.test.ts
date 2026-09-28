

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


describe('AppEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDeveloperPlatformSDK.test()
    const ent = testsdk.App()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'app.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"name","index$":3},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":4},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":5}},"id":{"field":"id","name":"id"},"name":"app","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/flagship/apps","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/flagship/apps","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"flagship"},{"lit":"apps"}],"t":{"req":{"name":"`reqdata.name`"},"res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/flagship/apps","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/flagship/apps","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"flagship"},{"lit":"apps"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/flagship/apps/{app_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"app_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/flagship/apps/{app_id}","q":{"exist":["account_id","id"]},"r":{"param":{"app_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"flagship"},{"lit":"apps"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/flagship/apps/{app_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"app_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/flagship/apps/{app_id}","q":{"exist":["account_id","id"]},"r":{"param":{"app_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"flagship"},{"lit":"apps"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/flagship/apps/{app_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"app_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/flagship/apps/{app_id}","q":{"exist":["account_id","id"]},"r":{"param":{"app_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"flagship"},{"lit":"apps"},{"var":"id"}],"t":{"req":{"name":"`reqdata.name`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"app","name__orig":"app","Name":"App","name_":"app","name-":"app","NAME":"APP","index$":0}, {"active":true,"entity":"app","key$":"BasicAppFlow","kind":"basic","name":"BasicAppFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"app_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"app_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"app_ref01","srcdatavar":"app_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-app_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"app_ref01","srcdatavar":"app_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"app01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-app_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"app_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"app01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"app_ref01"}}],"index$":5}]}, 'App', {"POST /accounts/{account_id}/flagship/apps":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":64,"minLength":1,"pattern":"^[a-zA-Z0-9_-]+$","key$":"name"}},"additionalProperties":false,"required":["name"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Cloudflare account ID.","required":true,"schema":{"description":"Cloudflare account ID.","type":"string"},"index$":0}]},"GET /accounts/{account_id}/flagship/apps":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare account ID.","required":true,"schema":{"description":"Cloudflare account ID.","type":"string"},"index$":0}]},"GET /accounts/{account_id}/flagship/apps/{app_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare account ID.","required":true,"schema":{"description":"Cloudflare account ID.","type":"string"},"index$":0},{"name":"app_id","in":"path","description":"App identifier.","required":true,"schema":{"description":"App identifier.","type":"string"},"index$":1}]},"DELETE /accounts/{account_id}/flagship/apps/{app_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare account ID.","required":true,"schema":{"description":"Cloudflare account ID.","type":"string"},"index$":0},{"name":"app_id","in":"path","description":"App identifier.","required":true,"schema":{"description":"App identifier.","type":"string"},"index$":1}]},"PUT /accounts/{account_id}/flagship/apps/{app_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":64,"minLength":1,"pattern":"^[a-zA-Z0-9_-]+$","key$":"name"}},"additionalProperties":false,"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Cloudflare account ID.","required":true,"schema":{"description":"Cloudflare account ID.","type":"string"},"index$":0},{"name":"app_id","in":"path","description":"App identifier.","required":true,"schema":{"description":"App identifier.","type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const app_ref01_ent = client.App()
    let app_ref01_data = setup.data.new.app['app_ref01']
    app_ref01_data['account_id'] = setup.idmap['account01']

    app_ref01_data = (await app_ref01_ent.create(app_ref01_data)).data()
    assert(null != app_ref01_data.id)


    // LIST
    const app_ref01_match: any = {}
    app_ref01_match['account_id'] = setup.idmap['account01']

    const app_ref01_list = (await app_ref01_ent.list(app_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(app_ref01_list, { id: app_ref01_data.id })))


    // UPDATE
    const app_ref01_data_up0: any = {}
    app_ref01_data_up0.id = app_ref01_data.id
    app_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const app_ref01_markdef_up0 = { name: 'name', value: 'Mark01-app_ref01_' + setup.now }
    ;(app_ref01_data_up0 as any)[app_ref01_markdef_up0.name] = app_ref01_markdef_up0.value

    const app_ref01_resdata_up0 = (await app_ref01_ent.update(app_ref01_data_up0)).data()
    assert(app_ref01_resdata_up0.id === app_ref01_data_up0.id)

    assert((app_ref01_resdata_up0 as any)[app_ref01_markdef_up0.name] === app_ref01_markdef_up0.value)


    // LOAD
    const app_ref01_match_dt0: any = {}
    app_ref01_match_dt0.id = app_ref01_data.id
    const app_ref01_data_dt0 = (await app_ref01_ent.load(app_ref01_match_dt0)).data()
    assert(app_ref01_data_dt0.id === app_ref01_data.id)


    // REMOVE
    const app_ref01_match_rm0: any = { id: app_ref01_data.id }
    await app_ref01_ent.remove(app_ref01_match_rm0)
  

    // LIST
    const app_ref01_match_rt0: any = {}
    app_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const app_ref01_list_rt0 = (await app_ref01_ent.list(app_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(app_ref01_list_rt0, { id: app_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/app/AppTestData.json')

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
    ['app01','app02','app03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_APP_ENTID': idmap,
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_APP_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_APP_ENTID']
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
  

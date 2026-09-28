

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


describe('BillSubsApiBulkAccountSubscriptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareDeveloperPlatformSDK.test()
    const ent = testsdk.BillSubsApiBulkAccountSubscription()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bill_subs_api_bulk_account_subscription.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"coupon_code":{"a":true,"h":"Coupon Code","n":"coupon_code","r":false,"t":"`$STRING`","key$":"coupon_code","index$":0},"payment_hold_id":{"a":true,"fo":"int64","h":"Payment Hold Id","n":"payment_hold_id","r":false,"t":"`$INTEGER`","key$":"payment_hold_id","index$":1},"subscriptions":{"a":true,"h":"Subscriptions","n":"subscriptions","r":false,"t":"`$ARRAY`","key$":"subscriptions","index$":2},"user_is_on_session":{"a":true,"h":"User Is On Session","n":"user_is_on_session","r":false,"t":"`$BOOLEAN`","key$":"user_is_on_session","index$":3}},"name":"bill_subs_api_bulk_account_subscription","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/bulk/subscriptions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"idemp_key","or":"idemp_key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/bulk/subscriptions","q":{"exist":["account_id","idemp_key"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"bulk"},{"lit":"subscriptions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"bill_subs_api_bulk_account_subscription","name__orig":"bill_subs_api_bulk_account_subscription","Name":"BillSubsApiBulkAccountSubscription","name_":"bill_subs_api_bulk_account_subscription","name-":"bill-subs-api-bulk-account-subscription","NAME":"BILL_SUBS_API_BULK_ACCOUNT_SUBSCRIPTION","index$":2}, {"active":true,"entity":"bill_subs_api_bulk_account_subscription","key$":"BasicBillSubsApiBulkAccountSubscriptionFlow","kind":"basic","name":"BasicBillSubsApiBulkAccountSubscriptionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"bill_subs_api_bulk_account_subscription_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'BillSubsApiBulkAccountSubscription', {"POST /accounts/{account_id}/bulk/subscriptions":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"coupon_code":{"type":"string","key$":"coupon_code"},"payment_hold_id":{"type":"integer","format":"int64","key$":"payment_hold_id"},"subscriptions":{"type":"array","items":{"type":"object","properties":{"app":{"description":"Cloudflare Apps Marketplace is sunset. This field is retained for legacy grandfathered app subscriptions only.","type":"object","deprecated":true,"properties":{}},"component_values":{"description":"Configurable component values for the subscription.","type":"array","items":{},"x-ref":"#/components/schemas/bill-subs-api_component_values"},"currency":{"description":"The monetary unit in which pricing information is displayed.","type":"string","example":"USD","readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_currency"},"current_period_end":{"description":"The end of the current period and also when the next billing is due.","type":"string","format":"date-time","example":"2014-03-31T12:20:00Z","readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_current_period_end"},"current_period_start":{"description":"When the current billing period started. May match initial_period_start if this is the first period.","type":"string","format":"date-time","example":"2014-05-11T12:20:00Z","readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_current_period_start"},"frequency":{"description":"How often the subscription is renewed automatically.","type":"string","example":"monthly","enum":[],"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_frequency"},"id":{"description":"Subscription identifier tag.","type":"string","example":"506e3185e9c882d175a2d0cb0093d9f2","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_schemas-identifier"},"price":{"description":"The price of the subscription that will be billed, in US dollars.","type":"number","example":20,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_price"},"rate_plan":{"description":"The rate plan applied to the subscription.","type":"object","properties":{},"x-ref":"#/components/schemas/bill-subs-api_rate_plan"},"state":{"description":"The state that the subscription is in.","type":"string","example":"Paid","enum":[],"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_state"},"zone":{"description":"A simple zone object. May have null properties if not a zone subscription.","type":"object","properties":{},"x-ref":"#/components/schemas/bill-subs-api_zone"}},"x-ref":"#/components/schemas/bill-subs-api_subscription-v2"},"key$":"subscriptions"},"user_is_on_session":{"type":"boolean","key$":"user_is_on_session"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/bill-subs-api_identifier"},"index$":0},{"name":"idemp_key","in":"query","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const bill_subs_api_bulk_account_subscription_ref01_ent = client.BillSubsApiBulkAccountSubscription()
    let bill_subs_api_bulk_account_subscription_ref01_data = setup.data.new.bill_subs_api_bulk_account_subscription['bill_subs_api_bulk_account_subscription_ref01']
    bill_subs_api_bulk_account_subscription_ref01_data['account_id'] = setup.idmap['account01']

    bill_subs_api_bulk_account_subscription_ref01_data = (await bill_subs_api_bulk_account_subscription_ref01_ent.create(bill_subs_api_bulk_account_subscription_ref01_data)).data()
    assert(null != bill_subs_api_bulk_account_subscription_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bill_subs_api_bulk_account_subscription/BillSubsApiBulkAccountSubscriptionTestData.json')

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
    ['bill_subs_api_bulk_account_subscription01','bill_subs_api_bulk_account_subscription02','bill_subs_api_bulk_account_subscription03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_BILL_SUBS_API_BULK_ACCOUNT_SUBSCRIPTION_ENTID': idmap,
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_DEVELOPER_PLATFORM_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_DEVELOPER_PLATFORM_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_BILL_SUBS_API_BULK_ACCOUNT_SUBSCRIPTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_DEVELOPER_PLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_DEVELOPER_PLATFORM_TEST_BILL_SUBS_API_BULK_ACCOUNT_SUBSCRIPTION_ENTID']
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
  

# CloudflareDeveloperPlatform SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CloudflareDeveloperPlatformUtility.registrar = ->(u) {
  u.clean = CloudflareDeveloperPlatformUtilities::Clean
  u.done = CloudflareDeveloperPlatformUtilities::Done
  u.make_error = CloudflareDeveloperPlatformUtilities::MakeError
  u.feature_add = CloudflareDeveloperPlatformUtilities::FeatureAdd
  u.feature_hook = CloudflareDeveloperPlatformUtilities::FeatureHook
  u.feature_init = CloudflareDeveloperPlatformUtilities::FeatureInit
  u.fetcher = CloudflareDeveloperPlatformUtilities::Fetcher
  u.make_fetch_def = CloudflareDeveloperPlatformUtilities::MakeFetchDef
  u.make_context = CloudflareDeveloperPlatformUtilities::MakeContext
  u.make_options = CloudflareDeveloperPlatformUtilities::MakeOptions
  u.make_request = CloudflareDeveloperPlatformUtilities::MakeRequest
  u.make_response = CloudflareDeveloperPlatformUtilities::MakeResponse
  u.make_result = CloudflareDeveloperPlatformUtilities::MakeResult
  u.make_point = CloudflareDeveloperPlatformUtilities::MakePoint
  u.make_spec = CloudflareDeveloperPlatformUtilities::MakeSpec
  u.make_url = CloudflareDeveloperPlatformUtilities::MakeUrl
  u.param = CloudflareDeveloperPlatformUtilities::Param
  u.prepare_auth = CloudflareDeveloperPlatformUtilities::PrepareAuth
  u.prepare_body = CloudflareDeveloperPlatformUtilities::PrepareBody
  u.prepare_headers = CloudflareDeveloperPlatformUtilities::PrepareHeaders
  u.prepare_method = CloudflareDeveloperPlatformUtilities::PrepareMethod
  u.prepare_params = CloudflareDeveloperPlatformUtilities::PrepareParams
  u.prepare_path = CloudflareDeveloperPlatformUtilities::PreparePath
  u.prepare_query = CloudflareDeveloperPlatformUtilities::PrepareQuery
  u.graphql_body = CloudflareDeveloperPlatformUtilities::GraphqlBody
  u.graphql_errors = CloudflareDeveloperPlatformUtilities::GraphqlErrors
  u.result_basic = CloudflareDeveloperPlatformUtilities::ResultBasic
  u.result_body = CloudflareDeveloperPlatformUtilities::ResultBody
  u.result_headers = CloudflareDeveloperPlatformUtilities::ResultHeaders
  u.transform_request = CloudflareDeveloperPlatformUtilities::TransformRequest
  u.transform_response = CloudflareDeveloperPlatformUtilities::TransformResponse
}

# CloudflareDeveloperPlatform SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudflareDeveloperPlatformFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudflareDeveloperPlatformBaseFeature.new
    when "test"
      CloudflareDeveloperPlatformTestFeature.new
    else
      CloudflareDeveloperPlatformBaseFeature.new
    end
  end
end

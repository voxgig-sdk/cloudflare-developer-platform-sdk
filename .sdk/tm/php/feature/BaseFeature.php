<?php
declare(strict_types=1);

// CloudflareDeveloperPlatform SDK base feature

class CloudflareDeveloperPlatformBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CloudflareDeveloperPlatformContext $ctx, array $options): void {}
    public function PostConstruct(CloudflareDeveloperPlatformContext $ctx): void {}
    public function PostConstructEntity(CloudflareDeveloperPlatformContext $ctx): void {}
    public function SetData(CloudflareDeveloperPlatformContext $ctx): void {}
    public function GetData(CloudflareDeveloperPlatformContext $ctx): void {}
    public function GetMatch(CloudflareDeveloperPlatformContext $ctx): void {}
    public function SetMatch(CloudflareDeveloperPlatformContext $ctx): void {}
    public function PrePoint(CloudflareDeveloperPlatformContext $ctx): void {}
    public function PreSpec(CloudflareDeveloperPlatformContext $ctx): void {}
    public function PreRequest(CloudflareDeveloperPlatformContext $ctx): void {}
    public function PreResponse(CloudflareDeveloperPlatformContext $ctx): void {}
    public function PreResult(CloudflareDeveloperPlatformContext $ctx): void {}
    public function PreDone(CloudflareDeveloperPlatformContext $ctx): void {}
    public function PreUnexpected(CloudflareDeveloperPlatformContext $ctx): void {}
}

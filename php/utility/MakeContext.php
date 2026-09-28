<?php
declare(strict_types=1);

// CloudflareDeveloperPlatform SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudflareDeveloperPlatformMakeContext
{
    public static function call(array $ctxmap, ?CloudflareDeveloperPlatformContext $basectx): CloudflareDeveloperPlatformContext
    {
        return new CloudflareDeveloperPlatformContext($ctxmap, $basectx);
    }
}

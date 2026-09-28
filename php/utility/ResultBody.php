<?php
declare(strict_types=1);

// CloudflareDeveloperPlatform SDK utility: result_body

class CloudflareDeveloperPlatformResultBody
{
    public static function call(CloudflareDeveloperPlatformContext $ctx): ?CloudflareDeveloperPlatformResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

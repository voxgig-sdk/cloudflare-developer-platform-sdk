<?php
declare(strict_types=1);

// CloudflareDeveloperPlatform SDK utility: result_headers

class CloudflareDeveloperPlatformResultHeaders
{
    public static function call(CloudflareDeveloperPlatformContext $ctx): ?CloudflareDeveloperPlatformResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

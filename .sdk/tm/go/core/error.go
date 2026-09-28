package core

type CloudflareDeveloperPlatformError struct {
	IsCloudflareDeveloperPlatformError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudflareDeveloperPlatformError(code string, msg string, ctx *Context) *CloudflareDeveloperPlatformError {
	return &CloudflareDeveloperPlatformError{
		IsCloudflareDeveloperPlatformError: true,
		Sdk:              "CloudflareDeveloperPlatform",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudflareDeveloperPlatformError) Error() string {
	return e.Msg
}

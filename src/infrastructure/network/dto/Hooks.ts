import type { NetworkRequest } from './NetworkRequest'
import type { NetworkResponse } from './NetworkResponse'

export type BeforeRequestHook = (
  request: NetworkRequest,
  options: object,
) => Request | Response | void | Promise<Request | Response | void>

export type BeforeRetryState = {
  request: NetworkRequest
  options: object
  error: Error
  retryCount: number
}
export type BeforeRetryHook = (
  options: BeforeRetryState,
) => typeof stop | void | Promise<typeof stop | void>
export type AfterResponseHook = (
  request: NetworkRequest,
  options: object,
  response: NetworkResponse,
) => Response | void | Promise<Response | void>
export type BeforeErrorHook = (error: Error) => Error | Promise<Error>

export type Hooks = {
  beforeRequest?: BeforeRequestHook[]
  beforeRetry?: BeforeRetryHook[]
  afterResponse?: AfterResponseHook[]
  beforeError?: BeforeErrorHook[]
}

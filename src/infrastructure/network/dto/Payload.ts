import type { Hooks } from './Hooks'
import type { RetryOptions } from './RetryOptions'

export default interface Payload<T> {
  data?: T
  headers?: [string, string][] | Record<string, string>
  params?: Record<string, string>
  hooks?: Hooks
  retry: RetryOptions | number
  url?: string
  baseUrl?: string
  onDownloadProgress?: string
}

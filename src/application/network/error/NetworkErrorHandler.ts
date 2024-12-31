import { NetworkErrorHandlerCode } from '@/application/network/error/enum/NetworkErrorHandlerCode'


export default class NetworkErrorHandler extends Error {
  readonly code: NetworkErrorHandlerCode
  readonly message: string

  constructor(code: NetworkErrorHandlerCode, message: string) {
    super(message)
    this.code = code
    this.message = message
  }
}

import type { CardServicesHandlerErrorCodes } from '@/modules/card/error/enum/CardServicesHandlerErrorCodes'

export default class CardServiceHandlerError extends Error {
  readonly code: CardServicesHandlerErrorCodes
  readonly message: string

  constructor(code: CardServicesHandlerErrorCodes, message: string) {
    super(message)
    this.code = code
    this.message = message
  }
}

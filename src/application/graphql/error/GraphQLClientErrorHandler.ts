import { GraphQLClientErrorHandlerCode } from '@/application/graphql/error/enum/GraphQLClientErrorHandlerCode'


export default class GraphQLClientErrorHandler extends Error {
  readonly code: GraphQLClientErrorHandlerCode
  readonly message: string

  constructor(code: GraphQLClientErrorHandlerCode, message: string) {
    super(message)
    this.code = code
    this.message = message
  }
}

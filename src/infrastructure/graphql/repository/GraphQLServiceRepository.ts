import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  type DocumentNode,
  type OperationVariables,
} from '@apollo/client/core'

// errors
import { GraphQLClientErrorHandlerCode } from '@/application/graphql/error/enum/GraphQLClientErrorHandlerCode'
import GraphQLClientErrorHandler from '@/application/graphql/error/GraphQLClientErrorHandler'

export default class GraphQLServiceRepository {
  private client: ApolloClient<unknown>

  constructor() {
    const httpLink = createHttpLink({
      uri: 'https://api.tcgdex.net/v2/graphql',
    })

    this.client = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
    })
  }

  async query<T>(query: DocumentNode, variables?: OperationVariables): Promise<T> {
    try {
      const response = await this.client.query({
        query,
        variables,
        notifyOnNetworkStatusChange: true,
      })

      return response.data
    } catch (error) {
      throw new GraphQLClientErrorHandler(
        GraphQLClientErrorHandlerCode.QUERY_ERROR,
        `GraphQL Query Error: ${error}`,
      )
    }
  }

  async mutate<T>(mutation: DocumentNode, variables?: Record<string, unknown>): Promise<T> {
    try {
      const response = await this.client.mutate({
        mutation,
        variables,
      })
      return response.data
    } catch (error) {
      throw new GraphQLClientErrorHandler(
        GraphQLClientErrorHandlerCode.MUTATION_ERROR,
        `GraphQL Mutation Error: ${error}`,
      )
    }
  }
}

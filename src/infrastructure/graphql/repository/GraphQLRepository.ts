import type { DocumentNode, OperationVariables } from "@apollo/client"

export interface GraphQLRepository {
 query<T>(query: DocumentNode, variables?: OperationVariables): Promise<T>
 mutate<T>(mutation: DocumentNode, variables?: Record<string, unknown>): Promise<T>
}

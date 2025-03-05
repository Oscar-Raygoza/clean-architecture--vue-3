import { ContainerModule } from 'inversify'
import type { interfaces } from 'inversify'

import graphQlTypes from "@/infrastructure/graphql/di/types"

// repository
import type { GraphQLRepository } from '@/infrastructure/graphql/repository/GraphQLRepository'
import GraphQLServiceRepository from '@/infrastructure/graphql/repository/GraphQLServiceRepository'

export default new ContainerModule((bind: interfaces.Bind) => {
  // repositories
  bind<GraphQLRepository>(graphQlTypes.graphQLClientRepository).to(
    GraphQLServiceRepository
  )
})

import { ContainerModule } from 'inversify'
import type { interfaces } from 'inversify'

import persistenceTypes from '@/infrastructure/persistence/di/types'

// repository
import type { PersistenceRepository } from '@/infrastructure/persistence/repository/PersistenceRepository'

import LocalStorageManagerStorage from '@/infrastructure/persistence/repository/LocalStorageManagerRepository'
import SessionStorageManagerStorage from '@/infrastructure/persistence/repository/SessionStorageManagerRepository'

export default new ContainerModule((bind: interfaces.Bind) => {
  // repositories
  bind<PersistenceRepository>(persistenceTypes.localStorageManagerRepository).to(LocalStorageManagerStorage)

  bind<PersistenceRepository>(persistenceTypes.sessionStorageManagerRepository).to(SessionStorageManagerStorage)
})

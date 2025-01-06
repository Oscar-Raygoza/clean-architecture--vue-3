import { ContainerModule } from 'inversify'
import type { interfaces } from 'inversify'

// types
import langTypes from '@/infrastructure/lang/di/types'
import type { PersistentStorageRepository } from '@/infrastructure/persistence/enum/PersistentStorageRepository'

// repositories
import { LangStorageRepository } from '@/infrastructure/lang/repository/LangStorageRepository'
import type { Langs } from '@/application/lang/storage/enum/Langs'

export default new ContainerModule((bind: interfaces.Bind) => {
  bind<PersistentStorageRepository<Langs>>(langTypes.langStorageRepository).to(LangStorageRepository)
})

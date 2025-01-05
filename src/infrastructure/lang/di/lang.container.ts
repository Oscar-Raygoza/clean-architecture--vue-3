import { ContainerModule } from 'inversify'
import type { interfaces } from 'inversify'

// types
import langTypes from '@/infrastructure/lang/di/types'
import type { DataObjectStorage } from '@/infrastructure/persistence/enum/DataObjectStorage'

// dao
import { LangStorageDAO } from '@/infrastructure/lang/dao/LangStorageDAO'
import type { Langs } from '@/application/lang/storage/enum/Langs'

export default new ContainerModule((bind: interfaces.Bind) => {
  // data objects
  bind<DataObjectStorage<Langs>>(langTypes.langStorageDAO).to(LangStorageDAO)
})

import { ContainerModule } from 'inversify'
import type { interfaces } from 'inversify'

// types
import themeTypes from '@/infrastructure/theme/di/types'
import type { DataObjectStorage } from '@/infrastructure/persistence/enum/DataObjectStorage'

// dao
import { ThemeStorageDAO } from '@/infrastructure/theme/dao/ThemeStorageDAO'
import type { Themes } from '@/application/theme/storage/enum/Themes'

export default new ContainerModule((bind: interfaces.Bind) => {
  // data objects
  bind<DataObjectStorage<Themes>>(themeTypes.themeStorageDAO).to(ThemeStorageDAO)
})

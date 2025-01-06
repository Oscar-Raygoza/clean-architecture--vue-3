import { ContainerModule } from 'inversify'
import type { interfaces } from 'inversify'

// types
import themeTypes from '@/infrastructure/theme/di/types'
import type { PersistentStorageRepository } from '@/infrastructure/persistence/enum/PersistentStorageRepository'

// repositories
import { ThemeStorageRepository } from '@/infrastructure/theme/repository/ThemeStorageRepository'
import type { Themes } from '@/application/theme/storage/enum/Themes'

export default new ContainerModule((bind: interfaces.Bind) => {
  bind<PersistentStorageRepository<Themes>>(themeTypes.themeStorageRepository).to(ThemeStorageRepository)
})

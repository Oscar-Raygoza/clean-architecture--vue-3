import { inject, injectable } from 'inversify'

// types
import persistenceTypes from '@/infrastructure/persistence/di/types'

import type { PersistentStorageRepository } from '@/infrastructure/persistence/enum/PersistentStorageRepository'
import type { PersistenceRepository } from '@/infrastructure/persistence/repository/PersistenceRepository'

import type { Themes } from '@/application/theme/storage/enum/Themes'
import { StorageThemeKeys } from '@/application/theme/storage/enum/StorageThemeKeys'

@injectable()
export class ThemeStorageRepository implements PersistentStorageRepository<Themes> {
  constructor(
    @inject(persistenceTypes.localStorageManagerRepository)
    private readonly storageManager: PersistenceRepository,
  ) { }

  get(): Themes {
    const storageTheme = this.storageManager.getItem<string>(StorageThemeKeys.THEME, '')

    return storageTheme as Themes
  }

  set(theme: Themes): void {
    if (theme) return this.storageManager.setItem(StorageThemeKeys.THEME, theme)

    this.storageManager.removeItem(StorageThemeKeys.THEME)
  }
}

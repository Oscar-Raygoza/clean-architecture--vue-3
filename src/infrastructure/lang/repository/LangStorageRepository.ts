import { inject, injectable } from 'inversify'

// types
import persistenceTypes from '@/infrastructure/persistence/di/types'

import type { PersistentStorageRepository } from '@/infrastructure/persistence/enum/PersistentStorageRepository'
import type { PersistenceRepository } from '@/infrastructure/persistence/repository/PersistenceRepository'

import { Langs } from '@/application/lang/storage/enum/Langs'
import { StorageLangKeys } from '@/application/lang/storage/enum/StorageLangKeys'

@injectable()
export class LangStorageRepository implements PersistentStorageRepository<Langs> {
  constructor(
    @inject(persistenceTypes.localStorageManagerRepository)
    private readonly storageManager: PersistenceRepository,
  ) { }

  get(): Langs {
    const storageLang = this.storageManager.getItem<string>(StorageLangKeys.LANG_MODE, Langs.EN)

    return storageLang as Langs
  }

  set(lang: Langs): void {
    if (lang) return this.storageManager.setItem(StorageLangKeys.LANG_MODE, lang)

    this.storageManager.removeItem(StorageLangKeys.LANG_MODE)
  }
}

import { container } from '@/container'
import langTypes from '@/infrastructure/lang/di/types'

import { Langs } from '@/application/lang/storage/enum/Langs'
import type { PersistentStorageRepository } from '@/infrastructure/persistence/enum/PersistentStorageRepository'

export function useLanguageStorage() {
  const langStorageRepository = container.get<PersistentStorageRepository<Langs>>(
    langTypes.langStorageRepository,
  )

  const initLanguageSotarge = () => {
    langStorageRepository.set(langStorageRepository.get())
  }

  const getStoredLanguage = (): string => {
    return langStorageRepository.get()
  }

  const setStoredLanguage = (lang: Langs) => {
    langStorageRepository.set(lang)
  }

  return {
    initLanguageSotarge,
    getStoredLanguage,
    setStoredLanguage,
  }
}

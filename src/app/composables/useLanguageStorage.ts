import { container } from '@/container'
import langTypes from '@/infrastructure/lang/di/types'

import { Langs } from '@/application/lang/storage/enum/Langs'
import type { DataObjectStorage } from '@/infrastructure/persistence/enum/DataObjectStorage'
import { onMounted } from 'vue'

export function useLanguageStorage() {
  const langStorageDAO = container.get<DataObjectStorage<Langs>>(langTypes.langStorageDAO)

  onMounted(() => {
    langStorageDAO.set(langStorageDAO.get())
  })

  const getStoredLanguage = (): string => {
    return langStorageDAO.get()
  }

  const setStoredLanguage = (lang: Langs) => {
    langStorageDAO.set(lang)
  }

  return {
    getStoredLanguage,
    setStoredLanguage,
  }
}

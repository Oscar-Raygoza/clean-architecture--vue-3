import { createI18n } from 'vue-i18n'

import { Langs } from '@/application/lang/storage/enum/Langs'
import { useLanguageStorage } from "@/app/composables/useLanguageStorage"

const { getStoredLanguage } = useLanguageStorage()

const locales = [
  { code: Langs.ES, name: 'spanish' },
  { code: Langs.EN, name: 'english' },
]

const i18n = createI18n({
  legacy: false,
  locales: locales,
  defaultLocale: getStoredLanguage(),
  fallbackLocale: getStoredLanguage(),
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  sync: true,
  missingWarn: true,
  globalInjection: true
})

export default i18n

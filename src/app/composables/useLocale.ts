import { useI18n } from 'vue-i18n'

import type { Langs } from '@/application/lang/storage/enum/Langs'
import { useLanguageStorage } from '@/app/composables/useLanguageStorage'
import { computed, onMounted } from 'vue'

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

export function useLocale(messages: Translations) {
  const { setStoredLanguage, getStoredLanguage, initLanguageSotarge } = useLanguageStorage()

  const i18n = useI18n({
    messages,
  })

  const { locale } = useI18n()

  onMounted(() => {
    initLanguageSotarge();
    changeLocale(getStoredLanguage() as Langs)
  })


  const currentLocale = computed({
    get: () => getStoredLanguage() as Langs,
    set: (locale: Langs) => {
      changeLocale(locale)
    },
  })

  const changeLocale = (lang: Langs) => {
    locale.value = lang

    setStoredLanguage(lang)

    document.querySelector('html')?.setAttribute('lang', lang)
  }

  return {
    availableLocales: computed(() => i18n.availableLocales),
    changeLocale,
    currentLocale,
    t: i18n.t,
  }
}

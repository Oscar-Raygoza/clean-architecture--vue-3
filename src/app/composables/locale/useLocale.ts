import { computed, onMounted } from 'vue'

import { useI18n } from 'vue-i18n'

import type { Langs } from '@/application/lang/storage/enum/Langs'
import type { Translations } from '@/application/lang/storage/dto/Translations'

import { useLanguageStorage } from '@/app/composables/locale/useLanguageStorage'

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
    d: i18n.d,
    t: i18n.t,
    te: i18n.te,
    tm: i18n.tm,
  }
}

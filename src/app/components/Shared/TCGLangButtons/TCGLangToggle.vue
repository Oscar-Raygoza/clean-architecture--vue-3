<template>
  <TCGSelector
    id="language-selector"
    :options="languageOptions"
    v-model="langSelected"
    class="rounded-lg p-2 text-xl align-center font-semibold transition-colors duration-200 hover:bg-brand-primary-light-lighter dark:hover:bg-gray-700"
  >
    <template #default>
      <TCGIcon
        name="lang"
        class="inline-block text-default-dark cursor-pointer dark:text-accent-light"
        :size="20"
      />
    </template>
  </TCGSelector>
</template>

<script setup lang="ts">
import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'
import TCGSelector from '@/app/components/Shared/TCGSelector/TCGSelector.vue'

// i18n
import { useLocale } from '@/app/composables/locale/useLocale'
import messages from '@/app/locales/shared/shared.lang'
import type { Langs } from '@/application/lang/storage/enum/Langs'
import { computed, ref } from 'vue'
const { t, currentLocale, availableLocales } = useLocale(messages)

const langSelected = ref<Langs>(currentLocale as unknown as Langs)

const languageOptions = computed(() => {
  return availableLocales.value.map((lang) => {
    return { value: lang, label: t(`${lang}`) }
  })
})
</script>

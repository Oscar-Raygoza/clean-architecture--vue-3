<template>
  <form @submit="onSubmit">
    <TCGInput v-model="form.querySearch" type="text" autofocus placeholder="Search for a card">
      <template #prepend>
        <TCGIcon name="search" class="h-4 w-4 text-neutral-dark dark:text-default-light" />
      </template>
      <template #append>
        <TCGIcon
          name="filter"
          class="h-4 w-4 text-neutral-light dark:text-default-light hover:text-neutral-dark transition-colors !cursor-not-allowed opacity-50"
        />
      </template>
    </TCGInput>
  </form>
</template>

<script setup lang="ts">
import { reactive, defineEmits, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

// constants
import constants from '@/infrastructure/config/constants'

import TCGInput from '@/app/components/Shared/TCGInputs/TCGInput.vue'
import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'


interface InputSearchProps {
  value: string
}

const props = withDefaults(defineProps<InputSearchProps>(), {
  value: '',
})
onMounted(() => {
  form.querySearch = props.value
})

// head
useHead({
  title: 'TCG Pocket - Search',
  meta: constants.META_PAGE!
})

// state
const form = reactive({
  querySearch: '',
})

// emits
const emit = defineEmits<{
  'open-filters': [void]
  'on-search': [string]
}>()

// methods
function openFilter() {
  emit('open-filters')
}

function onSubmit(event: Event) {
  event.preventDefault()
  emit('on-search', form.querySearch)
}
</script>

<template>
  <form class="w-[50%]">
    <TCGInput v-model="form.querySearch" type="text" autofocus placeholder="Search for a card">
      <template #prepend>
        <TCGIcon name="search" class="h-4 w-4 text-neutral-light" />
      </template>
      <template #append>
        <TCGIcon
          name="filter"
          class="h-4 w-4 text-neutral-light cursor-pointer hover:text-neutral-dark transition-colors"
          @click="openFilter"
        />
      </template>
    </TCGInput>
  </form>
</template>

<script setup lang="ts">
import { reactive, defineEmits } from 'vue'

import TCGInput from '@/app/components/Shared/TCGInputs/TCGInput.vue'
import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'
import TCGBadge from '@/app/components/Shared/TCGBadge/TCGBadge.vue'

const emit = defineEmits<{
  'open-filters': [void]
}>()

// state
const form = reactive({
  querySearch: '',
})

// methods
function openFilter() {
  emit('open-filters')
}
</script>

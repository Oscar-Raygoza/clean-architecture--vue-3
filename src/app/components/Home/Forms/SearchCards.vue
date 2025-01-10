<template>
  <form class="w-[50%]">
    <TCGInput v-model="form.querySearch" type="text" autofocus placeholder="Search for a card">
      <template #prepend>
        <TCGIcon name="search" class="h-4 w-4 text-neutral-light dark:text-neutral-dark" />
      </template>
      <template #append>
        <TCGIcon
          name="filter"
          class="h-4 w-4 text-neutral-light cursor-pointer hover:text-gray-700 transition-colors"
        />
      </template>
    </TCGInput>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import TCGInput from '@/app/components/Shared/TCGInputs/TCGInput.vue'
import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'
import TCGBadge from '@/app/components/Shared/TCGBadge/TCGBadge.vue'

// state
const form = reactive({
  querySearch: '',
})
</script>

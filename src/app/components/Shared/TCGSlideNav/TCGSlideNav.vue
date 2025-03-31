<template>
  <div class="container mx-auto px-4 py-4 flex items-center">
    <button @click="goBack" class="p-2 rounded-full hover:bg-slate-800 transition-colors">
      <TCGIcon name="arrow-left" class="h-6 w-6 text-neutral-dark dark:text-default-light" />
    </button>
    <h1 class="ml-4 text-xl font-semibold">{{ props.title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'

interface SlideNavProps {
  title: string
}

const props = withDefaults(defineProps<SlideNavProps>(), {
  title: 'Back',
})

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

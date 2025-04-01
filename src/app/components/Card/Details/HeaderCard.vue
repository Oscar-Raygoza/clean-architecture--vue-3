<template>
  <div>
    <div class="flex items-center gap-2 justify-between">
      <div>
        <span class="dark:text-accent-light text-error-dark font-bold">Pokémon</span>
        <span class="dark:text-neutral-dark-lighter text-neutral-dark-dark">•</span>
        <span class="dark:text-neutral-dark-lighter text-neutral-dark-dark font-bold">{{ rarity }}</span>
      </div>
      <div>
        <TCGIcon :src="useEnergyIcon(props.type)" class="h-8 w-8 inline mx-4 mb-4" />
        <TCGTitle variant="primary" class="!text-default-dark dark:!text-default-light">
          HP <span class="dark:text-neutral-dark-lighter text-neutral-dark-dark">•</span> {{ hp }}
        </TCGTitle>
      </div>
    </div>
    <TCGTitle
      variant="primary"
      class="from-gradient-light-from to-gradient-light-to dark:from-gradient-dark-from dark:to-gradient-dark-to bg-gradient-radial-light dark:bg-gradient-radial-dark gradient-text"
    >
      {{ props.name }}
    </TCGTitle>
    <div class="mt-1 flex items-start gap-2">
      <span>{{ props.type }} Pokémon</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import TCGTitle from '@/app/components/Shared/TCGTitle/TCGTitle.vue'
import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'
import { useEnergyIcon } from '@/app/composables/useEnergyIcon'

export interface HeaderCardDetailsProps {
  name: string
  rarity: string
  type: string
  hp: string
}

const props = withDefaults(defineProps<HeaderCardDetailsProps>(), {})
</script>

<script setup lang="ts">
import Card from '@/domain/card/entities/Card'

const props = defineProps<{
  card: InstanceType<typeof Card>
}>()
</script>

<template>
  <div class="relative w-[240px] h-auto rounded-xl overflow-hidden shadow-xl cursor-pointer">
    <img :src="props.card?.image" fill class="object-cover" priority />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCardStore } from '../stores/Card/CardStore'

const cardsStore = useCardStore()

onMounted(async () => {
  await cardsStore.getAllCards()
})
</script>

<template>
  <main>
    <img :src="cardsStore?.cards[0]?.image" width="300px" style="border-radius: 5px" />
  </main>
</template>

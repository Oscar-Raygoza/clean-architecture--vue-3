<script setup lang="ts">
import { onMounted } from 'vue'
import { useCardStore } from '../stores/Card/CardStore'

const cardsStore = useCardStore()

onMounted(async () => {
  await cardsStore.getAllCards()
})
</script>

<template>
  <h1 className="text-3xl font-bold underline !uppercase">Hello world!</h1>
  <main>
    <img :src="cardsStore?.cards[0]?.image" width="300px" style="border-radius: 5px" />
  </main>
</template>

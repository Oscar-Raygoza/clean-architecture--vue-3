<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useCardStore } from '../stores/Card/CardStore'

const cardsStore = useCardStore()

onMounted(async () => {
  await cardsStore.getAllCards()
})

const cards = computed(() => cardsStore.cards)
</script>

<template>
  <main>
    <h1 className="text-3xl font-bold underline !uppercase">Hello world!</h1>

    <div v-for="card in cards" :key="card.id" class="container flex flex-row ">
      <img :src="card.image" width="300px" style="border-radius: 5px" class="basis-1/3" />
    </div>
  </main>
</template>

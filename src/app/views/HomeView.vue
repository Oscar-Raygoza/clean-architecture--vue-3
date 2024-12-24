<script setup lang="ts">
import { onMounted, computed, reactive } from 'vue'

// components
import TCGTitle from '@/app/components/Shared/TCGTitle/TCGTitle.vue'
import TCGInput from '@/app/components/Shared/TCGInputs/TCGInput.vue'

// stores
import { useCardStore } from '../stores/Card/CardStore'

const cardsStore = useCardStore()

onMounted(async () => {
  await cardsStore.getRandomCards()
})

const form = reactive({
  querySearch: '',
})

const cards = computed(() => cardsStore.cards)
</script>

<template>
  <section id="main-search-page">
    <div class="flex justify-center items-center pt-24 flex-col">
      <TCGTitle variant="primary"> Pokémon TCG Guru </TCGTitle>
      <TCGTitle variant="secondary"> The Ultimate Pokémon Card Database </TCGTitle>
    </div>
    <div class="flex justify-center items-center pt-10">
      <form class="w-[50%]">
        <TCGInput
          id="search"
          v-model="form.querySearch"
          placeholder="Search for a card"
          autofocus
        ></TCGInput>
      </form>
    </div>
    <div class="flex justify-center items-center pt-10 flex-col">
      <TCGTitle variant="secondary">
        Try "venusaur" or "subtypes:mega" or simply Browse By Set</TCGTitle
      >
    </div>

    <section id="container-random-cards">
      <div class=" w-full max-w-4xl mx-auto h-[500px] flex justify-center items-center">
        <div v-for="card in cards" :key="card.id" class="haven:my-12">
          <div class="relative w-[240px] h-[320px] rounded-xl overflow-hidden shadow-xl translate-y-1.5 mx-3">
            <img :src="card?.image" fill class="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<template>
  <section class="flex justify-center items-center flex-col mt-15">
    <img src="/src/app/assets/static/gifs/pokemon.gif" alt="No cards found" class="w-1/2 block" />

    <TCGTitle
      variant="secondary"
      class="!text-default-dark dark:!text-default-light !text-xl !font-semibold mt-5"
    >
      <TCGIcon
        name="alert"
        class="h-4 w-4 text-neutral-dark dark:text-default-light inline mx-2 mb-1"
      />
      {{ props.subtitle }}
    </TCGTitle>
  </section>
</template>

<script setup lang="ts">
export interface CardsNotFoundProps {
  subtitle?: string
}

const props = withDefaults(defineProps<CardsNotFoundProps>(), {
  subtitle: 'Cards not found, try another search',
})
</script>

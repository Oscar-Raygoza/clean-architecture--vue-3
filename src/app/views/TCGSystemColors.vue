<template>
  <div class="min-h-screen bg-background-light-default dark:bg-background-dark-default text-neutral-light-default dark:text-neutral-dark-default p-8">
    <header class="mb-8 text-center">
      <h1 class="text-3.5xl font-bold">Sistema de Colores</h1>
      <button
        class="mt-4 px-4 py-2 rounded bg-accent-light-default dark:bg-accent-dark-default text-white"
      >
        Alternar Modo
      </button>
    </header>

    <!-- Sección de Colores -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Paleta de Colores</h2>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
        <!-- Ejemplo de uso con colores de marca -->
        <div
          v-for="(color, key) in colors.brand"
          :key="key"
          class="flex flex-col items-center justify-center"
        >
          <div
            :class="color.class"
            class="w-16 h-16 rounded"
          ></div>
          <p class="mt-2 text-sm font-medium">{{ key }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const colors = reactive({
  brand: {
    primary: { class: "bg-brand-primary-light dark:bg-brand-primary-dark" },
    secondary: { class: "bg-brand-secondary-light dark:bg-brand-secondary-dark" },
    accent: { class: "bg-accent-light dark:bg-accent-dark" },
  },
  success: { class: "bg-success-light" },
  warning: { class: "bg-warning-light" },
  error: { class: "bg-error-light" },
  neutral: { class: "bg-neutral-light" },
});
</script>

<style>
/* Agregar estilos personalizados si es necesario */
</style>

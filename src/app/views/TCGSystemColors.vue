<template>
  <div class="card w-full h-screen rounded-lg bg-background-light dark:bg-background-dark mb-28 mx-auto px-5 py-3">
    <div class="card-header p-6">
      <div class="flex justify-center items-center pt-10 flex-col">
        <TCGTitle variant="primary"> TCG Color System </TCGTitle>
        <TCGTitle variant="secondary"> Design Color System </TCGTitle>
      </div>
    </div>
    <div class="card-content p-6 mt-10 flex container mx-auto px-5 py-3 fflex flex-wrap justify-start justify-items-center">
      <div v-for="(section, key) in designThemeConfig" :key="key" class="space-y-4 flex flex-col xl:w-1/3 md:w-1/2 mt-10">
        <div>
          <h3 class="text-lg font-semibold text-default-dark dark:text-default-light">
            {{ section.title }}
          </h3>
          <p class="text-sm text-neutral-light dark:text-neutral-dark-lighter">
            {{ section.description }}
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="color in section.colors" :key="color.name" class="space-y-2">
            <div class="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
              <div :class="[color.light, 'h-12']"></div>
              <div :class="[color.base, 'h-12']"></div>
              <div :class="[color.dark, 'h-12']"></div>
            </div>
            <div class="text-sm font-medium text-default-dark dark:text-default-light">
              {{ color.name }}
            </div>
            <div class="text-xs text-neutral-light dark:text-neutral-dark-lighter">
              {{ color.base.replace('bg-', '') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TCGTitle from '@/app/components/Shared/TCGTitle/TCGTitle.vue'

const designThemeConfig = {
  primary: {
    title: 'Primary Colors',
    colors: [
      {
        name: 'primary',
        base: 'bg-brand-primary-light dark:bg-brand-primary-dark',
        light: 'bg-brand-primary-light-lighter dark:bg-brand-primary-dark-lighter',
        dark: 'bg-brand-primary-light-dark dark:bg-brand-primary-dark-dark',
      },
    ],
    description: 'Main brand color, inspired by Water energy',
  },
  secondary: {
    title: 'Secondary Colors',
    colors: [
      {
        name: 'secondary',
        base: 'bg-brand-secondary-light dark:bg-brand-secondary-dark',
        light: 'bg-brand-secondary-light-lighter dark:bg-brand-secondary-dark-lighter',
        dark: 'bg-brand-secondary-light-dark dark:bg-brand-secondary-dark-dark',
      },
      {
        name: 'accent',
        base: 'bg-accent-light dark:bg-accent-dark',
        light: 'bg-accent-light-lighter dark:bg-accent-dark-lighter',
        dark: 'bg-accent-light-dark dark:bg-accent-dark-dark',
      },
    ],
    description: 'Supporting colors from Fire and Lightning energies',
  },
  tertiary: {
    title: 'Tertiary Colors',
    colors: [
      {
        name: 'success',
        base: 'bg-success-light dark:bg-success-dark',
        light: 'bg-success-light-lighter dark:bg-success-dark-lighter',
        dark: 'bg-success-light-dark dark:bg-success-dark-dark',
      },
      {
        name: 'warning',
        base: 'bg-warning-light dark:bg-warning-dark',
        light: 'bg-warning-light-lighter dark:bg-warning-dark-lighter',
        dark: 'bg-warning-light-dark dark:bg-warning-dark-dark',
      },
      {
        name: 'error',
        base: 'bg-error-light dark:bg-error-dark',
        light: 'bg-error-light-lighter dark:bg-error-dark-lighter',
        dark: 'bg-error-light-dark dark:bg-error-dark-dark',
      },
    ],
    description: 'System and feedback colors',
  },
  neutral: {
    title: 'Neutral Colors',
    colors: [
      {
        name: 'neutral',
        base: 'bg-neutral-light dark:bg-neutral-dark',
        light: 'bg-neutral-light-lighter dark:bg-neutral-dark-lighter',
        dark: 'bg-neutral-light-dark dark:bg-neutral-dark-dark',
      },
      {
        name: 'background',
        base: 'bg-background-light dark:bg-background-dark',
        light: 'bg-background-light-lighter dark:bg-background-dark-lighter',
        dark: 'bg-background-light-dark dark:bg-background-dark-dark',
      },
    ],
    description: 'Interface and background colors',
  },
  default: {
    title: 'Default Base Colors',
    colors: [
      {
        name: 'dark',
        base: 'bg-default-dark dark:bg-default-dark',
        light: 'bg-default-dark-lighter dark:bg-default-dark-lighter',
        dark: ''
      },
      {
        name: 'light',
        base: 'bg-default-light dark:bg-default-light',
        light: 'bg-default-light-lighter dark:bg-default-light-lighter',
        dark: ''
      },
    ],
    description: 'Color default white or black texts',
  },
}
</script>

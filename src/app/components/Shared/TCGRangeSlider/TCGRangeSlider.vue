<script lang="ts" setup>
import { defineProps, withDefaults, onMounted } from 'vue'

// Tipos para las propiedades
interface Range {
  min: number
  max: number
}

interface Pips {
  mode: string
  values: number[]
  density: number
}

interface CssClasses {
  target: string
  base: string
  origin: string
  handle: string
  connects: string
  connect: string
  touchArea: string
  tooltip: string
  pips: string
  value: string
  marker: string
}
</script>

<template>
  <h1>Example</h1>

  <div
    :data-range-slider="{
      start: 50,
      connect: 'lower',
      range: {
        min: 0,
        max: 100,
      },
    }"
  ></div>
</template>

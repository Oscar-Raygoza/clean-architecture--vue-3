<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  id: string
  label?: string
  options: Array<{ value: string | number; label: string; hidden?: boolean }>
  modelValue?: string | number
}>()

const emit = defineEmits(['update:modelValue'])

const internalValue = ref<string | number>(props.modelValue ?? '')

watch(
  () => props.modelValue,
  (value) => {
    internalValue.value = value ?? ''
  },
)

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <div class="selector">
    <label v-if="label" :for="id" class="selector-label">{{ label }}</label>
    <div class="selector-container">
      <slot name="default" />

      <select :id="id" v-model="internalValue" class="selector-dropdown dark:text-default-light">
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :hidden="option.hidden"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.selector-dropdown {
  padding: 8px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  outline: none;
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-color: transparent;
}
</style>

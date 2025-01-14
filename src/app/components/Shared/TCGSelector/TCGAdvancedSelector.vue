<script setup lang="ts">
interface Option {
  value: string
  label: string
}

interface Props {
  options: Option[]
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  modelValue: '',
  placeholder: 'Select an option',
  disabled: false,
  label: '',
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const handleSelect = (event: Event) => {
  const target = event.target as HTMLSelectElement

  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="select-wrapper">
    <label v-if="props.label" class="select-label">{{ props.label }}</label>
    <select
      :value="modelValue"
      class="select appearance-none w-full"
      :aria-label="props.label || 'select'"
      :disabled="props.disabled"
      @change="handleSelect"
    >
      <option disabled>{{ props.placeholder }}</option>
      <option v-for="option in props.options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.select-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.select-label {
  font-size: 0.875rem;
  font-weight: 500;
}

.select {
  padding: 0.5rem;
  border-radius: 0.375rem;
  width: 100%;
}

.select:disabled {
  cursor: not-allowed;
}
</style>

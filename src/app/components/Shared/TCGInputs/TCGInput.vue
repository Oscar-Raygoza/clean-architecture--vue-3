<template>
  <div class="w-full">
    <TCGLabel :for="props.id" v-if="props.label">{{ props.label }}</TCGLabel>
    <div>
      <input
        v-bind="$attrs"
        :placeholder="props.placeholder || props.label"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-dark leading-tight focus:outline-none focus:shadow-outline"
        :class="{
          'border-2 border-red-600': props.error,
          'border-2 border-green-600': props.success,
          'border-2 border-blue-600': props.info,
          'border-2 border-yellow-400': props.warning,
        }"
        :value="modelValue"
        @input="updateInput"
      />
    </div>
    <FormError>{{ props.error }}</FormError>
  </div>
</template>

<script setup lang="ts">
// components
import TCGLabel from '@/app/components/Shared/TCGLabel/TCGLabel.vue'

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  success: Boolean,
  info: Boolean,
  warning: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const updateInput = ($event: Event) => {
  const target = $event.target as HTMLInputElement

  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="block text-sm font-medium mb-2">{{ label }}</label>
    <div class="relative">
      <div
        v-if="$slots.prepend"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <slot name="prepend" />
      </div>
      <input
        :id="props.id"
        :type="props.type"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :required="props.required"
        :name="props.name"
        :autocomplete="props.autocomplete"
        :class="[
          'w-full bg-transparent border-neutral-light-lighter appearance-none border-b-2 py-4 px-3 text-neutral-dark leading-tight',
          'focus:border-brand-primary-light dark:focus:border-brand-primary-dark focus:outline-none',
          { 'opacity-50 cursor-not-allowed': disabled },
          { 'pl-10': $slots.prepend },
          { 'pr-10': $slots.append },
        ]"
        @input="onInput"
        @blur="onBlur"
        @focus="onFocus"
      />
      <div v-if="$slots.append" class="absolute inset-y-0 right-0 pr-3 flex items-center">
        <slot name="append" />
      </div>
    </div>
    <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
    <p v-else-if="hint" class="mt-1 text-sm text-gray-500">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  type?: string
  label?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  name?: string
  id?: string
  autocomplete?: string
  error?: string
  hint?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  required: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const onBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const onFocus = (event: FocusEvent) => {
  emit('focus', event)
}
</script>

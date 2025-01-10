<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import TCGTitle from '@/app/components/Shared/TCGTitle/TCGTitle.vue'
import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'

interface Props {
  modelValue: boolean
  position?: 'start' | 'end' | 'top' | 'bottom'
  title?: string
  width?: number
  closeOnClickOutside?: boolean
  closeOnEsc?: boolean
  showCloseButton?: boolean
  drawerClass?: string | string[] | Record<string, boolean>
}

const props = withDefaults(defineProps<Props>(), {
  position: 'start',
  title: '',
  width: 600,
  closeOnClickOutside: true,
  closeOnEsc: true,
  showCloseButton: true,
  drawerClass: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  open: []
  close: []
}>()

const isVisible = ref(props.modelValue)

watch(
  () => props.modelValue,
  (value) => {
    isVisible.value = value

    if (isVisible.value) emit('open')

    else emit('close')
  },
)

// methods
const close = () => {
  emit('update:modelValue', false)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (props.closeOnEsc && event.key === 'Escape' && isVisible.value) {
    close()
  }
}

const handleClickOutside = () => {
  if (props.closeOnClickOutside && isVisible.value) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('mousedown', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 z-40" aria-hidden="true" />
    </Transition>

    <Transition :name="props.position === 'start' ? 'slide-left' : 'slide-right'">
      <div
        v-if="isVisible"
        role="dialog"
        aria-modal="true"
        :class="[
          'fixed top-0 bottom-0  z-50 flex flex-col drawer max-w-full',
          props.position === 'start' ? 'left-0' : 'right-0',
          props.drawerClass,
        ]"
        :style="{ width: `${props.width}px` }"
      >
        <header class="flex items-center justify-between p-4 drawer-header">
          <TCGTitle variant="secondary" uppercase>{{ props.title }}</TCGTitle>
          <button
            v-if="props.showCloseButton"
            @click="close"
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Close drawer"
          >
            <span class="sr-only">Close</span>
            <TCGIcon name="close" />
          </button>
        </header>

        <div class="flex-1 overflow-y-auto p-4">
          <slot name="body" />
        </div>

        <footer v-if="$slots.footer" class="p-4">
          <slot name="footer" />
        </footer>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>

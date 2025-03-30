<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Card from '@/domain/card/entities/Card'

const props = defineProps<{
  card: InstanceType<typeof Card>
}>()

const cardElement = ref<HTMLElement>()
const glowRef = ref<HTMLElement>()

const SCALE_FACTOR = 1.07
const ROTATION_SENSITIVITY = 0.05
const GLOW_OPACITY_BRIGHT = '55'
const GLOW_OPACITY_DARK = '0f'

let bounds: DOMRect
let isActive = false

const rotateToMouse = (event: MouseEvent) => {
  if (!cardElement.value || !bounds || !glowRef.value || !isActive) return

  const mouseX = event.clientX
  const mouseY = event.clientY

  const centerX = bounds.width / 2
  const centerY = bounds.height / 2
  const offsetX = mouseX - bounds.x - centerX
  const offsetY = mouseY - bounds.y - centerY

  const distance = Math.sqrt(offsetX**2 + offsetY**2)

  cardElement.value.style.transform = `
    scale3d(${SCALE_FACTOR}, ${SCALE_FACTOR}, ${SCALE_FACTOR})
    rotate3d(
      ${offsetY * ROTATION_SENSITIVITY},
      ${-offsetX * ROTATION_SENSITIVITY},
      0,
      ${Math.log(distance) * 2}deg
    )
  `

  glowRef.value.style.backgroundImage = `
    radial-gradient(
      circle at
      ${offsetX * 2 + centerX}px
      ${offsetY * 2 + centerY}px,
      #ffffff${GLOW_OPACITY_BRIGHT},
      #000000${GLOW_OPACITY_DARK}
    )
  `
}

const handleMouseEnter = () => {
  if (!cardElement.value) return

  bounds = cardElement.value.getBoundingClientRect()
  isActive = true
  document.addEventListener('mousemove', rotateToMouse)
}

const handleMouseLeave = () => {
  if (!cardElement.value || !glowRef.value) return

  isActive = false
  document.removeEventListener('mousemove', rotateToMouse)

  cardElement.value.style.transform = ''
  glowRef.value.style.backgroundImage = ''
}

onMounted(() => {
  if (cardElement.value) {
    cardElement.value.addEventListener('mouseenter', handleMouseEnter)
    cardElement.value.addEventListener('mouseleave', handleMouseLeave)
  }
})

onUnmounted(() => {
  document.removeEventListener('mousemove', rotateToMouse)

  if (cardElement.value) {
    cardElement.value.removeEventListener('mouseenter', handleMouseEnter)
    cardElement.value.removeEventListener('mouseleave', handleMouseLeave)
  }
})
</script>

<template>
  <div
    ref="cardElement"
    class="card-container"
  >
    <img
      :alt="`${props.card?.name} pokemon`"
      :src="props.card?.image"
      class="card-image"
    />
    <div ref="glowRef" class="card-glow" />
  </div>
</template>

<style scoped>
.card-container {
  position: relative;
  width: 240px;
  height: 320px;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  perspective: 1500px;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  transition-duration: 300ms;
  transform: rotate3d(0, 0, 0, 0deg);
}

.card-container:hover {
  transition-duration: 150ms;
  box-shadow: 0 5px 20px 5px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-glow {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent);
  pointer-events: none;
}
</style>

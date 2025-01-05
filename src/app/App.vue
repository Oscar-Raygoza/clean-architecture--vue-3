<template>
 <main>
    <transition name="fade" mode="out-in">
      <router-view v-slot="{ Component }" >
        <component :is="Component" />
      </router-view>
    </transition>
  </main>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

body * {
  @apply transition-colors duration-200;
}
</style>

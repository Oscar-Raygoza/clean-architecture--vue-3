<template>
  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component">
        <template #default="props">
          <transition name="fade" mode="out-in">
            <slot v-bind="props" />
          </transition>
        </template>
      </component>
    </router-view>
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
  @apply transition-colors duration-100;
}
</style>

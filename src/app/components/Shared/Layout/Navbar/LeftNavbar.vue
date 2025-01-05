<script setup lang="ts">
import TCGLangToggle from '@/app/components/Shared/TCGLangButtons/TCGLangToggle.vue'
import TCGThemeToggle from '@/app/components/Shared/TCGThemeButtons/TCGThemeToggle.vue'
</script>

<template>
  <div
    class="bg-default-light dark:bg-default-dark px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between"
  >
    <nav class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
      <a
        class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 sm:h-6 sm:w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          />
        </svg>
      </a>
      <!-- Active: bg-gray-800 text-white, Not active: text-white/50 -->
      <a class="bg-gray-800 text-white p-4 inline-flex justify-center rounded-md" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 sm:h-6 sm:w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
          />
        </svg>
      </a>
      <a
        class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 sm:h-6 sm:w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </nav>
    <div class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
      <a
        class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
        href="#"
      >
        <TCGThemeToggle />
      </a>
      <a
        class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
        href="#"
      >
        <TCGLangToggle />
      </a>
    </div>
  </div>
</template>

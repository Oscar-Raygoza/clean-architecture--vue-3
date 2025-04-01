<template>
  <div class="card-details-skeleton w-full">
    <!-- Header section (Pokémon name, type, HP) -->
    <div class="mb-6">
      <div class="flex items-center gap-1">
        <div class="w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        <div class="mx-1 text-gray-400 dark:text-gray-500">•</div>
        <div class="w-20 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>
      <div class="mt-2">
        <div class="w-48 h-10 bg-blue-200 dark:bg-blue-800 rounded animate-pulse"></div>
      </div>
      <div class="mt-2">
        <div class="w-28 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>

    <!-- Stats section -->
    <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm dark:shadow-gray-900/30 mb-6">
      <div class="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
      <div class="grid grid-cols-2 gap-4">
        <!-- Type -->
        <div>
          <div class="w-12 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
          <div class="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
        <!-- Weakness -->
        <div>
          <div class="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
          <div class="w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
        <!-- Retreat cost -->
        <div>
          <div class="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
          <div class="flex items-center gap-1">
            <div class="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          </div>
        </div>
        <!-- Expansion -->
        <div>
          <div class="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
          <div class="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    </div>

    <!-- Attacks section -->
    <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm dark:shadow-gray-900/30 mb-6">
      <div class="w-20 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>

      <!-- First attack -->
      <div class="space-y-4">
        <div class="pb-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center gap-2">
            <div class="w-5 h-5 bg-red-400 dark:bg-red-600 rounded-full animate-pulse"></div>
            <div class="w-24 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div class="ml-auto w-8 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div class="mt-2 w-full h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>

        <!-- Divider -->
        <div class="h-px w-full bg-gray-200 dark:bg-gray-700"></div>

        <!-- Second attack -->
        <div>
          <div class="flex items-center gap-2">
            <div class="flex">
              <div
                class="w-5 h-5 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse mr-1"
              ></div>
              <div
                class="w-5 h-5 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse mr-1"
              ></div>
              <div class="w-5 h-5 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse"></div>
            </div>
            <div class="w-24 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div class="ml-auto w-12 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div class="mt-2 w-full h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    </div>

    <!-- Market Prices section -->
    <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm dark:shadow-gray-900/30 mb-6">
      <div class="w-40 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>

      <div class="space-y-3">
        <!-- First price entry -->
        <div class="flex justify-between">
          <div class="w-24 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          <div class="flex items-center">
            <div class="w-20 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div class="w-40 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse ml-2"></div>
          </div>
        </div>

        <!-- Second price entry -->
        <div class="flex justify-between">
          <div class="w-28 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          <div class="flex items-center">
            <div class="w-20 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div class="w-40 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse ml-2"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Illustrator section -->
    <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm dark:shadow-gray-900/30">
      <div class="w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-3"></div>
      <div class="w-32 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
    </div>
  </div>
</template>

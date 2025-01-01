<script setup lang="ts">
import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'
import TCGThemeToggle from '@/app/components/Shared/TCGThemeButtons/TCGThemeToggle.vue'
import TCGTitle from '@/app/components/Shared/TCGTitle/TCGTitle.vue'

export interface NavItems {
  title: string
  to: string
}

const nav: NavItems[] = [
  {
    title: 'TCG Color System',
    to: '/colors',
  },
  {
    title: 'TCG Architecture',
    to: '/colors',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Donate',
    to: '/donations',
  },
]
</script>
<template>
  <div class="bg-brand-primary-light-lighter dark:bg-brand-primary-dark">
    <nav class="flex container mx-auto px-5 py-3">
      <ul class="flex flex-grow space-x-4">
        <li>
          <router-link to="/" class="flex items-center space-x-3 md:mr-5">
            <span
              class="text-neutral-white-light hover:text-gray-300 text-xl align-center font-semibold"
            >
              <TCGIcon name="main-logo" class="inline-block mr-2" :size="18" />
              <TCGTitle
                variant="primary"
                class="!text-default-light dark:!text-default-dark !text-lg items-center text-center mt-1"
              >
                Pokémon TCG
              </TCGTitle>
            </span>
          </router-link>
        </li>
      </ul>
      <ul class="flex items-center space-x-5">
        <li class="hidden sm:flex" v-for="(link, key) in nav" :key="key">
          <router-link
            :to="link.to"
            class="text-default-light dark:text-default-dark dark:text-blackink link-underline link-underline-black hover:text-default-light text font-semibold py-1 px-3 underline-offset-4 transition duration-30"
            >{{ link.title }}</router-link
          >
        </li>
        <li class="hidden sm:flex">
          <TCGThemeToggle />
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
	.link-underline {
		border-bottom-width: 0;
		background-size: 0 2px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size .5s ease-in-out;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(#3B82F6,#F87171)
	}

	.link-underline:hover {
		background-size: 100% 2px;
		background-position: 0 100%
	}
  </style>

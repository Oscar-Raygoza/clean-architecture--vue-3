<template>
  <div class="py-8 px-4 mx-auto lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center">
      <h1
        class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-brand-primary-light dark:text-brand-primary-dark"
      >
        404
      </h1>
      <p class="mb-4 text-3xl tracking-tight font-bold text-default-dark md:text-4xl dark:text-default-light">
        Something's missing.
      </p>
      <p class="mb-4 text-lg font-light text-default-dark md:text-4xl dark:text-default-light">
        Sorry, we can't find that page. You'll find lots to explore on the home page.
      </p>
      <router-link
        to="/"
        class="uppercase font-bold inline-flex text-default-light md:text-md dark:text-default-light bg-brand-primary-light dark:bg-brand-primary-dark hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
        >Back to Homepage</router-link>
    </div>
  </div>
</template>

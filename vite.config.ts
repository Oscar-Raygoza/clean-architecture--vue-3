import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import tailwindcss from 'tailwindcss'

// https://vite.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: 'https://oscar-raygoza.github.io/clean-architecture--vue-3',
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
    define: {
      'process.env': {
        POKEMONTCG_API_KEY: env.VITE_POKEMONTCG_API_KEY,
      },
    },
  }
})

import { ref, onMounted } from 'vue'
import { container } from '@/container'

// types
import themeTypes from '@/infrastructure/theme/di/types'
import { Themes } from '@/application/theme/storage/enum/Themes'

import type { PersistentStorageRepository } from '@/infrastructure/persistence/enum/PersistentStorageRepository'

export function useTheme() {
  const themeStorageRepository = container.get<PersistentStorageRepository<Themes>>(
    themeTypes.themeStorageRepository,
  )

  const isDark = ref<boolean>(false)

  const getSystemTheme = (): boolean => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const updateTheme = (value: boolean): void => {
    isDark.value = value

    themeStorageRepository.set(isDark.value ? Themes.DARK : Themes.LIGHT)

    document.documentElement.classList.toggle('dark', value)
  }

  const toggleTheme = (): void => {
    updateTheme(!isDark.value)
  }

  const initTheme = (): void => {
    const theme = themeStorageRepository.get()

    if (theme) {
      updateTheme(theme === Themes.DARK)
    } else {
      updateTheme(getSystemTheme())
    }
  }

  onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
      if (!themeStorageRepository.get()) {
        updateTheme(event.matches)
      }
    })

    initTheme()
  })

  return {
    isDark,
    toggleTheme,
  }
}

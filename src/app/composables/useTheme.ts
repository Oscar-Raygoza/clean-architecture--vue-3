import { ref, onMounted } from 'vue'
import { container } from '@/container'

// types
import themeTypes from '@/infrastructure/theme/di/types'
import { Themes } from '@/application/theme/storage/enum/Themes'

import type { DataObjectStorage } from '@/infrastructure/persistence/enum/DataObjectStorage'

export function useTheme() {
  const themeStorageDAO = container.get<DataObjectStorage<Themes>>(
    themeTypes.themeStorageDAO,
  )

  const isDark = ref<boolean>(false)

  const getSystemTheme = (): boolean => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const updateTheme = (value: boolean): void => {
    isDark.value = value

    themeStorageDAO.set(isDark.value ? Themes.DARK : Themes.LIGHT)

    document.documentElement.classList.toggle('dark', value)
  }

  const toggleTheme = (): void => {
    updateTheme(!isDark.value)
  }

  const initTheme = (): void => {
    const theme = themeStorageDAO.get()

    if (theme) {
      updateTheme(theme === Themes.DARK)
    } else {
      updateTheme(getSystemTheme())
    }
  }

  onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
      if (!themeStorageDAO.get()) {
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

import { defineAsyncComponent } from 'vue'

import type { IconType } from '@/app/components/Shared/TCGIcons/types/IconType';
import type { Component } from 'vue';

export const useIcons = () => {
  const icons = new Map<IconType, Component>([
    ['dark-mode', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/shared/dark-mode.icon.vue'))],
    ['facebook', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/social-networks/facebook.icon.vue'))],
    ['github', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/social-networks/github.icon.vue'))],
    ['linkedin', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/social-networks/linkedin.icon.vue'))],
    ['x', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/social-networks/x.icon.vue'))],
  ]);

  return {
    getIcon: (name: IconType) => icons.get(name)
  };
};

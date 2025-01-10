import { defineAsyncComponent } from 'vue'

import type { IconType } from '@/app/components/Shared/TCGIcons/types/IconType';
import type { Component } from 'vue';

export const useIcons = () => {
  const icons = new Map<IconType, Component>([
    ['arrow-down', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/shared/arrow-down.icon.vue'))],
    ['close', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/shared/close.icon.vue'))],
    ['dark-mode', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/shared/dark-mode.icon.vue'))],
    ['facebook', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/social-networks/facebook.icon.vue'))],
    ['filter', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/shared/filter.icon.vue'))],
    ['github', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/social-networks/github.icon.vue'))],
    ['lang', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/lang/lang.icon.vue'))],
    ['linkedin', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/social-networks/linkedin.icon.vue'))],
    ['main-logo', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/brand/logo.icon.vue'))],
    ['moon', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/dark-mode/moon.icon.vue'))],
    ['projects', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/shared/projects.icon.vue'))],
    ['search', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/shared/search.icon.vue'))],
    ['sun', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/dark-mode/sun.icon.vue'))],
    ['x', defineAsyncComponent(() => import('@/app/components/Shared/TCGIcons/icons/social-networks/x.icon.vue'))],
  ]);

  return {
    getIcon: (name: IconType) => icons.get(name)
  };
};

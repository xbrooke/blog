import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DarkModeToggle from './components/DarkModeToggle.vue'
import Video from './components/Video.vue'

import './style/var.css'
import './style/custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('DarkModeToggle', DarkModeToggle)
    ctx.app.component('Video', Video)
  }
} satisfies Theme



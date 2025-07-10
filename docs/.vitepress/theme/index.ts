
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DarkModeToggle from './components/DarkModeToggle.vue'
import Video from './components/Video.vue'
import Layout from './Layout.vue'

import './style/var.css'
import './style/custom.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('DarkModeToggle', DarkModeToggle)
    ctx.app.component('Video', Video)
  }
} satisfies Theme



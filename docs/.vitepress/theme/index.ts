import Theme from 'vitepress/theme'
import './style/var.css'
import './style/custom.css'
import DarkModeToggle from './components/DarkModeToggle.vue'



import Video from "./components/Video.vue"



export default {
  ...Theme,
  enhanceApp(ctx) {
    ctx.app.component('DarkModeToggle', DarkModeToggle)
    // 注册全局组件
    ctx.app.component('Video' , Video)
  }
}



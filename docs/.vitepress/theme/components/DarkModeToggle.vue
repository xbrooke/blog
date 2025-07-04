<template>
  <button class="toggle" @click="toggleDark()">
    <span class="dark-icon">🌙</span>
    <span class="light-icon">☀️</span>
  </button>
</template>

<script setup>
import { useData } from 'vitepress'
import { watchEffect } from 'vue'
const { isDark } = useData()

const setHtmlDarkClass = (val) => {
  if (val) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// 初始化时同步
setHtmlDarkClass(isDark.value)

// 监听 isDark 变化自动切换 .dark 类
watchEffect(() => {
  setHtmlDarkClass(isDark.value)
})

const toggleDark = () => {
  isDark.value = !isDark.value
}
</script>

<style scoped>
.toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  font-size: 1.2em;
}

.light-icon {
  display: none;
}

.dark .light-icon {
  display: inline;
}

.dark .dark-icon {
  display: none;
}
</style>
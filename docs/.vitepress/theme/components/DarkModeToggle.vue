<template>
  <button class="toggle" @click="toggleDark()">
    <span class="dark-icon">🌙</span>
    <span class="light-icon">☀️</span>
  </button>
</template>

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()

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
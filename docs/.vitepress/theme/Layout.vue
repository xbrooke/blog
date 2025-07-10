<template>
  <Layout>
    <template #layout-bottom>
      <FooterBeianGlobal />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import FooterBeianGlobal from './FooterBeianGlobal.vue'
const { Layout } = DefaultTheme
</script>

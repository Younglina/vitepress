<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme

const { frontmatter } = useData()
console.log(frontmatter)
</script>

<template>
  <Layout>
    <template #doc-before>
      {{ frontmatter.title }}
      {{ frontmatter.date }}
      <span v-for="item in frontmatter.tags" :key="item">{{ item }}</span>
    </template>
  </Layout>
</template>
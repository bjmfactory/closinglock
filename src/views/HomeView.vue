<script setup>
import DocumentItem from '@/components/DocumentItem.vue'
</script>

<template>
  <main>
    <h1>Home view</h1>
    <DocumentItem isComplete="{ False }" name="foo name" viewLink="https://www.example.com" />
    <DocumentItem isComplete="true" name="bar name" viewLink="https://www.example.com" />
  </main>
</template>

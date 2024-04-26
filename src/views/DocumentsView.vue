<script setup>
import DocumentItem from '@/components/DocumentItem.vue'

import { useDocumentStore } from '@/stores/documents'
import { storeToRefs } from 'pinia'

const store = useDocumentStore()

const { documents } = storeToRefs(store)
</script>

<template>
  <main class="p-8">
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-6"
    >
      Documents
    </h1>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead
        class="font-bold p-4 text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <td class="py-6 px-3">Name</td>
        <td class="py-6 px-3">Status</td>
        <td class="py-6 px-3">Action</td>
      </thead>
      <DocumentItem v-for="document in documents" :key="document.id" :document="document" />
    </table>
  </main>
</template>

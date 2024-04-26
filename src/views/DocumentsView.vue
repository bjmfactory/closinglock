<script setup>
import DocumentItem from '@/components/DocumentItem.vue'

import { useDocumentStore } from '@/stores/documents'
import { storeToRefs } from 'pinia'

const store = useDocumentStore()

const { documents } = storeToRefs(store)
</script>

<template>
  <main>
    <h1 class="text-gray-50">Documents</h1>
    <table>
      <thead>
        <td>Name</td>
        <td>Status</td>
        <td>Action</td>
      </thead>
      <DocumentItem v-for="document in documents" :key="document.id" :document="document" />
    </table>
  </main>
</template>

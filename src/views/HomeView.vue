<script setup>
import { ref, onMounted } from 'vue'
import DocumentItem from '@/components/DocumentItem.vue'
import DocumentService from '@/services/DocumentService'

import { useDocumentStore } from '@/stores/documents'
import { storeToRefs } from 'pinia'

const store = useDocumentStore()

// storeToRefs lets todoList keep reactivity:
const { documents } = storeToRefs(store)

// destructuring action method doesn't require using storeToRefs:
const { signDocument } = store
</script>

<template>
  <main>
    <h1 class="text-gray-50">Home view</h1>
    <DocumentItem v-for="document in documents" :key="document.id" :document="document" />
  </main>
</template>

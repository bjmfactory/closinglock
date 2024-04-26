<script setup>
import { ref, onMounted } from 'vue'
import DocumentItem from '@/components/DocumentItem.vue'
import DocumentService from '@/services/DocumentService'

const documents = ref([])

onMounted(() => {
  DocumentService.getDocuments()
    .then((response) => {
      documents.value = response.data
      console.log(documents.value)
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <main>
    <h1 class="text-gray-50">Home view</h1>
    <div class="documents">
      <DocumentItem v-for="document in documents" :key="document.id" :document="document" />
    </div>
  </main>
</template>

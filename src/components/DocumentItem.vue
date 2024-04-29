<script setup>
import { useDocumentStore } from '@/stores/documents'

defineProps({
  document: Object
})

const store = useDocumentStore()

function sign(document) {
  if (document.isComplete) {
    return
  }
  store.signDocument(document.id)
}

const goToURL = (url) => {
  window.location.href = url
}
</script>

<template>
  <tr>
    <td class="p-3 text-gray-900 font-medium">
      <a :href="document.viewLink">{{ document.name }}</a>
    </td>
    <td class="p-3 text-gray-600">{{ document.isComplete ? 'Complete' : 'Incomplete' }}</td>
    <td v-if="document.isComplete" class="p-3">
      <button
        @click="goToURL(document.viewLink)"
        class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        View Document
      </button>
    </td>
    <td v-else class="p-3">
      <button
        @click="sign(document)"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Sign Document
      </button>
    </td>
  </tr>
</template>

<style scoped></style>

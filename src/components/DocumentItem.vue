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
</script>

<template>
  <tr>
    <td>
      <a :href="document.viewLink">{{ document.name }}</a>
    </td>
    <td>{{ document.isComplete ? 'Complete' : 'Incomplete' }}</td>
    <td v-if="document.isComplete"><button>View Document</button></td>
    <td v-else><button @click="sign(document)">Sign Document</button></td>
  </tr>
</template>

<style scoped></style>

<script setup>
import { ref, computed } from 'vue'

defineProps({
  document: Object
})
</script>

<template>
  <tr>
    <td>
      <a :href="document.viewLink">{{ document.name }}</a>
    </td>
    <td>{{ document.isComplete === 'True' ? 'Complete' : 'Incomplete' }}</td>
    <td>{{ document.isComplete === 'True' ? 'View Document' : 'Sign Document' }}</td>
  </tr>
</template>

<style scoped></style>

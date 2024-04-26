<script setup>
const props = defineProps({
  document: Object
})
</script>

<template>
  <tr>
    <td>
      <a :href="document.viewLink">{{ document.name }}</a>
    </td>
    <td>{{ document.isComplete === 'True' ? 'Complete' : 'Incomplete' }}</td>
  </tr>
</template>

<style scoped></style>

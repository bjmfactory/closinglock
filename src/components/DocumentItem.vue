<script setup>
defineProps({
  isComplete: {
    type: Boolean,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  viewLink: {
    type: String,
    required: true
  }
})
</script>

<template>
  <tr>
    <td>
      <a :href="viewLink">{{ name }}</a>
    </td>
    <td>{{ isComplete ? 'Complete' : 'Not Complete' }}</td>
  </tr>
</template>

<style scoped></style>

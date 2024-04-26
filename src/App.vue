<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="p-1 border-b border-gray-200">
    <nav class="flex flex-wrap items-center justify-start mx-auto p-2">
      <RouterLink class="p-4" to="/">Documents</RouterLink>
      <RouterLink class="p-4" to="/secure-payments">Secure Payments</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

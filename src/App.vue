<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-gray-800">
      <nav class="relative flex items-center space-x-8 h-16 text-white">
        <RouterLink class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/">Home</RouterLink>
        <RouterLink class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/cart">Cart</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

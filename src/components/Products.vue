<template>
 <h1 class="p-5 text-3xl font-bold underline"> Liste des produits : </h1>
  <div class="p-5 flex flex-wrap items-center justify-evenly">
    <Product v-for="product in data.products" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
  import Product from './Product.vue'
  import { useShoppingStore } from '../stores/shopping'

  //get products from store
  const data = useShoppingStore();
</script>


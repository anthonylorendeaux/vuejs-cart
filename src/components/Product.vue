<template>
  <div class="bg-white shadow-md rounded-lg w-96 overflow-hidden mt-8">
    <img class="w-auto h-80 p-8" v-bind:src="product.image">
    <div class="px-5 pb-5">
        <h4 class="text-gray-900 font-semibold text-xl tracking-tigh"> {{product.name}}</h4>
        <p> {{product.description}} </p>
            <div class="flex items-center justify-between mt-2">
                <span class="text-3xl font-bold text-gray-900">{{product.price}}€</span>
                <button @click="data.addToCart(product)"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ajout
                    au panier</button>
            </div>
    </div>
  </div>
</template>

<script setup>
    import { useShoppingStore } from '../stores/shopping'

    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    })

    const data = useShoppingStore();
</script>


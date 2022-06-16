<template>
  <div class="w-full flex flex-col p-10 justify-center align-middle">
      <div v-if="data.getCartItems.length === 0">
          <p class="text-md"> Le panier est vide !</p>
      </div>
      <div v-else>
        <div class="bg-white shadow-md rounded-lg w-full p-8 mt-4 flex justify-between" v-for="item in data.getCartItems" :key="item.id">
          <div class="flex justify-around w-1/6">
            <h1 class="text-gray-900 font-semibold text-xl tracking-tigh">{{item.name}}</h1>
            <p class="text-xl font-bold text-gray-900"> {{item.total}}€</p>
          </div>
          <div class="flex justify-around w-1/6">
            <button class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded" @click="data.decrementQuantity(item)"> - </button>
                <p class="text-xl text-gray-900"> {{item.quantity}}</p>
            <button class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded" @click="data.incrementQuantity(item)"> + </button>
            <button class="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded" @click="data.removeFromCart(item)"> Supprimer </button>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-md"> Nombre de produits dans le panier : {{data.countCartItems}}</p>
          <p class="text-md"> Total : {{data.getTotal}}€</p>
        </div>
      </div>
  </div>
</template>

<script setup>
  import { useShoppingStore } from '../stores/shopping'

  const data = useShoppingStore();
  console.log(data.getCartItems.length)
</script>


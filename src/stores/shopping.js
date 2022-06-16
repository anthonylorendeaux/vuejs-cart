import { defineStore } from 'pinia'

export const useShoppingStore = defineStore({
  id: 'shopping',
  state: () => {
    return {
        products: [{
          id: 1,
          name: 'Montre',
          description: 'Montre en acier inoxydable',
          price: '100',
          image: 'https://images.unsplash.com/photo-1584981202081-faf15871dd0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
        },
      {
        id: 2,
        name: 'Téléphone',
        description: 'Téléphone dernière génération',
        price: '200',
        image: 'https://images.unsplash.com/photo-1647964186835-faf8bed7184c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      },
      {
        id: 3,
        name: 'Ordinateur',
        description: 'Ordinateur portable',
        price: '800',
        image: 'https://images.unsplash.com/photo-1640955014216-75201056c829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
      },
      {
        id: 4,
        name: 'Switch',
        description: 'Switch avec zelda',
        price: '300',
        image: 'https://images.unsplash.com/photo-1635514569146-9a9607ecf303?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      },
      {
        id: 5,
        name: 'Manette',
        description: 'Manette de jeu',
        price: '50',
        image: 'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      }, 
      {
        id: 6,
        name: 'Clio',
        description: 'Voiture de fou',
        price: '10000',
        image: 'https://images.unsplash.com/photo-1625277948641-906970e280a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      }
    ],
    cartItems: [],
      }
  },
  getters: {
    countCartItems() {
      return this.cartItems.length
    },
    getCartItems() {
      return this.cartItems
    },
    getTotal() {
      let total = 0
      this.cartItems.map(item => {
        total += parseInt(item.total)
      })
      return total;
    }
  },
  actions: {
    addToCart(product) {
      let index = this.cartItems.findIndex(item => item.id === product.id)

      if(index !== -1) {
        // Update quantity
        this.cartItems[index].total = (this.cartItems[index].quantity+1) * product.price
        this.cartItems[index].quantity++
      } else {
        // Add to cart
        this.cartItems.push({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          total: product.price,
          quantity: 1
        })
      }
    },
    removeFromCart(product) {
      let index = this.cartItems.findIndex(item => item.id === product.id)
      this.cartItems.splice(index, 1)
    },
    incrementQuantity(product) {
      let index = this.cartItems.findIndex(item => item.id === product.id)

      if(index !== -1) {
        // Update quantity
        this.cartItems[index].total = (this.cartItems[index].quantity+1) * product.price
        this.cartItems[index].quantity++
      }
    },
    decrementQuantity(product) {
      let index = this.cartItems.findIndex(item => item.id === product.id)

      if(index !== -1) {
        // Update quantity
        this.cartItems[index].total = (this.cartItems[index].quantity-1) * product.price
        this.cartItems[index].quantity--
        if(this.cartItems[index].quantity === 0) {
          this.cartItems.splice(index, 1)
        }
      }
    }
  }
})

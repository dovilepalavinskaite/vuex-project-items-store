<template>
    <div class="d-flex justify-content-center flex-column align-items-center">
        <div class="cart-container text-center">
            <h4 class="cart-title pb-2 font-weight-bold">Your Cart</h4>
        </div>
        <div class="d-flex align-items-center mt-3">
            <span class="mr-2 font-weight-bolder">Total amount:</span>
            <span class="amount-counter text-center py-1">${{ totalAmount }}</span>
        </div>
        <div v-for="item in filteredCart" :key="item.id" class="mt-4">
            <div class="item-cart py-5 px-3">
                <div class="d-flex justify-content-center">
                    <img :src="item.image" alt="Item image" class="item-img">
                </div>
                <h4 class="text-center mt-2">{{ item.item }}</h4>
                <div class="d-flex justify-content-between mt-3">
                    <span>Price per Item: <span class="font-weight-bold">${{ item.price }}</span></span>
                    <span>Quantity: <span class="font-weight-bold">{{ item.selectedQuantity }}</span></span>
                </div>
                <hr>
                <div class="d-flex justify-content-center">
                    <span class="text-center">Total: <span class="font-weight-bold ">${{ item.selectedQuantity * item.price }}</span></span>
                </div>
                <hr>
                <div class="text-center">
                    <button @click="removeFromCart(item)" class="remove-button mt-4 py-2">Remove item</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapMutations  } from 'vuex';

export default {
  name: 'ItemsCart',
  computed: {
    ...mapGetters(['userCart']),
    filteredCart() {
        const processedCart = [];

        this.userCart.forEach(item => {
        const existingItemIndex = processedCart.findIndex(entry => entry.id === item.id);
        if (existingItemIndex !== -1) {
            processedCart[existingItemIndex].selectedQuantity += 1; 
        } else {
            processedCart.push({ ...item, selectedQuantity: 1 });
        }
        });

        return processedCart;
    },
    totalAmount() {
        return this.userCart.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
    ...mapMutations(['updateCart']),
    removeFromCart(item) {
        const existingItemIndex = this.userCart.findIndex(entry => entry.id === item.id);
      
      if (existingItemIndex !== -1) {
        if (this.userCart[existingItemIndex].selectedQuantity > 1) {
          // If the item's selectedQuantity is greater than 1, reduce it by 1
          this.updateCart({ ...item, selectedQuantity: this.userCart[existingItemIndex].selectedQuantity - 1 });
        } else {
          // If the item's selectedQuantity is 1 or less, remove the entire object from the cart
          this.userCart.splice(existingItemIndex, 1);
          this.updateCart([...this.userCart]);
        }
      }
    }
  }
}
</script>


<style scopped>

.cart-container {
    width: 500px;
}

.cart-title {
    border-bottom: 2px solid #e5e5e5;
}

.item-cart {
    border-radius: 3px;
    border: 1px solid #e5e5e5;
    width: 450px;
    box-shadow: -2px 11px 14px 1px rgba(66,59,59,0.8);
    -webkit-box-shadow: -2px 11px 14px 1px rgba(66,59,59,0.8);
    -moz-box-shadow: -2px 11px 14px 1px rgba(66,59,59,0.8);
}

.amount-counter {
    background: #1d5d9b;
    border-radius: 30px;
    width: 100px;
    color: #fff;
    font-size: 12px;
    border: 1px solid #1d5d9b;
}

.item-img {
    border-radius: 50%;
}

.remove-button {
    background: #c51605;
    border-radius: 30px;
    width: 100px;
    color: #fff;
    font-size: 12px;
    border: 1px solid #c51605;
}

</style>
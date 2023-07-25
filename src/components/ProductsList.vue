<template>
    <div class="d-flex justify-content-center align-items-center flex-column pt-5">
        <div v-for="(item, index) in itemsList" :key="index" class="mb-3 product-cart p-3">
            <div class="d-flex align-items-center">
                <img :src="item.image" alt="Item image" class="item-img mr-2">
                <div class="d-flex flex-column">
                    <h6 class="font-weight-bold">{{ item.item }}</h6>
                    <span class="item-price text-center font-weight-bold mb-3">${{ item.price }}</span>
                    <p>{{ item.description }}</p>
                </div>
            </div>
            <div class="d-flex justify-content-center">
              <button @click="addToCart" class="add-button py-1">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ProductList',
  data() {
    return {
        itemsList: [
            {
              item: 'Strawberries',
              price: 7.99,
              description: 'One kilo of juicy, Lithuanian strawberries!',
              image: 'https://images.unsplash.com/photo-1653361800111-b667f269e497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1814&q=80'
          },
          {
            item: 'Pineapple',
            price: 12.49,
            description: 'Sweet pineapple from Vietnam',
            image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
          },
          {
            item: 'Almonds',
            price: 4.99,
            description: '1/2 kilo of almonds in the jar',
            image: 'https://images.unsplash.com/photo-1508779018996-601e37fa274e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
          }
        ]
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('incrementCounter');
    }
  }
}
</script>


<style scopped>

.product-cart {
  border-radius: 3px;
  border: 1px solid #e5e5e5;
  max-width: 500px;
  width: 100%;
  box-shadow: -2px 11px 14px 1px rgba(66,59,59,0.8);
  -webkit-box-shadow: -2px 11px 14px 1px rgba(66,59,59,0.8);
  -moz-box-shadow: -2px 11px 14px 1px rgba(66,59,59,0.8);
}

.item-img {
  width: 100px;
  height: 100px; 
  object-fit: cover;
}

.item-price {
  border-radius: 30px;
  background: #f4d160;
  width: 70px;
}

.add-button {
  background: #1d5d9b;
  border-radius: 30px;
  width: 100px;
  color: #fff;
  font-size: 12px;
  border: 1px solid #1d5d9b;
}

</style>
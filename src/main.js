import { createApp } from 'vue';

import App from './App.vue';
import store from './store/index.js';
import { createRouter, createWebHistory } from 'vue-router';

import ProductList from './components/ProductsList.vue';
import ItemsCart from './components/ItemsCart.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/product-list',
      component: ProductList
    },
    {
      path: '/items-cart',
      component: ItemsCart
    }
  ]
});

app.use(store);
app.use(router);

app.mount('#app');

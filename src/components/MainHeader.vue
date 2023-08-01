<template>
  <div class="d-flex justify-content-around flex-wrap align-items-center mt-2">
    <div class="logo">
        <h2>VuexShop</h2>
    </div>
    <nav v-if="userAuthentification" class="d-flex">
      <router-link userAuthentification to="/product-list" class="mr-3">Products</router-link>
      <div class="d-flex">
          <router-link to="/items-cart">Cart</router-link>
          <div class="items-counter ml-2 text-center">
              {{ cartItemsCounter }}
          </div>
      </div>
    </nav>
    <div>
      <button v-if="!userAuthentification" @click="login" class="mr-3 authentification-button py-2 px-4">Login</button>
      <button v-else @click="logout" class="authentification-button py-2 px-4">Logout</button>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'MainHeader',
  computed: {
    ...mapGetters(['cartItemsCounter', 'userAuthentification'])
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>


<style scopped>

a {
  text-decoration: none;
  color: #000;
}

a:hover {
  text-decoration: none;
}

.authentification-button {
  border-radius: 30px;
  border: 2px solid #468b97;
  color: #468b97;
  font-size: 14px;
  background: transparent;
  transition: 1s;
}

.authentification-button:hover {
  background: #468b97;
  color: #fff;
}

a:active, a:hover, a.router-link-active {
  color: #1d5d9b;
  font-weight: 600;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

.items-counter {
  background: #1d5d9b;
  border-radius: 30px;
  width: 50px;
  height: 25px;
  color: #fff;
}

</style>
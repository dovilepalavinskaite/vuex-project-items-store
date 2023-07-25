<template>
    <div class="d-flex justify-content-around mt-2">
        <div class="logo">
            <h2>VuexShop</h2>
        </div>
        <nav v-if="userAuthentification" class="d-flex">
            <p @click="setActiveLink('products')" class="mr-3" :class="{'activated-link': activatedLink === 'products'}">Products</p>
            <div class="d-flex">
                <p @click="setActiveLink('cart')" :class="{'activated-link': activatedLink === 'cart'}">Cart</p>
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
  data() {
    return {
        activatedLink: 'products'
    }
  },
  computed: {
    ...mapGetters(['cartItemsCounter', 'userAuthentification'])
  },
  methods: {
    setActiveLink(activeLink) {
        this.activatedLink = activeLink;
        this.$emit('activate-link', activeLink);
    },
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

.activated-link, nav p:hover {
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

nav p {
    cursor: pointer;
}

</style>
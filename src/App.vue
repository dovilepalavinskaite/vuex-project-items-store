<template>
  <main-header @activate-link="activeLink" />
  <user-auth-request v-if="!userAuthentification" />
  <products-list v-if="userAuthentification && activatedLink === 'products'" />
  <items-cart v-if="userAuthentification && activatedLink === 'cart'" />
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import ProductsList from './components/ProductsList.vue';
import ItemsCart from './components/ItemsCart.vue';
import userAuthRequest from './components/userAuthRequest.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: { 
    MainHeader,
    ProductsList,
    ItemsCart,
    userAuthRequest
  },
  data() {
    return {
      activatedLink: 'products'
    }
  },
  computed: {
    ...mapGetters(['userAuthentification'])
  },
  methods: {
    activeLink(activeLink) {
      this.activatedLink = activeLink;
    }
  }
}
</script>

<style>

</style>

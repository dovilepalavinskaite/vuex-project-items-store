<template>
  <main-header @activate-link="activeLink" />
  <products-list v-if="activatedLink === 'products'" />
  <items-cart v-if="activatedLink === 'cart'" />
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import ProductsList from './components/ProductsList.vue';
import ItemsCart from './components/ItemsCart.vue';

export default {
  name: 'App',
  components: { 
    MainHeader,
    ProductsList,
    ItemsCart
  },
  data() {
    return {
      activatedLink: 'cart'
    }
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

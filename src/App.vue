<template>
  <main-header @activate-link="activeLink" />
  <user-auth-request v-if="!userAuthentification" />
  <router-view></router-view>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import userAuthRequest from './components/userAuthRequest.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: { 
    MainHeader,
    userAuthRequest
  },
  created() {
    if (this.userAuthentification) {
      this.$router.push('/product-list');
    }
  },
  computed: {
    ...mapGetters(['userAuthentification'])
  },
}
</script>

<style>

</style>

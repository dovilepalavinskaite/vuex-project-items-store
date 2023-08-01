export default {
  userAuthentification(state) {
    return state.userLoggedIn;
  },
  cartItemsCounter(state) {
    return state.itemsCounter;
  },
  userCart(state) {
    return state.itemsCart;
  }
}
export default  {
    setAuth(state, payload) {
        state.userLoggedIn = payload.isAuth;
    },
    incrementCounter(state) {
        state.itemsCounter++;
    },
    addToUserCart(state, payload) {
        state.itemsCart.push(payload);
    },
    updateCart(state, updatedCart) {
        state.userCart = updatedCart;
      },
}
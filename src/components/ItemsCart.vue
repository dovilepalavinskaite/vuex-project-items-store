<template>
    <div class="d-flex justify-content-center flex-column align-items-center">
        <div class="cart-container text-center">
            <h4 class="cart-title pb-2 font-weight-bold">Your Cart</h4>
        </div>
        <div class="d-flex align-items-center mt-3">
            <span class="mr-2 font-weight-bolder">Total amount:</span>
            <span class="amount-counter text-center py-1">$10.99</span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ItemsCart',
}
</script>


<style scopped>

.cart-container {
    width: 500px;
}

.cart-title {
    border-bottom: 2px solid #e5e5e5;
}

.amount-counter {
    background: #1d5d9b;
    border-radius: 30px;
    width: 100px;
    color: #fff;
    font-size: 12px;
    border: 1px solid #1d5d9b;
}

</style>
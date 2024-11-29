<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const fullName = ref('');
const gender = ref('');
const country = ref('');
const address = ref('');
const phone = ref('');
const deliveryMethod = ref('');
const paymentMethod = ref('');
const orderSubmitted = ref(false);
const submittedOrder = ref(null);

const submitOrder = () => {
  const order = {
    fullName: fullName.value,
    gender: gender.value,
    country: country.value,
    address: address.value,
    phone: phone.value,
    deliveryMethod: deliveryMethod.value,
    paymentMethod: paymentMethod.value,
    total: cartStore.totalSum,
    items: cartStore.cartList,
  };

  const storedOrders = localStorage.getItem('orders');
  const orders = storedOrders ? JSON.parse(storedOrders) : [];
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));

  orderSubmitted.value = true;
  submittedOrder.value = order;
  cartStore.carts = [];
};

const resetOrder = () => {
  fullName.value = '';
  gender.value = '';
  country.value = '';
  address.value = '';
  phone.value = '';
  deliveryMethod.value = '';
  paymentMethod.value = '';
};
</script>

<template>
<div class="container">
  <h2>Order Form</h2>
  <form v-if="!orderSubmitted" @submit.prevent="submitOrder">
    <div class="mb-3">
      <label for="fullName" class="form-label">Full Name</label>
      <input type="text" class="form-control" id="fullName" v-model="fullName" required>
    </div>
    <div class="mb-3">
      <label for="gender" class="form-label">Gender</label>
      <select class="form-select" id="gender" v-model="gender" required>
        <option value="" disabled>Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="country" class="form-label">Country</label>
      <select class="form-select" id="country" v-model="country" required>
        <option value="" disabled>Select country</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">UK</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="address" class="form-label">Address</label>
      <input type="text" class="form-control" id="address" v-model="address" required>
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label">Phone</label>
      <input type="text" class="form-control" id="phone" v-model="phone" required>
    </div>
    <div class="mb-3">
      <label for="deliveryMethod" class="form-label">Delivery Method</label>
      <select class="form-select" id="deliveryMethod" v-model="deliveryMethod" required>
        <option value="" disabled>Select delivery method</option>
        <option value="standard">Standard</option>
        <option value="express">Express</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="paymentMethod" class="form-label">Payment Method</label>
      <select class="form-select" id="paymentMethod" v-model="paymentMethod" required>
        <option value="" disabled>Select payment method</option>
        <option value="creditCard">Credit Card</option>
        <option value="paypal">PayPal</option>
      </select>
    </div>
    <h3>Order Summary</h3>
    <ul class="list-group mb-3">
      <li class="list-group-item" v-for="product in cartStore.cartList" :key="product.id">
        <div class="d-flex justify-content-between">
          <div>
            <h6 class="my-0">{{ product.name }}</h6>
            <small class="text-muted">{{ product.category }}</small>
          </div>
          <span class="text-muted">${{ product.price }} x {{ product.count }}</span>
        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between">
        <span>Total (USD)</span>
        <strong>${{ cartStore.totalSum }}</strong>
      </li>
    </ul>
    <button type="submit" class="btn btn-primary">Submit Order</button>
    <button type="button" class="btn btn-secondary" @click="resetOrder">Cancel</button>
  </form>
  <div v-else>
    <h3>Order Submitted</h3>
    <p>Thank you for your order, {{ submittedOrder.fullName }}!</p>
    <h4>Order Details</h4>
    <p><strong>Full Name:</strong> {{ submittedOrder.fullName }}</p>
    <p><strong>Gender:</strong> {{ submittedOrder.gender }}</p>
    <p><strong>Country:</strong> {{ submittedOrder.country }}</p>
    <p><strong>Address:</strong> {{ submittedOrder.address }}</p>
    <p><strong>Phone:</strong> {{ submittedOrder.phone }}</p>
    <p><strong>Delivery Method:</strong> {{ submittedOrder.deliveryMethod }}</p>
    <p><strong>Payment Method:</strong> {{ submittedOrder.paymentMethod }}</p>
    <h5>Items:</h5>
    <ul class="list-group mb-3">
      <li class="list-group-item" v-for="item in submittedOrder.items" :key="item.id">
        <div class="d-flex justify-content-between">
          <div>
            <h6 class="my-0">{{ item.name }}</h6>
            <small class="text-muted">{{ item.category }}</small>
          </div>
          <span class="text-muted">${{ item.price }} x {{ item.count }}</span>
        </div>
      </li>
    </ul>
    <p><strong>Total:</strong> ${{ submittedOrder.total }}</p>
    <button type="button" class="btn btn-success" @click="$router.push('/orders')">Confirm Order</button>
  </div>
</div>
</template>

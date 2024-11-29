<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const order = ref(null);

onMounted(() => {
  const storedOrders = localStorage.getItem('orders');
  if (storedOrders) {
    const orders = JSON.parse(storedOrders);
    order.value = orders[route.params.index];
  }
});
</script>

<template>
<div class="container" v-if="order">
  <h2>Order Details</h2>
  <p><strong>Full Name:</strong> {{ order.fullName }}</p>
  <p><strong>Gender:</strong> {{ order.gender }}</p>
  <p><strong>Country:</strong> {{ order.country }}</p>
  <p><strong>Address:</strong> {{ order.address }}</p>
  <p><strong>Phone:</strong> {{ order.phone }}</p>
  <p><strong>Delivery Method:</strong> {{ order.deliveryMethod }}</p>
  <p><strong>Payment Method:</strong> {{ order.paymentMethod }}</p>
  <h5>Items:</h5>
  <ul class="list-group mb-3">
    <li class="list-group-item" v-for="item in order.items" :key="item.id">
      <div class="d-flex justify-content-between">
        <div>
          <h6 class="my-0">{{ item.name }}</h6>
          <small class="text-muted">{{ item.category }}</small>
        </div>
        <span class="text-muted">${{ item.price }} x {{ item.count }}</span>
      </div>
    </li>
  </ul>
  <p><strong>Total:</strong> ${{ order.total }}</p>
</div>
</template>

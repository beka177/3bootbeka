<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const orders = ref([]);
const router = useRouter();

onMounted(() => {
  const storedOrders = localStorage.getItem('orders');
  if (storedOrders) {
    orders.value = JSON.parse(storedOrders);
  }
});

const viewOrderDetails = (index) => {
  router.push(`/order-detail/${index}`);
};
</script>

<template>
<div class="container">
  <h2>My Orders</h2>
  <div v-if="orders.length === 0">
    <p>No orders found.</p>
  </div>
  <div v-else>
    <div v-for="(order, index) in orders" :key="index" class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">Order #{{ index + 1 }}</h5>
        <p class="card-text">Total: ${{ order.total }}</p>
        <button class="btn btn-primary" @click="viewOrderDetails(index)">View Details</button>
      </div>
    </div>
  </div>
</div>
</template>

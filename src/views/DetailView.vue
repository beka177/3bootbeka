<script setup>
import { useProductStore } from '@/stores/product';
import { useRoute } from 'vue-router';

const productStore = useProductStore();
const route = useRoute();
const product = productStore.findProductById(route.params.id);
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col my-2"  >
      <div class="card h-100">
        <img :src="product.img" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text">${{ product.price }}</p>
          <p class="card-text">{{ product.category }}</p>
          <p class="card-text">{{ product.publish_at }}</p>
        </div>
        <div class="card-footer">
          <button type="button" class="btn btn-outline-success mx-4">Cart</button>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
        </div>
    </div>
</template>
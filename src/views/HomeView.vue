<script setup>
import { useCategoryStore } from '@/stores/category';
import { useProductStore } from '@/stores/product';
import { ref } from 'vue';

const productStore = useProductStore();
const categoryStore = useCategoryStore();
const category = ref(null);
const searchText = ref("");
const products = ref([]);
products.value = productStore.products;

const filterCategory = () => {
  searchText.value = ""; 
  products.value = productStore.productsFilteredByCategoryName(category.value, null);
};

const searchName = () => {
  category.value = null;
  products.value = productStore.productsFilteredByCategoryName(null, searchText.value);
};

const resetAll = () => {
  searchText.value = '';
  category.value = null;
}


</script>

<template>
<div class="container">
  <div class="row my-5">
    <div class="col-md-5">
      <select class="form-select" @change="filterCategory" v-model="category" aria-label="Default select example">
        <option selected :value="null">Select category</option>
        <option v-for="category in categoryStore.categories" :value="category" :key="category">{{ category }}</option>
      </select> 
    </div>
    <div class="col-md-5">
      <input type="text" @input="searchName" v-model="searchText" class="form-control" placeholder="Search">
    </div>
    <div class="col-md-2">
      <button type="button" class="btn btn-outline-warning"  :disabled="!searchText && !category" @click="resetAll">Reset</button>
    </div>
  </div>
  <div class="row row-cols-1 my-4 row-cols-md-3 g-4">
    <div class="col my-2" v-for="product in products" :key="product.id">
      <div class="card h-100">
        <img :src="product.img" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">${{ product.price }}</p>
          <p class="card-text">{{ product.category }}</p>
        </div>
        <div class="card-footer">
          <button type="button" class="btn btn-outline-info" @click="$router.push(`/detail/${product.id}`)">Detail</button>
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

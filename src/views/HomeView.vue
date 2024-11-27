<script setup>

</script>

<template>
<div class="container">
  <div class="row my-5">
    <div class="col-md-5">
      <select class="form-select" aria-label="Default select example">
        <option selected>Select category</option>
         <option value="1">Video Card</option>
         <option value="2">CPU</option>
         <option value="3">MotherBoard</option>
         <option value="4">RAMx</option>
        </select> 
    </div>
    <div class="col-md-5">
      <input type="text" class="form-control" placeholder="Search">
    </div>
    <div class="col-md-2">
      <button type="button" class="btn btn-outline-warning">Reset</button>
    </div>
  </div>
  <div class="row row-cols-1 my-4 row-cols-md-3 g-4">
  <div class="col my-2">
    <div class="card h-100">
      <img src="https://api.technodom.kz/f3/api/v1/images/800/800/263653_1.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">M1</h5>
        <p class="card-text">$100</p>
        <p class="card-text">MotherBoard</p>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-outline-info">Detail</button>
        <button type="button" class="btn btn-outline-success mx-4">Cart</button>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col my-2">
    <div class="card h-100">
      <img src="https://api.technodom.kz/f3/api/v1/images/800/800/263653_1.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">M1</h5>
        <p class="card-text">$100</p>
        <p class="card-text">MotherBoard</p>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-outline-info">Detail</button>
        <button type="button" class="btn btn-outline-success mx-4">Cart</button>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col my-2">
    <div class="card h-100">
      <img src="https://api.technodom.kz/f3/api/v1/images/800/800/263653_1.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">M3</h5>
        <p class="card-text">$100</p>
        <p class="card-text">MotherBoard</p>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-outline-info">Detail</button>
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

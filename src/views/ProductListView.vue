<template>
    <h1>Products List</h1>
      <div class="container mt-5">
    <!-- Add product button -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Products</h2>
      <RouterLink :to="{ name: 'products/add' }" class="btn btn-success">
        <i class="fas fa-plus me-1"></i>
        Add Product
      </RouterLink>
    </div>

    <!-- Products table -->
    <div class="table-responsive">
      <table class="table table-striped table-bordered align-middle">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Color</th>
            <th>Price</th>
            <th class="text-center">Amount</th>
          </tr>
        </thead>
        <tbody>
        <ProductRow v-for="product in products" :key="product.id" :product="product"/>
        </tbody>
      </table>
    </div>

    <!-- Back to start view button -->
    <div class="text-center mt-4">
      <RouterLink :to="{ name: 'start' }" class="btn btn-outline-primary">
        Back to Start
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted } from 'vue';
  import ProductRow from '@/componets/ProductRow.vue';

  // Reactive array to store products fetched from the API
  const products = ref([])

  // Read token from localStorage
  const token = localStorage.getItem('token')

  // Run getProducts function when component loads
  onMounted(() => {
    getProducts()
  })

  const getProducts = async () => {
    try {
      const res = await fetch('http://localhost:5000/products', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

      if (res.ok) {
        const data = await res.json()

        products.value = data;
      }
    } catch (error) {
      console.log("Error: " + error)
    }
  }
</script>
<style scoped>

</style>
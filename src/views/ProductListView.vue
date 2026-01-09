<template>
  <div class="container mt-5">
    <!-- Add product button -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1>Products List</h1>
      <RouterLink :to="{ name: 'products/add' }" class="btn btn-success">
        <i class="fas fa-plus me-1"></i>
        Add Product
      </RouterLink>
    </div>
    <div v-if="success" class="alert alert-success text-center mb-4">
      {{ success }}
    </div>

    <!-- Products table -->
    <div class="table-responsive">
      <table class="table table-striped table-bordered align-middle">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Color</th>
            <th>Price</th>
            <th class="text-center">Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <ProductRow v-for="product in products" :key="product.id" :product="product" :categories="categories"
            @refreshTable="handleRefresh" />
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
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import ProductRow from '@/componets/ProductRow.vue';

const route = useRoute();

const success = ref('');

// Reactive arrays to store products and categories fetched from the API
const products = ref([])
const categories = ref([])

// Read token from localStorage
const token = localStorage.getItem('token')

// Run getProducts and getCategories function when component loads
onMounted(() => {
  getProducts()
  getCategories()
})

// Get products with option to filter on category
const getProducts = async () => {
  try {
    const categoryId = route.query.category_id;

    let url = 'http://localhost:5000/products';
    if (categoryId) {
      url += `?category_id=${categoryId}`;
    }

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (res.ok) {
      products.value = await res.json();
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

const getCategories = async () => {
  try {
    const res = await fetch('http://localhost:5000/categories', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (res.ok) categories.value = await res.json();
  } catch (err) {
    console.log("Error:", err);
  }
};

// Check if category changes
watch(
  () => route.query.category_id,
  () => {
    getProducts();
  }
);

const handleRefresh = async (payload) => {
    await getProducts();

    if (payload?.message) {
        success.value = payload.message;

        // Clear message after 2.5 seconds
        setTimeout(() => {
            success.value = '';
        }, 2500);
    }
};
</script>
<style scoped></style>
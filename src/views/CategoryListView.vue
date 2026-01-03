<template>
    <h1>Category List</h1>
    <div class="container mt-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="mb-0">Categories</h2>
            <RouterLink :to="{ name: 'categories/add' }" class="btn btn-success">
                <i class="fas fa-plus me-1"></i>
                Add Category
            </RouterLink>
        </div>
        <!-- Category list -->
        <CategoryItem v-for="category in categories" :key="category.id" :category="category" />
    </div>

    <!-- Back to start view button -->
    <div class="text-center mt-4">
        <RouterLink :to="{ name: 'start' }" class="btn btn-outline-primary">
            Back to Start
        </RouterLink>
    </div>
</template>
<script setup>
import CategoryItem from '@/componets/CategoryItem.vue';

import { ref, onMounted } from 'vue';

// Reactive array to store categories fetched from the API
const categories = ref([])

// Read token from localStorage
const token = localStorage.getItem('token')

// Run getCategories function when component loads
onMounted(() => {
    getCategories()
})

const getCategories = async () => {
    try {
        const res = await fetch('http://localhost:5000/categories', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (res.ok) {
            const data = await res.json()

            categories.value = data;
        }
    } catch (error) {
        console.log("Error: " + error)
    }
}
</script>
<style scoped></style>
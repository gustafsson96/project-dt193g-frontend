<template>
    <div class="container mt-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h1 class="h2 mb-3">Categories</h1>
            <!-- Add category button -->
            <RouterLink :to="{ name: 'categories/add' }" class="btn btn-success">
                <i class="fas fa-plus me-1"></i>
                Add Category
            </RouterLink>
        </div>
        <!-- Container for success message-->
        <div v-if="success" class="alert alert-success text-center mb-4">
            {{ success }}
        </div>
        <!-- Category list -->
        <div v-if="categories.length > 0">
            <CategoryItem v-for="category in categories" :key="category.id" :category="category"
                @refreshCategories="handleRefresh" />
        </div>
        <!-- Empty list -->
        <div v-else class="text-center mt-4 mb-5">
            No categories found.
        </div>
        <!-- Back to start view button -->
        <div class="text-center mt-4 mb-5">
            <RouterLink :to="{ name: 'start' }" class="btn btn-outline-primary">
                Back to Start
            </RouterLink>
        </div>
    </div>
</template>
<script setup>
import CategoryItem from '@/componets/CategoryItem.vue';
import { ref, onMounted } from 'vue';

// Variable for success message
const success = ref('');

// Reactive array to store categories fetched from the API
const categories = ref([])

// Read token from localStorage
const token = localStorage.getItem('token')

// Run getCategories when component loads
onMounted(() => {
    getCategories()
})

// Get all categories
const getCategories = async () => {
    try {
        const res = await fetch('https://project-dt193g-backend.onrender.com/categories', {
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

// Handle refresh events emitted from child component
const handleRefresh = async (payload) => {
    await getCategories();

    if (payload?.message) {
        success.value = payload.message;

        // Clear message after 3 seconds
        setTimeout(() => {
            success.value = '';
        }, 3000);
    }
};
</script>
<style scoped></style>
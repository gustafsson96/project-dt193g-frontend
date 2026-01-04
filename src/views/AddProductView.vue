<template>
    <h1>Add Product</h1>
    <div class="container mt-5" style="max-width: 600px;">
        <h2 class="mb-4">Add Product</h2>

        <form @submit.prevent="addProduct">
            <!-- Product name -->
            <div class="mb-3">
                <label class="form-label">Product Name</label>
                <input type="text" class="form-control" v-model="newProduct.name" />
            </div>

            <!-- Description -->
            <div class="mb-3">
                <label class="form-label">Description</label>
                <input type="text" class="form-control" v-model="newProduct.description" />
            </div>

            <!-- Category -->
            <div class="mb-3">
                <label class="form-label">Category</label>
                <select class="form-select" v-model="newProduct.category_id">
                    <option value="" disabled>Choose category</option>

                    <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>

            <!-- Color -->
            <div class="mb-3">
                <label class="form-label">Color</label>
                <input type="text" class="form-control" v-model="newProduct.color" />
            </div>

            <!-- Price -->
            <div class="mb-3">
                <label class="form-label">Price (SEK)</label>
                <input type="number" class="form-control" v-model="newProduct.price" />
            </div>

            <!-- Amount -->
            <div class="mb-4">
                <label class="form-label">Amount</label>
                <input type="number" class="form-control" v-model="newProduct.amount" />
            </div>

            <!-- Buttons to save or cancel -->
            <div class="d-flex gap-2">
                <button type="submit" class="btn btn-success">
                    <i class="fas fa-save me-1"></i>
                    Save Product
                </button>

                <RouterLink :to="{ name: 'products' }" class="btn btn-outline-secondary">
                    Cancel
                </RouterLink>
            </div>
        </form>
        <!-- User feedback -->
        <div class="user-feedback-container">
            <p class="user-feedback" v-if="error">{{ error }}</p>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(["refreshTable"]);

const newProduct = ref({
    name: "",
    description: "",
    category_id: "",
    color: "",
    price: "",
    amount: "",
});

const categories = ref([]);
const error = ref("");

// Fetch categories from the API to populate select elements
const getCategories = async () => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/categories", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (!res.ok) {
            throw new Error("Failed to fetch categories");
        }

        categories.value = await res.json();
    } catch (err) {
        console.error(err);
    }
};


onMounted(getCategories);

// Send new product to the API
const addProduct = async () => {
    if (
        !newProduct.value.name ||
        !newProduct.value.description ||
        !newProduct.value.category_id ||
        !newProduct.value.color ||
        !newProduct.value.price ||
        !newProduct.value.amount
    ) {
        error.value = "Fyll i samtliga fält";
        return;
    }

    error.value = "";

    try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                ...newProduct.value,
                price: Number(newProduct.value.price),
                amount: Number(newProduct.value.amount)
            }),
        });

        if (res.ok) {
            emit("refreshTable");

            newProduct.value = {
                name: "",
                description: "",
                category_id: "",
                color: "",
                price: "",
                amount: "",
            };
        }
    } catch (err) {
        console.log("Error:", err);
    }
};
</script>
<style scoped></style>
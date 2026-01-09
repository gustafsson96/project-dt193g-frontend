<template>
    <div class="container mt-5 mb-5" style="max-width: 600px;">
        <h1 class="h2 mb-3">Add Product</h1>
        <div v-if="success" class="alert alert-success text-center mb-4">
            {{ success }}
        </div>

        <form @submit.prevent="addProduct">
            <!-- Product name -->
            <div class="mb-3">
                <label class="form-label">Product Name</label>
                <input type="text" class="form-control" v-model="newProduct.name" />
                <div v-if="errors.name" class="text-danger small">{{ errors.name }}</div>
            </div>

            <!-- Description -->
            <div class="mb-3">
                <label class="form-label">Description</label>
                <input type="text" class="form-control" v-model="newProduct.description" />
                <div v-if="errors.description" class="text-danger small">{{ errors.description }}</div>
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
                <div v-if="errors.category_id" class="text-danger small">{{ errors.category_id }}</div>
            </div>

            <!-- Color -->
            <div class="mb-3">
                <label class="form-label">Color</label>
                <input type="text" class="form-control" v-model="newProduct.color" />
                <div v-if="errors.color" class="text-danger small">{{ errors.color }}</div>
            </div>

            <!-- Price -->
            <div class="mb-3">
                <label class="form-label">Price (USD $)</label>
                <input type="number" step="0.01" class="form-control" v-model="newProduct.price" />
                <div v-if="errors.price" class="text-danger small">{{ errors.price }}</div>
            </div>

            <!-- Amount -->
            <div class="mb-4">
                <label class="form-label">Amount</label>
                <input type="number" class="form-control" v-model="newProduct.amount" />
                <div v-if="errors.amount" class="text-danger small">{{ errors.amount }}</div>
            </div>

            <!-- Error message -->
            <p v-if="errors.general" class="text-danger text-center">
                {{ errors.general }}
            </p>


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

// Reactive variables for form fields
const errors = ref({
    name: "",
    description: "",
    category_id: "",
    color: "",
    price: "",
    amount: "",
    general: ""
});
const success = ref('');

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

// Frontend validation
function validateForm() {
    let valid = true;

    // Reset previous errors
    errors.value.name = "";
    errors.value.description = "";
    errors.value.category_id = "";
    errors.value.color = "";
    errors.value.price = "";
    errors.value.amount = "";
    errors.value.general = "";

    // Name
    if (!newProduct.value.name || newProduct.value.name.length < 3 || newProduct.value.name.length > 100) {
        errors.value.name = "Name must be at least 3 characters";
        valid = false;
    }

    // Description
    if (!newProduct.value.description || newProduct.value.description.length < 3 || newProduct.value.description.length > 1000) {
        errors.value.description = "Description must at least 3 characters";
        valid = false;
    }

    // Category
    if (!newProduct.value.category_id || isNaN(Number(newProduct.value.category_id))) {
        errors.value.category_id = "Please select a valid category";
        valid = false;
    }

    // Color
    if (!newProduct.value.color || newProduct.value.color.length < 3) {
        errors.value.color = "Color must be at least 3 characters";
        valid = false;
    }

    // Price
    if (newProduct.value.price === "" || isNaN(Number(newProduct.value.price))) {
        errors.value.price = "Price must be a number";
        valid = false;
    }

    // Amount
    if (newProduct.value.amount === "" || isNaN(Number(newProduct.value.amount))) {
        errors.value.amount = "Amount must be a number";
        valid = false;
    }

    return valid;
}

// Send new product to the API
const addProduct = async () => {
    if (!validateForm()) return;

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
        success.value = 'Product created successfully';

        // Hide message after 2.5 seconds
        setTimeout(() => {
            success.value = "";
        }, 2500);
    } catch (err) {
        console.log(err);
        errors.value.general = "Failed to connect to server";
    }
};
</script>
<style scoped></style>
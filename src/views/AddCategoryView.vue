<template>
  <div class="container mt-5 mb-5" style="max-width: 600px;">
    <h1 class="h2 mb-3">Add Category</h1>
    <div v-if="success" class="alert alert-success text-center mb-4">
      {{ success }}
    </div>
    <form @submit.prevent="addCategory">
      <!-- Category name -->
      <div class="mb-3">
        <label class="form-label">Category Name</label>
        <input type="text" class="form-control" v-model="newCategory.name" />
        <div v-if="errors.name" class="text-danger small">{{ errors.name }}</div>
      </div>

      <!-- Description -->
      <div class="mb-4">
        <label class="form-label">Description</label>
        <textarea class="form-control" rows="4" placeholder="Describe the category..."
          v-model="newCategory.description"></textarea>
        <div v-if="errors.description" class="text-danger small">{{ errors.description }}</div>
      </div>

      <!-- Buttons to save or cancel -->
      <div class="d-flex gap-2">
        <button type="submit" class="btn btn-success">
          <i class="fas fa-save me-1"></i>
          Save Category
        </button>

        <RouterLink :to="{ name: 'categories' }" class="btn btn-outline-secondary">
          Back to Categories
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(["refreshTable"]);

const newCategory = ref({
  name: "",
  description: ""
});

// Reactive variables for form fields
const errors = ref({
  name: "",
  description: "",
});
const success = ref('');

// Frontend validation
function validateForm() {
  let valid = true;

  // Reset previous errors manually
  errors.value.name = "";
  errors.value.description = "";
  errors.value.general = "";

  // Name
  if (!newCategory.value.name || newCategory.value.name.length < 3 || newCategory.value.name.length > 100) {
    errors.value.name = "Name must be at least 3 characters";
    valid = false;
  }

  // Description
  if (!newCategory.value.description || newCategory.value.description.length > 255) {
  errors.value.description = "Description must be between 3 and 255 characters";
  valid = false;
}

  return valid;
}

// Send new product to the API
const addCategory = async () => {
  if (!validateForm()) return;

  try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        ...newCategory.value
      })
    });

    if (res.ok) {
      emit("refreshTable");

      // Reset form
      newCategory.value = {
        name: "",
        description: ""
      };

      // Success message
      success.value = "Category created successfully";

      // Hide message after 2.5 seconds
      setTimeout(() => {
        success.value = "";
      }, 2500);
    }
  } catch (err) {
    console.log("Error:", err);
  }
};
</script>
<style scoped></style>
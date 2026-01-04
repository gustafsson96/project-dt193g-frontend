<template>
    <h1>Add Category</h1>
      <div class="container mt-5" style="max-width: 600px;">
    <h2 class="mb-4">Add Category</h2>

    <form @submit.prevent="addCategory">
      <!-- Category name -->
      <div class="mb-3">
        <label class="form-label">Category Name</label>
        <input type="text" class="form-control" v-model="newCategory.name" />
      </div>

      <!-- Description -->
      <div class="mb-4">
        <label class="form-label">Description</label>
        <textarea
          class="form-control"
          rows="4"
          placeholder="Describe the category..." v-model="newCategory.description"
        ></textarea>
      </div>

      <!-- Buttons to save or cancel -->
      <div class="d-flex gap-2">
        <button type="submit" class="btn btn-success">
          <i class="fas fa-save me-1"></i>
          Save Category
        </button>

        <RouterLink :to="{ name: 'categories' }" class="btn btn-outline-secondary">
          Cancel
        </RouterLink>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(["refreshTable"]);

const newCategory = ref({
    name: "",
    description: ""
});

const error = ref("");

// Send new product to the API
const addCategory = async () => {
    if (
        !newCategory.value.name ||
        !newCategory.value.description
    ) {
        error.value = "Fyll i samtliga fält";
        return;
    }

    error.value = "";

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

            newCategory.value = {
                name: "",
                description: ""
            };
        }
    } catch (err) {
        console.log("Error:", err);
    }
};
</script>
<style scoped>

</style>
<template>
  <!-- Bootstrap card for a single category -->
  <div class="card mb-3">
    <div class="card-body">
      <!-- Name -->
      <h5 class="card-title"> {{ category.name }}</h5>
      <!-- Description -->
      <p class="card-text text-muted">
        {{ category.description }}
      </p>

      <!-- Buttons to edit, show products and delete -->
      <div class="d-flex gap-3">
        <button class="btn btn-sm btn-success" @click="openEditModal">
          <i class="fas fa-edit me-1"></i>
          Edit
        </button>

        <button class="btn btn-sm btn-primary" @click="goToProducts">
          <i class="fas fa-box-open me-1"></i>
          Products
        </button>

        <button class="btn btn-sm btn-danger" @click="deleteCategory">
          <i class="fas fa-trash me-1"></i>
          Delete
        </button>
      </div>
    </div>
    <EditCategoryModal v-if="showEditModal" :category="category" @close="showEditModal = false" @saved="handleSaved" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import EditCategoryModal from './EditCategoryModal.vue';

// Router instance
const router = useRouter();

// Define props to recieve a category object from parent CategoryListView
const props = defineProps({
  category: Object
})

// Emit event to parent to refresh after delete
const emit = defineEmits(['refreshCategories']);

// Modal visibility
const showEditModal = ref(false);

// Open the modal to edit
const openEditModal = () => {
  showEditModal.value = true;
};

// Display products for a specific category
const goToProducts = () => {
  router.push({
    name: 'products',
    query: { category_id: props.category.id }
  });
};

// Hide modal and update category item after editing
const handleSaved = (updatedCategory) => {
  showEditModal.value = false;

  props.category.name = updatedCategory.name;
  props.category.description = updatedCategory.description;

  // Tell parent to refresh category list and show message
  emit('refreshCategories', { message: 'Category updated successfully' });
};

// Delete a category based on id
const deleteCategory = async () => {
  const token = localStorage.getItem('token');

  if (!confirm(`Are you sure you want to delete ${props.category.name}?`)) return;

  try {
    const res = await fetch(`https://project-dt193g-backend.onrender.com/${props.category.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!res.ok) {
      console.error('Failed to delete category', await res.json());
    } else {
      // Tell parent to refresh category list and show message
      emit('refreshCategories', { message: 'Category deleted successfully' });
    }
  } catch (err) {
    console.error('Error deleting category:', err);
  }
};

</script>
<style></style>
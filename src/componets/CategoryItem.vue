<template>
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title"> {{ category.name }}</h5>
            <p class="card-text text-muted">
                {{ category.description }}
            </p>

            <div class="d-flex gap-3">
                <button class="btn btn-sm btn-success" @click="openEditModal">
                    <i class="fas fa-edit me-1"></i>
                    Edit
                </button>

                <button class="btn btn-sm btn-primary">
                    <i class="fas fa-box-open me-1"></i>
                    Products
                </button>

                <button class="btn btn-sm btn-danger" @click="deleteCategory">
                    <i class="fas fa-trash me-1"></i>
                    Delete
                </button>
            </div>
        </div>
        <EditCategoryModal v-if="showEditModal" :category="category" @close="showEditModal = false"
            @saved="handleSaved" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import EditCategoryModal from './EditCategoryModal.vue';

// Define props to recieve a category object from parent CategoryListView
const props = defineProps({
  category: Object
})

// Emit event to parent to refresh after delete
const emit = defineEmits(['refreshCategories']);

// Modal visibility
const showEditModal = ref(false);

// Open edit modal
const openEditModal = () => {
  showEditModal.value = true;
};

// Hide modal and update category item after editing
const handleSaved = (updatedCategory) => {
  showEditModal.value = false;

  props.category.name = updatedCategory.name;
  props.category.description = updatedCategory.description;
};

</script>
<style></style>
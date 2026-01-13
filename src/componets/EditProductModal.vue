<template>
  <!-- Modal for editing a product -->
  <div class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0,0,0,0.5);">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Product</h5>
          <button type="button" class="btn-close" @click="close"></button>
        </div>

        <!-- Prepopulated form -->
        <div class="modal-body">
          <form @submit.prevent="saveChanges">

            <!-- Product name -->
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input v-model="form.name" type="text" class="form-control" required />
            </div>

            <!-- Description -->
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea v-model="form.description" class="form-control" rows="2" required></textarea>
            </div>

            <!-- Category name -->
            <div class="mb-3">
              <label class="form-label">Category</label>
              <select v-model.number="form.category_id" class="form-select" required>
                <option v-for="category in props.categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
            </div>

            <!-- Color -->
            <div class="mb-3">
              <label class="form-label">Color</label>
              <input v-model="form.color" type="text" class="form-control" required />
            </div>

            <!-- Price -->
            <div class="mb-3">
              <label class="form-label">Price</label>
              <input v-model.number="form.price" type="number" step="0.01" class="form-control" required />
            </div>

            <!-- Amount -->
            <div class="mb-3">
              <label class="form-label">Amount</label>
              <input v-model.number="form.amount" type="number" min="0" class="form-control" required />
            </div>

            <!-- Save and cancel buttons -->
            <div class="modal-footer">
              <button type="submit" class="btn btn-success">Save</button>
              <button type="button" class="btn btn-secondary" @click="close">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';

// Props received from parent ProductRow
const props = defineProps({
  product: Object,
  categories: Array,
  show: Boolean
});

// Emit events to parent for closing modal and saving changes
const emit = defineEmits(['close', 'saved']);

// Reactive form object 
const form = reactive({
  name: '',
  description: '',
  category_id: 0,
  color: '',
  price: 0,
  amount: 0
});

// Populate form with the selected products information
watch(
  () => props.product,
  (newProduct) => {
    if (newProduct) Object.assign(form, newProduct);
  },
  { immediate: true }
);

// Close without saving if cancel is clicked
const close = () => emit('close');

// Save changes to backend via PUT 
const saveChanges = async () => {
  const token = localStorage.getItem('token');

  // Payload to ensure correct types 
    const payload = {
    name: form.name,
    description: form.description,
    price: Number(form.price),
    category_id: Number(form.category_id),
    color: form.color,
    amount: Number(form.amount)
  };

  try {
    const res = await fetch(`https://project-dt193g-backend.onrender.com/products/${form.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      console.error('Failed to update product', await res.json());
    } else {
      // Make parent aware of update
      const updatedProduct = await res.json();
      emit('saved', updatedProduct);
      close();
    }
  } catch (err) {
    console.error('Error updating product:', err);
  }
};
</script>

<style scoped>

</style>
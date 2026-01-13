<template>
    <!-- Modal to edit a category -->
    <div class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0,0,0,0.5);">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Category</h5>
                    <button type="button" class="btn-close" @click="close"></button>
                </div>
                <!-- Prepopulated form -->
                <div class="modal-body">
                    <form @submit.prevent="saveChanges">
                        <!-- Name-->
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input v-model="form.name" type="text" class="form-control" required />
                        </div>
                        <!-- Description-->
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea v-model="form.description" class="form-control" rows="3"></textarea>
                        </div>
                        <!-- Buttons to save or close -->
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

// Props received from parent CategoryItem
const props = defineProps({
    category: Object
});

// Emit events to parent for closing modal and saving changes
const emit = defineEmits(['close', 'saved']);

// Reactive form object 
const form = reactive({
    name: '',
    description: ''
});

// Populate form with the selected category information
watch(
    () => props.category,
    (newCategory) => {
        if (newCategory) {
            form.name = newCategory.name;
            form.description = newCategory.description;
        }
    },
    // Run when the watcher is created
    { immediate: true }
);

// Close without saving if cancel is clicked
const close = () => emit('close');

// Save changes to backend via PUT 
const saveChanges = async () => {
    const token = localStorage.getItem('token');

    const payload = {
        name: form.name,
        description: form.description
    };

    try {
        const res = await fetch(`https://project-dt193g-backend.onrender.com/categories/${props.category.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            console.error('Failed to update category', await res.json());
        } else {
            const updatedCategory = await res.json();
            emit('saved', updatedCategory);
            close();
        }
    } catch (err) {
        console.error('Error updating category:', err);
    }
};
</script>

<style scoped></style>

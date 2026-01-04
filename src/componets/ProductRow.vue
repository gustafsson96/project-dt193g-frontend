<template>
    <tr>
        <td>Number</td>
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
        <td>{{ categoryName }}</td>
        <td>{{ product.color }}</td>
        <td>{{ product.price }}</td>
        <td>
            <div class="d-flex gap-2 justify-content-center align-items-center">
                <!-- Stock control with plus and minus icons -->
                <button class="stock-btn" @click="decreaseStock">-</button>
                {{ localAmount }}
                <button class="stock-btn" @click="increaseStock">+</button>
            </div>
        </td>
        <td class="d-flex gap-2 justify-content-center align-items-center">
            <!-- Edit and delete buttons -->
            <button class="btn btn-sm btn-success" @click="openEditModal">Edit</button>
            <button class="btn btn-sm btn-danger" @click="deleteProduct">Delete</button>
        </td>
        <EditProductModal v-if="showEditModal" :product="product" :categories="categories"
            @close="showEditModal = false" @saved="handleSaved" />
    </tr>
</template>
<script setup>
import { ref, computed } from 'vue';
import EditProductModal from './EditProductModal.vue';

// Emit event to parent for update and delete
const emit = defineEmits(['refreshTable']);

// Define props to recieve a product object from parent ProductListView
const props = defineProps({
    product: Object,
    categories: Array
})

// Declare local reactive variable for amout for smoother updates
const localAmount = ref(props.product.amount)

// Modal visibility
const showEditModal = ref(false);

// Compute category name from category_id to display in table
const categoryName = computed(() => {
    const category = props.categories.find(c => c.id === props.product.category_id);
    return category ? category.name : '';
})

// Increase stock
const increaseStock = async () => {
    await updateAmount(localAmount.value + 1);
};

// Decrease stock
const decreaseStock = async () => {
    if (localAmount.value > 0) {
        await updateAmount(localAmount.value - 1);
    }
};

// Update amount via PATCH request
const updateAmount = async (newAmount) => {
    const token = localStorage.getItem('token');

    try {
        const res = await fetch(`http://localhost:5000/products/${props.product.id}/amount`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ amount: newAmount })
        });

        if (!res.ok) {
            console.error('Failed to update stock', await res.json());
        } else {
            localAmount.value = newAmount;
        }
    } catch (err) {
        console.error('Error updating stock:', err);
    }
};

// Open edit modal
const openEditModal = () => {
    showEditModal.value = true;
};

// Hide modal and update product row after editing
const handleSaved = (updatedProduct) => {
    // Close modal
    showEditModal.value = false;

    // Update local props reactively so table reflects changes right away
    props.product.name = updatedProduct.name;
    props.product.description = updatedProduct.description;
    props.product.category_id = updatedProduct.category_id;
    props.product.color = updatedProduct.color;
    props.product.price = updatedProduct.price;
    props.product.amount = updatedProduct.amount;

    // Update the localAmount variable for accurate stock display
    localAmount.value = updatedProduct.amount;
};

// Delete a product based on id
const deleteProduct = async () => {
    const token = localStorage.getItem('token');

    if (!confirm(`Are you sure you want to delete ${props.product.name}?`)) return;

    try {
        const res = await fetch(`http://localhost:5000/products/${props.product.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (!res.ok) {
            console.error('Failed to delete product', await res.json());
        } else {
            // Tell parent to refresh products table
            emit('refreshTable');
        }
    } catch (err) {
        console.error('Error deleting product:', err);
    }
};

</script>
<style>
/* Custom made button for plus and minus */
.stock-btn {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f5f5f5;
    transition: background-color 0.2s, color 0.2s;
    padding: 0;
}

.stock-btn:hover {
    background-color: #e0e0e0;
}
</style>
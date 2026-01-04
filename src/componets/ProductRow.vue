<template>
    <tr>
        <td>Number</td>
        <td>{{ product.name }}</td>
        <td>{{ categoryName }}</td>
        <td>{{ product.color }}</td>
        <td>{{ product.price }}</td>
        <td>
            <div class="d-flex gap-2 justify-content-center align-items-center">
                <!-- Stock control with plus and minus icons -->
                <button class="stock-btn" @click="decreaseStock">-</button>
                {{ product.amount }}
                <button class="stock-btn" @click="increaseStock">+</button>
            </div>
        </td>
        <td class="d-flex gap-2 justify-content-center align-items-center">
            <!-- Edit and delete buttons -->
            <button class="btn btn-sm btn-success" @click="editProduct">Edit</button>
            <button class="btn btn-sm btn-danger" @click="deleteProduct">Delete</button>
        </td>
    </tr>
</template>
<script setup>
import { computed } from 'vue';

// Define props to recieve a product object from parent ProductListView
const props = defineProps({
    product: Object,
    categories: Array
})

// Compute category name from category_id to display in table
const categoryName = computed(() => {
    const category = props.categories.find(c => c.id === props.product.category_id);
    return category ? category.name : '';
})
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
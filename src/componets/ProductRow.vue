<template>
    <tr>
        <td>Number</td>
        <td>{{ product.name }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.color }}</td>
        <td>{{ product.price }}</td>
        <td class="text-center">
            <button class="btn btn-sm btn-outline-secondary me-2">
                <i class="fas fa-minus"></i>
            </button>
            <span class="mx-1">{{ product.amount }}</span>
            <button class="btn btn-sm btn-outline-secondary ms-2">
                <i class="fas fa-plus"></i>
            </button>
        </td>
    </tr>
</template>
<script setup>
    // Define props to recieve a product object from parent ProductListView
    const props = defineProps({
        product: Object
    })
</script>
<style></style>
<template>
    <tr>
        <td>Number</td>
        <td>{{ product.name }}</td>
        <td>{{ categoryName }}</td>
        <td>{{ product.color }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.amount }}</td>
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
    const categoryName = computed (() => {
        const category = props.categories.find (c => c.id === props.product.category_id);
        return category ? category.name : '';
    })
</script>
<style></style>
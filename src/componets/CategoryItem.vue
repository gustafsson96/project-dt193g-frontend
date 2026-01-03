<template>
    <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title"> {{ category.name }}</h5>
                <p class="card-text text-muted">
                    {{ category.description }}
                </p>

                <div class="d-flex gap-3">
                    <button class="btn btn-sm btn-outline-primary">
                        <i class="fas fa-edit me-1"></i>
                        Edit
                    </button>

                    <button class="btn btn-sm btn-outline-success">
                        <i class="fas fa-box-open me-1"></i>
                        Products
                    </button>

                    <button class="btn btn-sm btn-outline-danger">
                        <i class="fas fa-trash me-1"></i>
                        Delete
                    </button>
                </div>
            </div>
        </div>
</template>
<script setup>
    // Define props to recieve a product object from parent ProductListView
    const props = defineProps({
        category: Object
    })
</script>
<style></style>
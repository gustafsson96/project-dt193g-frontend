<template>
    <h1>Category List</h1>
    <div class="container mt-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="mb-0">Categories</h2>
            <RouterLink to="/categories/add" class="btn btn-success">
                <i class="fas fa-plus me-1"></i>
                Add Category
            </RouterLink>
        </div>
        <!-- Category list -->
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Clothing</h5>
                <p class="card-text text-muted">
                    Clothing items such as t-shirts, hoodies and jackets.
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

        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Accessories</h5>
                <p class="card-text text-muted">
                    Mugs, bags and other accessories.
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

        <!-- Back to start view button -->
        <div class="text-center mt-4">
            <RouterLink to="/start" class="btn btn-outline-primary">
                Back to Start
            </RouterLink>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped></style>
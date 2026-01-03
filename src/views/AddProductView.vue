<template>
    <h1>Add Product</h1>
    <div class="container mt-5" style="max-width: 600px;">
        <h2 class="mb-4">Add Product</h2>

        <form>
            <!-- Product name -->
            <div class="mb-3">
                <label class="form-label">Product Name</label>
                <input type="text" class="form-control" />
            </div>

            <!-- Category -->
            <div class="mb-3">
                <label class="form-label">Category</label>
                <select class="form-select">
                    <option selected disabled>Choose category</option>
                    <option>Clothing</option>
                    <option>Accessories</option>
                </select>
            </div>

            <!-- Color -->
            <div class="mb-3">
                <label class="form-label">Color</label>
                <input type="text" class="form-control" />
            </div>

            <!-- Price -->
            <div class="mb-3">
                <label class="form-label">Price (SEK)</label>
                <input type="number" class="form-control" />
            </div>

            <!-- Amount -->
            <div class="mb-4">
                <label class="form-label">Amount</label>
                <input type="number" class="form-control" />
            </div>

            <!-- Buttons to save or cancel -->
            <div class="d-flex gap-2">
                <button type="submit" class="btn btn-success">
                    <i class="fas fa-save me-1"></i>
                    Save Product
                </button>

                <RouterLink to="/products" class="btn btn-outline-secondary">
                    Cancel
                </RouterLink>
            </div>
        </form>
    </div>
</template>
<script setup>

</script>
<style scoped></style>
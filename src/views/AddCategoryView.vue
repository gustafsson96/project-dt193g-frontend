<template>
    <h1>Add Category</h1>
      <div class="container mt-5" style="max-width: 600px;">
    <h2 class="mb-4">Add Category</h2>

    <form>
      <!-- Category name -->
      <div class="mb-3">
        <label class="form-label">Category Name</label>
        <input type="text" class="form-control" />
      </div>

      <!-- Description -->
      <div class="mb-4">
        <label class="form-label">Description</label>
        <textarea
          class="form-control"
          rows="4"
          placeholder="Describe the category..."
        ></textarea>
      </div>

      <!-- Buttons to save or cancel -->
      <div class="d-flex gap-2">
        <button type="submit" class="btn btn-success">
          <i class="fas fa-save me-1"></i>
          Save Category
        </button>

        <RouterLink :to="{ name: 'categories' }" class="btn btn-outline-secondary">
          Cancel
        </RouterLink>
      </div>
    </form>
  </div>
</template>
<script setup>

</script>
<style scoped>

</style>
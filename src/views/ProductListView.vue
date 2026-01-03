<template>
    <h1>Products List</h1>
      <div class="container mt-5">
    <!-- Add product button -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Products</h2>
      <RouterLink to="/products/add" class="btn btn-success">
        <i class="fas fa-plus me-1"></i>
        Add Product
      </RouterLink>
    </div>

    <!-- Products table -->
    <div class="table-responsive">
      <table class="table table-striped table-bordered align-middle">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Color</th>
            <th>Price</th>
            <th class="text-center">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>T-Shirt</td>
            <td>Clothing</td>
            <td>Black</td>
            <td>199 kr</td>
            <td class="text-center">
              <button class="btn btn-sm btn-outline-secondary me-2">
                <i class="fas fa-minus"></i>
              </button>
              <span class="mx-1">10</span>
              <button class="btn btn-sm btn-outline-secondary ms-2">
                <i class="fas fa-plus"></i>
              </button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Mug</td>
            <td>Accessories</td>
            <td>White</td>
            <td>99 kr</td>
            <td class="text-center">
              <button class="btn btn-sm btn-outline-secondary me-2">
                <i class="fas fa-minus"></i>
              </button>
              <span class="mx-1">25</span>
              <button class="btn btn-sm btn-outline-secondary ms-2">
                <i class="fas fa-plus"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
<style scoped>

</style>
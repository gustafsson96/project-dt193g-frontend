<template>
    <div class="d-flex justify-content-center align-items-center mt-5 mb-4">
        <div class="card p-4" style="width: 350px; border: 1px solid #dee2e6;">
            <!-- Profile Icon -->
            <div class="text-center mb-3">
                <i class="fas fa-user-circle fa-5x text-primary"></i>
            </div>

            <!-- Name -->
            <h3 class="text-center mb-1">Julia Gustafsson</h3>
            <p class="text-center text-muted mb-3">Admin</p>

            <hr />

            <!-- Contact info -->
            <div class="mb-2 d-flex align-items-center">
                <i class="fas fa-envelope me-2 text-secondary"></i>
                <span>julia@example.com</span>
                <i class="fas fa-edit ms-auto text-primary"></i>
            </div>

            <div class="mb-2 d-flex align-items-center">
                <i class="fas fa-phone me-2 text-secondary"></i>
                <span>+46 70 123 45 67</span>
                <i class="fas fa-edit ms-auto text-primary"></i>
            </div>

            <div class="d-flex align-items-center">
                <i class="fas fa-map-marker-alt me-2 text-secondary"></i>
                <span>123 Test Street, Testtown</span>
                <i class="fas fa-edit ms-auto text-primary"></i>
            </div>
        </div>
    </div>
    <!-- Back to start view button -->
    <div class="text-center mt-1">
        <RouterLink :to="{ name: 'start' }" class="btn btn-outline-primary">
            Back to Start
        </RouterLink>
    </div>
</template>
<script setup>

</script>
<style scoped></style>
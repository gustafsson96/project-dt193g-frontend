<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="row g-3" style="max-width: 600px; width: 100%;">
            <!-- First row with two buttons -->
            <!-- Product button -->
            <div class="col-12 col-md-6">
                <RouterLink :to="{ name: 'products' }"
                    class="btn btn-lg w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
                    style="background-color: #0d6efd; min-height: 120px;">
                    <i class="fas fa-box fa-2x mb-2"></i>
                    Products
                </RouterLink>
            </div>
            <!-- Category button -->
            <div class="col-12 col-md-6">
                <RouterLink :to="{ name: 'categories' }"
                    class="btn btn-lg w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
                    style="background-color: #198754; min-height: 120px;">
                    <i class="fas fa-tags fa-2x mb-2"></i>
                    Categories
                </RouterLink>
            </div>
            <!-- Second row with two buttons -->
            <!-- Profile button-->
            <div class="col-12 col-md-6">
                <RouterLink :to="{ name: 'profile' }"
                    class="btn btn-lg w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
                    style="background-color: #fd7e14; min-height: 120px;">
                    <i class="fas fa-user fa-2x mb-2"></i>
                    Profile
                </RouterLink>
            </div>
            <!-- Logout button -->
            <div class="col-12 col-md-6">
                <button @click="handleLogout"
                    class="btn btn-lg w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
                    style="background-color: #dc3545; min-height: 120px;">
                    <i class="fas fa-sign-out-alt fa-2x mb-2"></i>
                    Sign Out
            </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Remove JWT token and redirect to login page
function handleLogout() {
    const confirmed = confirm('Are you sure you want to logout?');
    
    if (!confirmed) {
        return;
    }

    localStorage.removeItem('token')
    router.push({ name: 'login' })
}
</script>
<style scoped></style>
<template>
    <div class="container mt-5" style="max-width: 400px;">
        <h1 class="mb-4 text-center">Login</h1>

        <form>
            <!-- Username input field -->
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" id="username" class="form-control" />
            </div>

            <!-- Password input field -->
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" class="form-control" />
            </div>

            <!-- Submit button for login -->
            <button type="submit" class="btn btn-primary w-100">Login</button>
            <!-- Signup link -->
            <p class="mt-3 text-center">
                Don't have an account?
                <RouterLink :to= "{ name:'signup' }" class="text-decoration-none">Sign up</RouterLink>
            </p>
        </form>
    </div>
</template>
<script setup>

</script>
<style scoped></style>
<template>
    <div class="container mt-5" style="max-width: 500px;">
        <h2 class="mb-4">Sign Up</h2>
        <!-- Signup form -->
        <form>

            <!-- Username -->
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" id="username" class="form-control" />
            </div>

            <!-- First Name -->
            <div class="mb-3">
                <label for="f_name" class="form-label">First Name</label>
                <input type="text" id="f_name" class="form-control" />
            </div>

            <!-- Last Name -->
            <div class="mb-3">
                <label for="l_name" class="form-label">Last Name</label>
                <input type="text" id="l_name" class="form-control" />
            </div>

            <!-- Email -->
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" class="form-control" />
            </div>

            <!-- Phone -->
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="text" id="phone" class="form-control" />
            </div>

            <!-- Password -->
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" class="form-control" />
            </div>

            <div class="d-flex justify-content-between">
                <RouterLink to="/" class="btn btn-outline-secondary">
                    Cancel
                </RouterLink>
                <button type="submit" class="btn btn-primary">Sign Up</button>
            </div>
        </form>
    </div>
</template>
<script setup>

</script>
<style scoped></style>
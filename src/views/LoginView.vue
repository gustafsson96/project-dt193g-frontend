<template>
    <div class="container mt-5" style="max-width: 400px;">
        <h1 class="mb-4 text-center">Login</h1>
        <!-- Login form-->
        <form @submit.prevent="handleLogin">
            <!-- Username input field -->
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" id="username" class="form-control" v-model="username" />
                <div v-if="errors.username" class="text-danger small">{{ errors.username }}</div>
            </div>

            <!-- Password input field -->
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" class="form-control" v-model="password" />
                <div v-if="errors.password" class="text-danger small">{{ errors.password }}</div>
            </div>

            <!-- Error message -->
            <p v-if="errors.general" class="text-danger text-center">
                {{ errors.general }}
            </p>

            <!-- Submit button for login -->
            <button type="submit" class="btn btn-primary w-100">Login</button>
            <!-- Signup link -->
            <p class="mt-3 text-center">
                Don't have an account?
                <RouterLink :to="{ name: 'signup' }" class="text-decoration-none">Sign up</RouterLink>
            </p>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Router instance
const router = useRouter()

// Reactive variables for username and password
const username = ref('')
const password = ref('')

// Reactive variables for form fields
const errors = ref({
    username: '',
    password: '',
    general: ''
});

// Frontend validation
function validateForm() {
    // Reset previous errors
    errors.value.username = '';
    errors.value.password = '';
    errors.value.general = '';

    // Username
    if (!username.value) {
        errors.value.username = 'Username is required';
        return false;
    }

    // Password
    if (!password.value) {
        errors.value.password = 'Password is required';
        return false;
    }

    return true;
}

async function handleLogin() {
    if (!validateForm()) return;

    try {
        const res = await fetch('https://project-dt193g-backend.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        })

        const data = await res.json()

        if (!res.ok) {
            errors.value.general = data.error || 'Login failed'
            return
        }

        // Store JWT token
        localStorage.setItem('token', data.token)

        // Redirect to start view after login
        router.push('/start')

    } catch (err) {
        console.error(err)
        errors.value.general = 'Failed to connect to server'
    }
}
</script>
<style scoped></style>
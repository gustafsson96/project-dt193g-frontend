<template>
    <div class="container mt-5" style="max-width: 400px;">
        <h1 class="mb-4 text-center">Login</h1>

        <form @submit.prevent="handleLogin">
            <!-- Username input field -->
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" id="username" class="form-control" v-model="username" />
            </div>

            <!-- Password input field -->
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" class="form-control" v-model="password" />
            </div>

            <!-- Error message -->
            <p v-if="error" class="text-danger text-center">
                {{ error }}
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

const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref('')

async function handleLogin() {
    error.value = ''

    try {
        const res = await fetch('http://localhost:5000/login', {
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
            error.value = data.error || 'Login failed'
            return
        }

        // Store JWT token
        localStorage.setItem('token', data.token)

        // Redirect to start view after login
        router.push('/start')

    } catch (err) {
        console.error(err)
        error.value = 'Failed to connect to server'
    }
}
</script>
<style scoped></style>
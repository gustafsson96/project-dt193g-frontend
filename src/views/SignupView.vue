<template>
  <div class="container mt-5" style="max-width: 500px;">
    <h2 class="mb-4">Sign Up</h2>
    <!-- Signup form -->
    <form @submit.prevent="handleSignup">

      <!-- Username -->
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" id="username" class="form-control" v-model="username" />
      </div>

      <!-- First Name -->
      <div class="mb-3">
        <label for="f_name" class="form-label">First Name</label>
        <input type="text" id="f_name" class="form-control" v-model="f_name" />
      </div>

      <!-- Last Name -->
      <div class="mb-3">
        <label for="l_name" class="form-label">Last Name</label>
        <input type="text" id="l_name" class="form-control" v-model="l_name" />
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-control" v-model="email" />
      </div>

      <!-- Phone -->
      <div class="mb-3">
        <label for="phone" class="form-label">Phone</label>
        <input type="text" id="phone" class="form-control" v-model="phone" />
      </div>

      <!-- Password -->
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" class="form-control" v-model="password" />
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Reactive variables for form fields
const username = ref('');
const password = ref('');
const f_name = ref('');
const l_name = ref('');
const email = ref('');
const phone = ref('');

const error = ref('');
const success = ref('');

// Form submission handler
async function handleSignup() {
  error.value = '';
  success.value = '';

  try {
    const res = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
        f_name: f_name.value,
        l_name: l_name.value,
        email: email.value,
        phone: phone.value
      })
    });

    const data = await res.json();

    if (!res.ok) {
      error.value = data.error || 'Signup failed';
      return;
    }

    success.value = 'Account created successfully! Redirecting to login...';

    // Redirect to login
    setTimeout(() => router.push('/'), 1500);

  } catch (err) {
    console.error(err);
    error.value = 'Failed to connect to server';
  }
}
</script>
<style scoped></style>
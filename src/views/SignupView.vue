<template>
  <div class="container mt-5 mb-5" style="max-width: 500px;">
    <h1 class="h2 mb-4">Sign Up</h1>
    <!-- Signup form -->
    <form @submit.prevent="handleSignup">

      <!-- Username -->
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" id="username" class="form-control" v-model="username" />
        <div v-if="errors.username" class="text-danger small">{{ errors.username }}</div>
      </div>

      <!-- Password -->
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" class="form-control" v-model="password" />
        <div v-if="errors.password" class="text-danger small">{{ errors.password }}</div>
      </div>

      <!-- First Name -->
      <div class="mb-3">
        <label for="f_name" class="form-label">First Name</label>
        <input type="text" id="f_name" class="form-control" v-model="f_name" />
        <div v-if="errors.f_name" class="text-danger small">{{ errors.f_name }}</div>
      </div>

      <!-- Last Name -->
      <div class="mb-3">
        <label for="l_name" class="form-label">Last Name</label>
        <input type="text" id="l_name" class="form-control" v-model="l_name" />
        <div v-if="errors.l_name" class="text-danger small">{{ errors.l_name }}</div>
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-control" v-model="email" />
        <div v-if="errors.email" class="text-danger small">{{ errors.email }}</div>
      </div>

      <!-- Phone -->
      <div class="mb-5">
        <label for="phone" class="form-label">Phone</label>
        <input type="text" id="phone" class="form-control" v-model="phone" />
        <div v-if="errors.phone" class="text-danger small">{{ errors.phone }}</div>
      </div>

      <div v-if="success" class="alert alert-success text-center mb-4">
        {{ success }}
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

// Error messages per field
const errors = ref({
  username: '',
  password: '',
  f_name: '',
  l_name: '',
  email: '',
  phone: ''
});
const success = ref('');

// Frontend validation
function validateForm() {

  // Clear previous errors
  errors.value.username = '';
  errors.value.password = '';
  errors.value.f_name = '';
  errors.value.l_name = '';
  errors.value.email = '';
  errors.value.phone = '';
  success.value = '';

  let valid = true;

  // Username
  if (username.value.length < 3) {
    errors.value.username = 'Username must be at least 3 characters';
    valid = false;
  }

  // Password
  if (password.value.length < 6) {
    errors.value.password = 'Password must be at least 6 characters';
    valid = false;
  }

  // First name
  if (f_name.value.length < 2) {
    errors.value.f_name = 'First name must be at least 2 characters';
    valid = false;
  }

  // Last name
  if (l_name.value.length < 2) {
    errors.value.l_name = 'Last name must be at least 2 characters';
    valid = false;
  }

  // Email regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    errors.value.email = 'Please enter a valid email';
    valid = false;
  }

  // Phone number 
  if (phone.value.length < 10 || phone.value.length > 12 || !/^\d+$/.test(phone.value)) {
    errors.value.phone = 'Phone number must be between 10 and 12 numbers';
    valid = false;
  }

  return valid;
}

// Form submission handler
async function handleSignup() {
  // Check if frontend validated correct before sending form
  if (!validateForm()) return;

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
      errors.value = data.error || 'Signup failed';
      return;
    }

    success.value = 'Account created successfully! Redirecting to login...';

    // Redirect to login
    setTimeout(() => router.push('/'), 2000);

  } catch (err) {
    console.error(err);
    error.value = 'Failed to connect to server';
  }
}
</script>
<style scoped></style>
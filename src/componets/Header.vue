<template>
    <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/start">Start</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/products">Products</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/categories">Categories</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/profile">Profile</RouterLink>
                </li>
            </ul>
                  </div>
        </div>
    </nav>
</template>
<script>
import { RouterLink } from 'vue-router';
</script>
<style></style>
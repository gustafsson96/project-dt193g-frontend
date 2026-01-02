<template>
    <header>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/start">Start</RouterLink>
                </li>
                <li>
                    <RouterLink to="/products">Products</RouterLink>
                </li>
                <li>
                    <RouterLink to="/categories">Categories</RouterLink>
                </li>
                <li>
                    <RouterLink to="/profile">Profile</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
import { RouterLink } from 'vue-router';
</script>
<style></style>
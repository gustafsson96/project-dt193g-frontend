<template>
    <!-- Bootstrap menu of the application for main navigation -->
    <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ps-3">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/start" exact-active-class="active">Start</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/products" exact-active-class="active">Products</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/categories" exact-active-class="active">Categories</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/profile" exact-active-class="active">Profile</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
</script>
<style></style>
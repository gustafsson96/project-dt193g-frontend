<script setup>
import Header from './componets/Header.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<template>
  <!-- Hide main menu for login and signup forms -->
  <Header v-if="route.name !== 'login' && route.name !== 'signup'" />
  <RouterView />
</template>

<style scoped></style>

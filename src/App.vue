<script setup>
import Header from './componets/Header.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<template>
<Header v-if="route.name !== 'login' && route.name !== 'signup'" />
  <RouterView />
</template>

<style scoped></style>

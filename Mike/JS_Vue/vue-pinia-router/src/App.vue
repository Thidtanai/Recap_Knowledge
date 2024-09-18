<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <div>
      Page:
      <router-link to="/">Home</router-link>
      <router-link to="/profile" style="margin-left: 50px">Profile</router-link>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
</style>

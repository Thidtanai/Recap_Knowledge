<script setup>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>

<template>
  <div>
    <div>
      Hello Home
      <!-- <RouterLink :to="{ name: 'profile', query: { user_id: 1 } }"> -->
      <!-- <RouterLink :to="{ name: 'profile-edit', params: { id: 1 } }">
        <button>Home</button></RouterLink
      > -->
      <div>
        Your profile
        <div>Firstname: {{ userStore.firstname }}</div>
        <div>Lastname: {{ userStore.lastname }}</div>
        <div>Fullname: {{ userStore.fullname }}</div>
      </div>
    </div>
  </div>
</template>

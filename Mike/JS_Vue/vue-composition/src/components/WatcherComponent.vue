<script setup>
import { reactive, ref, watch, watchEffect } from "vue";

const fullname = ref("");
const lastname = ref("");
const upperFullname = ref("");
const formData = reactive({
  firstname: "",
  lastname: "",
});
const upperData = ref("");

watch([fullname, lastname], (newFullname, oldFullname) => {
  const text = `${newFullname[0]} ${newFullname[1]}`;
  upperFullname.value = text.toUpperCase();
});

watchEffect(() => {
  formData.firstname = fullname;
  formData.lastname = lastname;
  upperData.value = `${formData.firstname} ${formData.lastname}`;
});
</script>

<template>
  <div>
    <div>Fullname1: {{ upperFullname }}</div>
    <div>Fullname2: {{ upperData }}</div>
    <input type="text" v-model="fullname" />
    <input type="text" v-model="lastname" />
  </div>
</template>

<style></style>


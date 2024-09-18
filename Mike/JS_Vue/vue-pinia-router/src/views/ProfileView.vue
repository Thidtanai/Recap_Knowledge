<script setup>
import { onMounted, ref, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

// const route = useRoute();
const router = useRouter();
// Use store
const userStore = useUserStore();

const isUpdate = ref(true);
const firstname = ref("");
const lastname = ref("");

const backToHome = () => {
  router.push({ name: "home" });
};

onMounted(() => {
  firstname.value = userStore.firstname;
  lastname.value = userStore.lastname;
});

watch([firstname, lastname], (newData) => {
  if (newData[0] !== userStore.firstname || newData[1] !== userStore.lastname) {
    isUpdate.value = false;
  }
});

const updateProfile = () => {
  const formData = {
    firstname: firstname.value,
    lastname: lastname.value,
  };
  // Action to store
  userStore.changeName(formData);
  isUpdate.value = true;
};
</script>

<template>
  <div>
    <div>
      Profile from stores
      <div v-if="isUpdate" style="color: blue">Profile up to date</div>
      <div>First {{ userStore.firstname }}</div>
      <div>Last {{ userStore.lastname }}</div>
      <div>Full {{ userStore.fullname }}</div>
    </div>
    Profile Vue
    <div>Firstname <input type="text" v-model="firstname" /></div>
    <div>Lastname <input type="text" v-model="lastname" /></div>
    <button @click="updateProfile()">Update profile</button>
    <!-- <div>
      <router-link :to="{ name: 'home' }">
        <button>Back to home</button>
      </router-link>
      <button @click="backToHome()">Back to home</button>
    </div> -->
  </div>
</template>

<style>
</style>
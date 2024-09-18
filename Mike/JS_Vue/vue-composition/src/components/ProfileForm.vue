<script setup>
import { computed, onMounted, ref, watch } from "vue";

//data
const isLoading = ref(false);
const isUpdated = ref(false);
const isValid = ref(true);

const firstname = ref("");
const lastname = ref("");
const email = ref("");
const errors = ref({});

//props
defineProps({
  title: String,
});

//computed
const fullname = computed(() => {
  return `${firstname.value} ${lastname.value}`;
});

//methods
const updateProfile = async () => {
  isLoading.value = true;
  // จำลองการส่ง API
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isLoading.value = false;
  isUpdated.value = true;
};

const validateName = (name) => {
  const re = /\d/;
  return !re.test(name);
};

const validateEmail = (email) => {
  return email.includes("@");
};

//watch
watch([firstname, lastname, email], () => {
  isValid.value = true;
  isUpdated.value = false;
  errors.value = {};

  if (!validateName(firstname.value)) {
    isValid.value = false;
    errors.value.firstname = "firstname invalid";
  }

  if (!validateName(lastname.value)) {
    isValid.value = false;
    errors.value.lastname = "lastname invalid";
  }

  if (!validateEmail(email.value)) {
    isValid.value = false;
    errors.value.email = "email invalid";
  }
});

//mounted
onMounted(() => {
  firstname.value = "first";
  lastname.value = "last";
  email.value = "test@mail.com";
});
</script>

<template>
  <div class="container">
    <h1 style="color: green">{{ title }}</h1>
    <div>
      <div>Fullname: {{ fullname }}</div>
      <div>Email: {{ email }}</div>
    </div>
    <div>
      <div>Firstname:</div>
      <input type="text" v-model="firstname" />
      <div class="error">{{ errors.firstname }}</div>
    </div>
    <div>
      <div>Lastname:</div>
      <input type="text" v-model="lastname" />
      <div class="error">{{ errors.lastname }}</div>
    </div>
    <div>
      <div>Email:</div>
      <input type="text" v-model="email" />
      <div class="error">{{ errors.email }}</div>
    </div>
    <div v-if="isLoading" class="loading">Loading...</div>
    <button :disabled="!isValid" class="button" @click="updateProfile()">
      Update profile
    </button>
    <div v-if="isUpdated">Profile updated</div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

.container > div {
  width: 100%;
}

.button {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.loading {
  background-color: aquamarine;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin: 10px 0;
}

.error {
  color: red;
}

input {
  width: 80%;
}
</style>
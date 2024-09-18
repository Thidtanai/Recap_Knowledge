<script>
export default {
  data() {
    return {
      isLoading: false,
      isUpdated: false,
      isValid: false,
      firstname: "",
      lastname: "",
      email: "",
      errors: {},
    };
  },
  props: {
    title: String,
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`;
    },
  },
  methods: {
    async updateProfile() {
      this.isLoading = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.isLoading = false;
      this.isUpdated = true;
    },
    validateName(name) {
      const re = /\d/;
      return !re.test(name);
    },
    validateEmail(email) {
      return email.includes("@");
    },
  },
  watch: {
    firstname(newVal) {
      this.isUpdated = false;
      this.isValid = true;
      this.errors = {};
      if (!this.validateName(newVal)) {
        this.isValid = false;
        this.errors.firstname = "firstname invalid";
      }
    },
    lastname(newVal) {
      this.isUpdated = false;
      this.isValid = true;
      this.errors = {};
      if (!this.validateName(newVal)) {
        this.isValid = false;
        this.errors.firstname = "lastname invalid";
      }
    },
    email(newVal) {
      this.isUpdated = false;
      this.isValid = true;
      this.errors = {};
      if (!this.validateEmail(newVal)) {
        this.isValid = false;
        this.errors.firstname = "email invalid";
      }
    },
  },
  mounted() {
    this.firstname = "first";
    this.lastname = "last";
    this.email = "test@mail.com";
  },
};
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
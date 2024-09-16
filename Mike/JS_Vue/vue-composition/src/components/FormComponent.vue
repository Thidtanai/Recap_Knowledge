<script setup>
import { reactive } from "vue";

const genderList = ["Male", "Female", "Other"];
const interestList = ["Book", "Sport", "Music"];

const formData = reactive({
  interests: [],
});

const submitForm = () => {
  console.log(formData)
};
</script>

<template>
  <div>
    <div>
      <div>First name</div>
      <input type="text" name="firstname" v-model="formData.firstName" />
    </div>
    <div>
      <div>Last name</div>
      <input type="text" name="lastname" v-model="formData.lastName" />
    </div>
    <div>
      <div>Gender</div>
      <div v-for="gender in genderList" :key="gender">
        <input
          type="radio"
          name="gender"
          :value="gender"
          v-model="formData.gender"
        />
        {{ gender }}
      </div>
    </div>
    <div>
      <div>Interest</div>
      <div v-for="interest in interestList" :key="interest">
        <input
          type="checkbox"
          name="interest"
          :value="interest"
          v-model="formData.interests"
        />
        {{ interest }}
      </div>
    </div>
    <div>
      <div>Description</div>
      <textarea
        v-model="formData.description"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <button @click="submitForm()">submit</button>
  </div>
</template>

<style>
</style>
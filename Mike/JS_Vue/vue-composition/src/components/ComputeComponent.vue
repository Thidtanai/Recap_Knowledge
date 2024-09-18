<script setup>
import { computed, ref } from "vue";

const firstname = ref("");
const lastname = ref("");

const fullname = computed(() => {
  return `${firstname.value}  ${lastname.value}`;
});

const priceUSD = ref(1);
const exchangeRate = 35;
// const priceTHB = computed(() => {
//   return priceUSD.value * exchangeRate;
// });
const priceTHB = computed({
  get: () => {
    return priceUSD.value * exchangeRate;
  },
  set: (newValue) => {
    priceUSD.value = newValue / exchangeRate;
  },
});
</script>

<template>
  <div>
    <h1>computed</h1>
    <div>Fullname: {{ fullname }}</div>
    <div>
      Firstname <input type="text" v-model="firstname" /> Lastname
      <input type="text" v-model="lastname" />
    </div>
    <div>USD: {{ priceUSD }} THB: {{ priceTHB }}</div>
    <div>
      <div>THB <input type="text" v-model="priceTHB" /></div>
      <div>USD <input type="text" v-model="priceUSD" /></div>
    </div>
  </div>
</template>

<style scoped>
</style>

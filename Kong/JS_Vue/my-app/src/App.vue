<template>
  <section>
    <!-- Attribute binding -->
    <!-- <img v-bind:src="picture" v-bind:width="size" v-bind:height="size" /> -->
    <img :src="picture" :width="size" :height="size" />

    <!-- Interporation ดึงตัวแปรจาก data มาใช้งาน -->
    <h1>ชื่อ-นามสกุล : {{ getFullName() }}</h1>
    <h1>อายุ {{ age }} ปี</h1>

    <!-- v-html -->
    <p>ที่อยู่ <span v-html="address"></span></p>

    <a :href="social" target="_blank">Facebook</a>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstName: "Kong",
      lastName: "Ruksiam",
      age: 15,
      address: "<strong>กรุงเทพ</strong>",
      picture: "https://cdn-icons-png.flaticon.com/512/3685/3685367.png",
      size: 50,
      social: "https://www.facebook.com/Thidtanai-Kaewphet",
    };
  },
  methods: {
    getFullName() {
      //return this.firstName + " " + this.lastName
      return `${this.firstName + " " + this.lastName}`;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

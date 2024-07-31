<template>
  <section>
    <!-- Interporation ดึงตัวแปรจาก data มาใช้งาน -->
    <h1>ชื่อ-นามสกุล : {{ getFullName() }}</h1>
    <h1>อายุ {{ age }} ปี</h1>
    <!-- v-html -->
    <p>ที่อยู่ <span v-html="address"></span></p>
  </section>

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      firstName: "Kong",
      lastName: "Ruksiam",
      age: 15,
      address: "<strong>กรุงเทพ</strong>"
    }
  }, methods: {
    getFullName() {
      //return this.firstName + " " + this.lastName
      return `${this.firstName + " " + this.lastName}`
    }
  }

}
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

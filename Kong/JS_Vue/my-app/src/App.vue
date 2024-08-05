<template>
  <section>
    <!-- Attribute binding -->
    <!-- <img v-bind:src="picture" v-bind:width="size" v-bind:height="size" /> -->
    <img :src="picture" :width="size" :height="size" ref="imageEl" /><br />

    <!-- ป้อนชื่อเล่น : <input type="text" v-on:input="setNickName" /> -->
    <form @submit.prevent="submitForm">
      <lable>ป้อนชื่อเล่น: </lable>
      <!-- <input type="text" v-on:input="setNickName" ref="nickNameEl" /> -->
      <input type="text" ref="nickNameEl" />
      <button type="submit">บันทึก</button>
    </form>

    <!-- Interporation ดึงตัวแปรจาก data มาใช้งาน -->
    <h1>ชื่อ-นามสกุล : {{ getFullName() }}</h1>
    <h1>ชื่อเล่น : {{ nickName }}</h1>
    <h1>อายุ : {{ age }} ปี</h1>

    <!-- v-html -->
    <p>ที่อยู่ : <span v-html="address"></span></p>

    <p>Social: <a :href="social" target="_blank">Facebook</a></p>
    <p>งานอดิเรก:</p>
    <ul>
      <li>{{ hobby[0] }}</li>
      <li>{{ hobby[1] }}</li>
      <li>{{ hobby[2] }}</li>
    </ul>
    <p>ข้อมูลพื้นฐาน:</p>
    <ul>
      <li>เพศ: {{ general.gender }}</li>
      <li>น้ำหนัก: {{ general.weight }} kg</li>
      <li>ส่วนสูง: {{ general.height }} cm</li>
      <li>โรคประจำตัว: {{ general.status }}</li>
    </ul>

    <!-- Event -->
    <!-- <button v-on:click="showData">คลิกเพื่อดูข้อมูล</button> -->
    <button @click="showData()">คลิกเพื่อดูข้อมูล</button>
    <button @click.ctrl="increment(10)">เพิ่ม</button>
    <button @click.middle="decrement(5)">ลด</button>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstName: "Kong",
      lastName: "Ruksiam",
      nickName: "",
      age: 15,
      address: "<strong>กรุงเทพ</strong>",
      picture: "https://cdn-icons-png.flaticon.com/512/3685/3685367.png",
      size: 50,
      social: "https://www.facebook.com/Thidtanai-Kaewphet",
      hobby: ["ทำสวน", "เล่นเกม", "ฟังเพลง"],
      general: {
        gender: "ชาย",
        weight: 70.4,
        height: 170,
        status: false,
      },
    };
  },
  methods: {
    getFullName() {
      //return this.firstName + " " + this.lastName
      return `${this.firstName + " " + this.lastName}`;
    },
    showData() {
      alert(this.firstName);
    },
    increment(value) {
      this.age += value;
    },
    decrement(value) {
      this.age -= value;
    },
    // setNickName(event) {
    //   this.nickName = event.target.value;
    // },
    submitForm() {
      //e.preventDefault();
      alert("บันทึกชื่อเล่นเรียบร้อย");
      this.nickName = this.$refs.nickNameEl.value;
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

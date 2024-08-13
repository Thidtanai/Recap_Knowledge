<template>
  <section>
    <!-- Attribute binding -->
    <!-- <img v-bind:src="picture" v-bind:width="size" v-bind:height="size" /> -->
    <img :src="picture" :width="size" :height="size" ref="imageEl" /><br />

    <!-- ป้อนชื่อเล่น : <input type="text" v-on:input="setNickName" /> -->
    <!-- <form @submit.prevent="submitForm">
      <lable>ป้อนชื่อเล่น: </lable>
      <input type="text" v-on:input="setNickName" ref="nickNameEl" />
      <input type="text" ref="nickNameEl" />
      <button type="submit">บันทึก</button>
    </form> -->

    <!-- Interporation ดึงตัวแปรจาก data มาใช้งาน -->
    <h1>ชื่อ-นามสกุล : {{ getFullName }}</h1>
    <!-- <h1>ชื่อเล่น : {{ nickName }}</h1> -->
    <h1>อายุ : {{ age }} ปี</h1>
    <h1>เงินเดือน : {{ salary }} บาท</h1>
    <h1>ตำแหน่งงาน : {{ getDepartment }}</h1>
    <button @click="addSalary(5000)">เพิ่มเงินเดือน</button>

    <!-- v-show -->
    <button @click="toggleVisible()">
      {{ isVisible ? "ซ่อน" : "แสดง" }}รายละเอียด
    </button>
    <article v-show="isVisible">
      <!-- v-html -->
      <p>ที่อยู่ : <span v-html="address"></span></p>

      <p>Social: <a :href="social" target="_blank">Facebook</a></p>
      <p v-if="hobby.length === 0">ไม่มีงานอดิเรก</p>
      <div v-else>
        <p>งานอดิเรก:</p>
        <ul>
          <!-- v-for -->
          <li v-for="(item, index) in hobby" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <p>ข้อมูลพื้นฐาน:</p>
      <ul>
        <li v-for="(item, key) in general" :key="key">
          {{ key }} : {{ item }}
        </li>
      </ul>
    </article>

    <!-- Event -->
    <!-- <button v-on:click="showData">คลิกเพื่อดูข้อมูล</button> -->
    <!-- <button @click="showData()">คลิกเพื่อดูข้อมูล</button>
    <button @click.ctrl="increment(10)">เพิ่ม</button>
    <button @click.middle="decrement(5)">ลด</button> -->
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstName: "Kong",
      lastName: "Ruksiam",
      // nickName: "",
      age: 15,
      address: "<strong>กรุงเทพ</strong>",
      picture: "https://cdn-icons-png.flaticon.com/512/3685/3685367.png",
      size: 50,
      social: "https://www.facebook.com/Thidtanai-Kaewphet",
      hobby: ["ทำสวน", "เล่นเกม", "ฟังเพลง", "ดูหนัง"],
      general: {
        gender: "ชาย",
        weight: 70.4,
        height: 170,
        status: false,
      },
      isVisible: false,
      salary: 18000,
    };
  },
  methods: {
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
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
    addSalary(value) {
      this.salary += value;
    },
  },
  computed: {
    getFullName() {
      //return this.firstName + " " + this.lastName
      return `${this.firstName + " " + this.lastName}`;
    },
    getIncome() {
      return this.salary * 12;
    },
    getDepartment() {
      return this.salary >= 35000 ? "Project manager" : "Programmer";
    },
  },
  watch: {
    salary(value) {
      if (value > 50000) {
        alert("เงินเดือนไม่ควรเกิน 50,000 บาท");
        setTimeout(() => {
          this.salary = 50000;
        }, 2000);
      }
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

<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="emp-name">ชื่อพนักงาน</label>
      <input type="text" v-model.trim="employee.name" />
    </div>
    <div class="form-control">
      <label for="salary">เงินเดือน</label>
      <input type="number" v-model="employee.salary" />
    </div>
    <div class="form-control">
      <label for="department">ตำแหน่งงาน</label>
      <select name="" id="">
        <option value="Seller">ฝ่ายขาย</option>
        <option value="Business">ฝ่ายการเงิน</option>
        <option value="Programmer">ฝ่ายนักพัฒนา</option>
        <option value="Graphic Design">ฝ่ายออกแบบ</option>
      </select>
    </div>
    <div class="form-control">
      <h2>เพศ</h2>
      <div>
        <input type="radio" value="ชาย" v-model="employee.gender" />
        <label for="gender-name">ชาย</label>
        <input type="radio" value="หญิง" v-model="employee.gender" />
        <label for="gender-name">หญิง</label>
      </div>
      <input type="number" v-model="employee.salary" />
    </div>
    <div class="form-control">
      <h2>ทักษะด้านภาษา</h2>
      <div>
        <input type="checkbox" value="ภาษาอังกฤษ" v-model="employee.skill" />
        <label for="skill">ภาษาอังกฤษ</label>
        <input type="checkbox" value="ภาษาจีน" v-model="employee.skill" />
        <label for="skill">ภาษาจีน</label>
        <input type="checkbox" value="ภาษาญี่ปุ่น" v-model="employee.skill" />
        <label for="skill">ภาษาญี่ปุ่น</label>
      </div>
      <input type="number" v-model="employee.salary" />
    </div>
    <div>
      <button>บันทึกข้อมูล</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      employee: {
        name: "",
        salary: 0,
        department: "Seller",
        gender: "",
        skill: [],
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("form", this.employee);
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  background: #fff;
}
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
}
input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}
button {
  font: inherit;
  background: orange;
  color: white;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 15px;
}
input[type="radio"],
input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}
input[type="radio"] + label,
input[type="checkbox"] + label {
  font-weight: normal;
}
h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}
</style>
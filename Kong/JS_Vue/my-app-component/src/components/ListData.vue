<template>
  <div>
    <ul>
      <PersonComponent
        v-for="item in employees"
        :id="item.id"
        :key="item.id"
        :name="item.name"
        :salary="item.salary"
        :department="item.department"
        :isVisible="item.isVisible"
      />
    </ul>
  </div>
</template>

<script>
import PersonComponent from "./PersonComponent.vue";

export default {
  name: "ListData",
  components: {
    PersonComponent,
  },
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "Kong",
          salary: 40000,
          department: "Programmer",
          isVisible: false,
        },
        {
          id: 2,
          name: "JoJo",
          salary: 30000,
          department: "Business",
          isVisible: false,
        },
        {
          id: 3,
          name: "Gam",
          salary: 20000,
          department: "Programmer",
          isVisible: false,
        },
        {
          id: 4,
          name: "Sompong",
          salary: 15000,
          department: "Graphic Designer",
          isVisible: false,
        },
        {
          id: 5,
          name: "Malee",
          salary: 18000,
          department: "Seller",
          isVisible: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}
</style>
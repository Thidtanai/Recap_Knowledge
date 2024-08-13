<template>
  <div>
    <FormComponent />
    <ListData :employees="employees" />
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import ListData from "./components/ListData.vue";

export default {
  name: "App",
  components: {
    ListData,
    FormComponent,
  },
  data() {
    return {
      employees: [
        { name: "Kong", salary: 40000 },
        { name: "JoJo", salary: 30000 },
        { name: "Gam", salary: 20000 },
        { name: "Sompong", salary: 15000 },
        { name: "Malee", salary: 18000 },
      ],
    };
  },
};
</script>

<style scoped>
</style>
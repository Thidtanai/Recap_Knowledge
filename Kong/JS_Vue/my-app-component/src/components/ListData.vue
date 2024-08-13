<template>
  <div>
    <h1>{{ message }}</h1>
    <PersonComponent />
    <PersonComponent />
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
      message: "แสดงรายชื่อพนักงาน",
    };
  },
};
</script>

<style>
</style>
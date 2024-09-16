<script setup>
import { reactive, ref } from "vue";
import FormComponent from "./components/FormComponent.vue";

/*  Binding  */
// const message = "Hello world";
const counterRef = ref(0);
const counterReactive = reactive({ count: 0 });
const searchText = ref("v-model");
const eventName = ref("event");

const increment = () => {
  counterRef.value++;
  counterReactive.count++;
};

const eventInput = (event) => {
  eventName.value = event.target.value;
};

/*  Condition */
const isCheck = ref(false);

const toggleCheck = () => {
  isCheck.value = !isCheck.value;
};

/*  Loop  */
const items = ref(["item1", "item2", "item3"]);
</script>


<template>
  <div>
    <!-- Binding -->
    <div>
      <div>Hello Ref: {{ counterRef }}</div>
      <div>Hello Reactive : {{ counterReactive.count }}</div>
      <button @click="increment">Add counter</button>
      <div>{{ searchText }}</div>
      <input type="text" v-model="searchText" />
      <div>{{ eventName }}</div>
      <input type="text" @input="eventInput" />
    </div>

    <!-- Condition -->
    <div>
      <div v-if="isCheck">isCheck</div>
      <div v-else>notCheck</div>
      <button @click="toggleCheck()">toggle</button>
    </div>

    <!-- Loop -->
    <div>
      <ul>
        <li v-for="(item, index) in items" key="index">
          {{ item }}
        </li>
      </ul>
    </div>

    <!-- Workshop -->
    <form-component />
  </div>
</template>

<style>
</style>
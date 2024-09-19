<script setup>
import { useTodoStore } from "../stores/todo";
import { useRoute, RouterLink } from "vue-router";
import { onMounted, ref } from "vue";

const todoStore = useTodoStore();
const todoId = ref(-1);
const isLoaded = ref(false);
const route = useRoute();

onMounted(async () => {
  await todoStore.loadTodo(route.params.id);
  isLoaded.value = true;
  todoId.value = parseInt(route.params.id);
});

const editTodo = async (selectedTodo) => {
  try {
    const bodyData = {
      name: selectedTodo.name,
      status: selectedTodo.status,
    };
    await todoStore.editTodo(bodyData, todoId.value);
    alert("edit complete !");
  } catch (error) {
    console.log("error", error);
  }
};
</script>

<template>
  <div>
    Edit
    <router-link :to="{ name: 'todo-list' }">
      <button>Back</button>
    </router-link>
    <div v-if="isLoaded">
      id {{ todoId }}
      <div>
        Name
        <input type="text" v-model="todoStore.selectedTodo.name" />
      </div>
      <div>
        Status
        <select name="" id="" v-model="todoStore.selectedTodo.status">
          <option value="">Select status</option>
          <option
            v-for="(status, index) in todoStore.statuses"
            :key="index"
            :value="status"
          >
            {{ status }}
          </option>
        </select>
        <div></div>
        <button @click="editTodo(todoStore.selectedTodo)">Edit</button>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
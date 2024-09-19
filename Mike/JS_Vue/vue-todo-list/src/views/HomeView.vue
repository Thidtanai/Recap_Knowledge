<script setup>
import { useTodoStore } from "../stores/todo";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const todoStore = useTodoStore();
const todoText = ref("");
const isLoading = ref(false);

onMounted(async () => {
  // load todos when mounted
  isLoading.value = true;
  await todoStore.loadTodos();
  isLoading.value = false;
});

const addTodo = async (todoText) => {
  try {
    isLoading.value = true;
    await todoStore.addTodo(todoText);
    await todoStore.loadTodos();
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};

const editStatus = async (todoData, todoId) => {
  try {
    isLoading.value = true;
    const updateData = {
      name: todoData.name,
      status: todoData.status,
    };
    await todoStore.editTodo(updateData, todoId);
    isLoading.value = false;
  } catch (error) {
    console.log("error", error);
  }
};

const deleteTodo = async (todoId) => {
  try {
    isLoading.value = true;
    await todoStore.removeTodo(todoId);
    await todoStore.loadTodos();
    isLoading.value = false;
  } catch (error) {
    console.log("error", error);
  }
};
</script>

<template>
  <div>
    <div>
      <input type="text" v-model="todoText" />
      <button @click="addTodo(todoText)">Add</button>
    </div>
    <div v-if="isLoading"><h2>loading</h2></div>
    <ul>
      <li v-for="(todo, index) in todoStore.list" :key="index">
        {{ todo.name }}
        <select
          name=""
          id=""
          v-model="todo.status"
          @change="editStatus(todo, todo.id)"
        >
          <option value="">Select status</option>
          <option
            v-for="(status, index) in todoStore.statuses"
            :key="index"
            :value="status"
          >
            {{ status }}
          </option>
        </select>
        <router-link :to="{ name: 'todo-edit', params: { id: todo.id } }"
          ><button>Edit</button></router-link
        >
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
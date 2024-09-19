import axios from "axios";
import { defineStore } from "pinia";

const BASE_URL = "https://66eb9e522b6cf2b89c5b1529.mockapi.io";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    list: [],
    selectedTodo: {},
    statuses: ["Pending", "Doing", "Done"],
  }),
  actions: {
    // get todos data to list
    async loadTodos() {
      try {
        const response = await axios.get(`${BASE_URL}/todos`);
        this.list = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    // get todo by id
    async loadTodo(id) {
      try {
        const response = await axios.get(`${BASE_URL}/todos/${id}`);
        this.selectedTodo = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addTodo(todoText) {
      // ชื่อของ Todo
      const bodyData = {
        name: todoText,
        status: "Pending",
      };

      try {
        const response = await axios.post(`${BASE_URL}/todos`, bodyData);
        this.list.push(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async editTodo(todoData, id) {
      try {
        const response = await axios.put(`${BASE_URL}/todos/${id}`, todoData);
      } catch (error) {
        console.log(error);
      }
    },

    async removeTodo(id) {
      try {
        const response = await axios.delete(`${BASE_URL}/todos/${id}`);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

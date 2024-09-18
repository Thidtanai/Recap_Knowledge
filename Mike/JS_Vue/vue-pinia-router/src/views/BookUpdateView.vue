<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import { useRouter, RouterLink, useRoute } from "vue-router";

import { useBookStore } from "@/stores/book";

const route = useRoute();
const router = useRouter();
const bookStore = useBookStore();

const bookData = reactive({
  name: "",
  author: "",
});

const mode = ref("create");
const bookIndex = ref(-1);

const addBook = () => {
  if (mode.value === "update") {
    bookStore.editBook(bookData, bookIndex.value);
  } else {
    bookStore.addBook(bookData);
  }
  router.push({ name: "book-list" });
};

onMounted(() => {
  console.log(route.name);
  console.log(route.params.id);
  if (route.name === "book-edit") {
    mode.value = "update";
    bookIndex.value = parseInt(route.params.id);
    // get book data by index
    const cBookStore = bookStore.books[bookIndex.value];
    bookData.name = cBookStore.name;
    bookData.author = cBookStore.author;
  }
});

const displayButton = computed(() => {
  if (mode.value === "create") {
    return "Add";
  } else {
    return "Update";
  }
});
</script>

<template>
  <div>
    Book update view
    <div>
      Book name
      <input type="text" v-model="bookData.name" />
    </div>
    <div>
      Book author
      <input type="text" v-model="bookData.author" />
    </div>
    <button @click="addBook()">{{ displayButton }} Book</button>
    <router-link :to="{ name: 'book-list' }">Back to list</router-link>
  </div>
</template>
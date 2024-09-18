<script setup>
import { useBookStore } from "@/stores/book";
import { RouterLink } from "vue-router";

const bookStore = useBookStore();
</script>

<template>
  <div>
    Book list view
    <div>
      <router-link :to="{ name: 'book-create' }">Create book</router-link>
      <ul>
        <li v-for="(book, index) in bookStore.books" :key="index">
          {{ index }} {{ book.name }} {{ book.author }}
          <router-link :to="{ name: 'book-edit', params: { id: index } }"
            ><button>Edit</button></router-link
          >
          <button @click="bookStore.removeBook(index)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import BookListView from "../views/BookListView.vue";
import BookUpdateView from "../views/BookUpdateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    // {
    //   path: "/profile/:id",
    //   name: "profile-edit",
    //   component: ProfileView,
    // },
    {
      path: "/book",
      name: "book-list",
      component: BookListView,
    },
    {
      path: "/book/create",
      name: "book-create",
      component: BookUpdateView,
    },
    {
      path: "/book/edit/:id",
      name: "book-edit",
      component: BookUpdateView,
    },
  ],
});

export default router;

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("pages/HomePage.vue"),
  },
  {
    path: "/recipe/:idRecipe",
    name: "detailedRecipe",
    component: () => import("pages/DetailedRecipe.vue"),
    props: true,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

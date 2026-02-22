import { createRouter, createWebHistory } from "vue-router";
import ControlPanel from "../../pages/ControlPanel.vue";
import Output from "../../pages/Output.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/control" },
    { path: "/control", component: ControlPanel },
    { path: "/output", component: Output },
  ],
});

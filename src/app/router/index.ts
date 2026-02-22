import { createRouter, createWebHashHistory } from "vue-router";
import ControlPanel from "../../pages/ControlPanel.vue";
import Output from "../../pages/Output.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/control" },
    { path: "/control", component: ControlPanel },
    { path: "/output", component: Output },
  ],
});

import { createRouter as _createRouter, createWebHistory } from "vue-router";
import ControlPanel from "../../pagesControlPanel.vue";
import Output from "../../pages/Output.vue";

export function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    router: [
      { path: "/", redirect: "control" },
      { path: "/control", component: ControlPanel },
      { path: "/output", component: Output },
    ],
  });
}

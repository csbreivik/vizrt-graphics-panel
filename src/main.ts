import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter } from "./app/router";
import "./styles/base.css";

const app = createApp(App);

app.use(createPinia());
app.use(createRouter());

app.mount("#app");

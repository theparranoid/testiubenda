import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store";
import Notifications from "@kyvg/vue3-notification";

import "./assets/main.css";

const app = createApp(App);

app.use(store);
app.use(Notifications);

app.mount("#app");

// createApp(App).use(store, Notifications).mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";

Vue.config.devtools = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

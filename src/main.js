import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import "@/plugins/lodash";
import "@/plugins/axios";
import "@/plugins/moment";
import "@/plugins/sweetalert2";
import "@/plugins/handlers";
import "@/assets/scss/app.scss";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

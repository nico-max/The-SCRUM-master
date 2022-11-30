import "leaflet/dist/leaflet.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
//import axios from "axios";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import "typeface-roboto/index.css";
//import "./css/style-argo.css";

//axios.defaults.baseURL = "http://localhost:8003/argo/";

Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
new Vue({
  router,
  store,
  vuetify,

  render: (h) => h(App),
}).$mount("#app");

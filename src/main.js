import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 该项目的后端嫌麻烦没有设置/api,前端也可以解决，在config.js中/api设置为“”, /api/a/b => /a/b
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;
// 接口错误拦截
axios.interceptors.response.use(response => {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = "/#/login";
  } else {
    alert(res.msg);
  }
});
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

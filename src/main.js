import Vue from "vue";
import App from "./App.vue";
import IconFont from "./components/IconFont.vue";

import "./assets/icons/iconfont.css";
import "./assets/icons/iconfont";

Vue.component("IconFont", IconFont);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

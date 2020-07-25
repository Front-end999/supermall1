import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import toast from "components/common/toast";

import FastClick from "fastclick";
import VueLazyLoad from "vue-lazyload";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import 'assets/css/normalize.css'

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue(); //发射事件

Vue.use(ElementUI);

Vue.use(toast);

//解决移动端300ms延迟
FastClick.attach(document.body);

// 使用图片懒加载
Vue.use(VueLazyLoad, {
  // 之后就要把图片加载的地方 把:src="函数"  改成v-lazy="函数"
  loading: require("./assets/img/common/collect.svg")
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");

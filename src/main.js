import { createApp } from "vue";

// import VueAWN from "@/plugins/vue-awesome-notifications";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixin from "./common/mixin";

import ApiService from "./common/api.service";
ApiService.init();

require("./common/interceptors");
require("./common/guards");

const app = createApp(App);

app.mixin(mixin);

// app.use(VueAWN);
app.use(router);
app.use(store);

const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: (el) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};
app.directive("click-outside", clickOutside);




String.prototype.ucfirst = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
};
String.prototype.isEmpty = function () {
  return (this.length === 0 || !this.trim());
};
String.prototype.ucwords = function () {
  let str = this.toLowerCase()
  let re = /(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g
  return str.replace(re, s => s.toUpperCase())
};

app.mount("#app");
window.app = app;

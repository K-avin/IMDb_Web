<template>
  <router-view></router-view>
</template>

<script>
// window.jquery =
  // window.jQuery = require(""); // jQuery
// require("admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js"); // Bootstrap 4
// require("admin-lte/build/js/AdminLTE.js"); // AdminLTE App./assets/js/main

import { nextTick } from "vue";
import './assets/js/main.js'
export default {
  name: "App",

  components: {},

  data() {
    return {
      
    };
  },

  mounted() {
    this.ready();
  },

  methods: {
    addScriptFile(file) {
      if (file) {
        let recaptchaScript = document.createElement("script");
        recaptchaScript.setAttribute("src", file);
        document.body.appendChild(recaptchaScript);
      }
    },

    addClassToApp() {
      var element = document.getElementById("app");
      element.classList.add("hold-transition");
      element.classList.add("sidebar-mini");
      element.classList.add("layout-footer-fixed");
    },

    ready: function () {
      var self = this;
      nextTick(() => {
        setTimeout(function () {
          self.addClassToApp();
          // self.addScriptFile("/assets/js/main.js");
          // self.addScriptFile("/js/bootstrap.bundle.min.js");
          // self.addScriptFile("/js/adminlte.min.js");
          // self.addScriptFile("/js/demo.js");
        }, 1000);
      });
    },
  },
};
</script>
<!-- Theme style -->
<style src="./assets/css/main.css"></style>
<style>
#app {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
  <router-view></router-view>
</template>

<script>
// window.jquery =
//   window.jQuery = require("admin-lte/plugins/jquery/jquery.min.js"); // jQuery
// require("admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js"); // Bootstrap 4
// require("admin-lte/build/js/AdminLTE.js"); // AdminLTE App

import { nextTick } from "vue";

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
          // self.addScriptFile("/js/jquery.min.js");
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
<style lang="scss" src="admin-lte/build/scss/adminlte.scss" ></style>


<style>
#app {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

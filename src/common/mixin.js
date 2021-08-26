const myMixin = {
  beforeCreate() {
    // if (!this.$options.computed) {
    //   this.$options.computed = {};
    // }

    // this.$options.computed.$errors = function() {
    //   this.$store.state.form.flush();
    //   return this.$store.state.form;
    // };
  },

  computed: {
    $permissions() {
      return this.$store.state.auth.permission;
    },

    $errors() {
      this.$store.state.form.flush();
      return this.$store.state.form;
    }
  }
};

export default myMixin;

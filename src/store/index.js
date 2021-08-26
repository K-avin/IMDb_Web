import { createStore } from 'vuex';

import auth from "./modules/auth.module";

const store = createStore({
  modules: {
    auth,
  }
});

export default store;
import axios from "axios";
import router from "@/router";
import store from "@/store";
import { PURGE_AUTH, SET_ERROR } from "@/store/mutations.type";

axios.interceptors.response.use(
  (response) => {
    const $awn = window.app.config.globalProperties.$awn;
    const { status = 0, data = {} } = response;

    if (status == 200) {
      if (data.message !== undefined) {
        $awn.success(data.message);
      }
    }
    return response;
  },
  (error) => {
    const $awn = window.app.config.globalProperties.$awn;
    const { status = 0, data = {} } = error.response;

    switch (status) {
      case 401:
        store.commit(PURGE_AUTH);
        router.push({ name: "login" });
        break;
      case 422:
        store.commit(SET_ERROR, data);
        if (Object.prototype.hasOwnProperty.call(data, "message")) {
          $awn.warning(data.message);
        }
        break;
    }

    return Promise.reject(error);
  }
);

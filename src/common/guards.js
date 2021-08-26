import router from "@/router";
import JwtService from "@/common/jwt.service";
import store from "@/store";
import { CHECK_AUTH } from "@/store/actions.type";

// check if the user is authenticated
router.beforeEach(async (to, from, next) => {
  let isAuthenticated = !!JwtService.getToken();

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    next({ name: "login" });
  } else if (isAuthenticated) {
    switch (to.name) {
      case "login":
        next({ name: "dashboard" });
        break;
      default:
        next();
        break;
    }
  } else {
    next();
  }
});

// this check will be ran when page is loaded
router.isReady().then(() => {
  // resolve the request
  Promise.all([store.dispatch(CHECK_AUTH)]);
});

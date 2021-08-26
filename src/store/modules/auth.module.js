import permission from "@/plugins/permission";
import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER
} from "../actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "../mutations.type";

const state = {
  errors: null,
  auth_user: {},
  isAuthenticated: !!JwtService.getToken(),
  permission: permission
};

const getters = {
  currentUser(state) {
    return state.auth_user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("auth/login", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          JwtService.saveToken(data.access_token);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT](context) {
    return new Promise(resolve => {
      ApiService.setHeader();
      ApiService.post("auth/logout")
        .then(({ data }) => {
          context.commit(PURGE_AUTH);
          resolve(data);
        });        
      context.commit(PURGE_AUTH);
    });
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users", { user: credentials })
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  },
  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("auth/user")
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
        })
        .catch(({ response }) => {
          if(response.data.errors) {
            context.commit(SET_ERROR, response.data.errors);
          }
          console.log(response.data.message)
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_USER](context, payload) {
    const { email, username, password, image, bio } = payload;
    const user = {
      email,
      username,
      bio,
      image
    };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({ data }) => {
      context.commit(SET_AUTH, data.user);
      return data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.auth_user = user.data;
    state.auth_user.name = user.data.fname + " " + user.data.lname;
    state.errors = {};
    state.permission.fill(user.data.permissions);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.auth_user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};

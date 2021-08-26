import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";
import axios from 'axios';



const ApiService = {
  init() {
    axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return axios.get(resource, params).catch(error => {
      return Promise.reject(error);
    });
  },

  get(resource) {
    return axios.get(`${resource}`).catch(error => {
      return Promise.reject(error);
    });
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  },

  update(resource, params) {
    return axios.put(`${resource}`, params);
  },

  put(resource, params) {
    return axios.put(`${resource}`, params);
  },

  delete(resource) {
    return axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;
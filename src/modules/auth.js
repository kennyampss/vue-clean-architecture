//routes here
import { login, getMe, register } from "@/routes";

import constants from "@/helpers/constants";
import VueCookie from "vue-cookie";

export default {
  namespaced: true,
  state: {
    currentUser: null,
  },
  getters: {
    currentUser: (state) => state.currentUser,
  },
  mutations: {
    setCurrentUser(state, data) {
      state.currentUser = data;
    },
  },
  actions: {
    login({ }, data) {
      return login(data).then(
        (res) => {
          VueCookie.set(constants.TOKEN_KEY, res.data.access_token, 180);
          return Promise.resolve(res);
        },
        (err) => {
          return Promise.reject(err);
        }
      );
    },
    register({ }, data) {
      const _data = {
        ...data,
        display_name: `${data.first_name} ${data.last_name}`,
        username: data.email,
      };

      return register(_data).then(
        (res) => {
          return Promise.resolve(res);
        },
        (err) => {
          return Promise.reject(err);
        }
      );
    },
    getCurrentUser({ commit }) {
      return getMe().then(
        (res) => {
          commit("setCurrentUser", res.data);
          return Promise.resolve(res);
        },
        (err) => {
          return Promise.reject(err);
        }
      );
    },
  },
};

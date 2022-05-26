import VueCookie from "vue-cookie";
import constants from "./constants";
export default {
  hasToken() {
    return VueCookie.get(constants.TOKEN_KEY);
  },
};

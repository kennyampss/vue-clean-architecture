import router from "@/router";
import VueCookie from "vue-cookie";
import { get } from "lodash";
import constants from "@/helpers/constants";
import Store from "@/store";

const errorHandler = (error) => {
  switch (get(error, "response.status", 0)) {
    case 401:
      // globalErrorHandler(null, "Unauthorized User!");
      axios.defaults.headers.common["Authorization"] = null;
      VueCookie.delete(constants.TOKEN_KEY);
      Store.commit("auth/setCurrentUser", null);
      router.push("/login");
      break;
    default:
      break;
  }

  // Message.error(msg);
};

export default errorHandler;

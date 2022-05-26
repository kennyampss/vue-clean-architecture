import endpoints from "./endpoints";
import errorHandler from "./errorHandler";

export async function login(data) {
  try {
    const url = endpoints.login;
    const response = axios.post(url, data);
    response.catch((err) => {
      errorHandler(err);
    });

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function register(data) {
  try {
    const url = endpoints.register;
    const response = axios.post(url, data);
    response.catch((err) => {
      errorHandler(err);
    });

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getMe() {
  try {
    const url = endpoints.me;
    const response = axios.get(url);
    response.catch((err) => {
      errorHandler(err);
    });

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

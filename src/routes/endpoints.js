let base = process.env.VUE_APP_API;

export default {
  base: base,
  //new api
  me: `${base}me`,
  login: `${base}login`,
  register: `${base}register`,
};

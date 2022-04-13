import axios from "axios";

const InitializeAxios = () => {
  const $axios = axios.create({
    baseURL: "API",
  });

  $axios.defaults.headers.post["Content-Type"] = "application/json";
  $axios.defaults.headers.put["Content-Type"] = "application/json";
  $axios.defaults.headers.patch["Content-Type"] = "application/json";

  $axios.interceptors.request.use(
    function (config) {
      // const token = token_store.get();
      // if (token) {
      //   config.headers.Authorization = "Token " + token;
      // }
      // if (config.url.includes("undefined")) {
      //   return;
      // }
      return config;
    },
    (err) => {
      console.error(err);
    }
  );

  return $axios;
};

export default InitializeAxios;

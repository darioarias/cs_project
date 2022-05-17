import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const create_instance = (config = {}) => axios.create({ ...config });

const check_required = (config = {}, reqs = new Set()) => {
  for (let req of reqs) {
    if (req in config.data && !config.data[req]) {
      // throw new axios.Cancel(`Request Cancelled, ${req} must not be empty`);
      return {
        success: false,
        message: `Request Cancelled, ${req} must not be empty`,
      };
    } else if (!(req in config.data)) {
      return {
        success: false,
        message: `Request Cancelled, ${req} must be defined`,
      };
      // throw new axios.Cancel(`Request Cancelled, ${req} must be defined`);
    }
  }
  return { success: true };
};

export const auth_instance = (headers, timeout) => {
  let instance = create_instance({
    baseURL: process.env.REACT_APP_API_AUTH_URL,
    headers: { "Content-Type": "application/json", ...headers },
    timeout,
  });

  instance.interceptors.request.use((config) => {
    let meets_reqs = check_required(config, new Set(["username", "password"]));
    if (meets_reqs.success) return config;
    throw new axios.Cancel(meets_reqs.message);
  });

  return instance;
};

export const post_instance = (headers, timeout) => {
  let instance = create_instance({
    baseURL: process.env.REACT_APP_API_ROOT_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("token")}`,
      ...headers,
    },
    timeout,
  });

  instance.interceptors.request.use((config) => {
    let meets_reqs = check_required(
      config,
      new Set(["first_name", "last_name", "username", "email", "password"])
    );

    if (meets_reqs.success) return config;
    throw new axios.Cancel(meets_reqs.message);
  });

  return instance;
};

export const get_instance = (headers, timeout) => {
  let instance = create_instance({
    baseURL: process.env.REACT_APP_API_ROOT_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("token")}`,
      ...headers,
    },
    timeout,
  });

  // instance.interceptors.request.use((config) => {
  //   let meets_reqs = check_required(
  //     config,
  //     new Set(["first_name", "last_name", "username", "email", "password"])
  //   );

  //   if (meets_reqs.success) return config;
  //   throw new axios.Cancel(meets_reqs.message);
  // });

  return instance;
};

export const enroll_post_instance = (headers, timeout) => {
  let instance = create_instance({
    baseURL: process.env.REACT_APP_API_ROOT_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("token")}`,
      ...headers,
    },
    timeout,
  });

  instance.interceptors.request.use((config) => {
    let meets_reqs = check_required(config, new Set(["title", "username"]));

    if (meets_reqs.success) return config;
    throw new axios.Cancel(meets_reqs.message);
  });

  return instance;
};

// export const

// export const create_instance_ = () => {
//   console.log("INSTANCE");
// };

// export default {
//   create_instance: function () {
//     console.log("ERR");
//   },
//   test: function () {
//     console.log("tet");
//   },
// };

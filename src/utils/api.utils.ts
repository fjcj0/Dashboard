import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});
let csrfToken: string | null = null;
let csrfPromise: Promise<void> | null = null;
const fetchCsrfOnce = async () => {
  if (csrfToken) return;
  if (!csrfPromise) {
    csrfPromise = axios
      .get(`${import.meta.env.VITE_SERVER_URL}/csrf-token`, {
        withCredentials: true,
      })
      .then((response) => {
        csrfToken = response.data.csrfToken;
      })
      .catch((error) => {
        console.error("Failed to fetch CSRF token:", error);
      })
      .finally(() => {
        csrfPromise = null;
      });
  }
  return csrfPromise;
};
api.interceptors.request.use(
  async (config) => {
    try {
      await fetchCsrfOnce();
      if (csrfToken && config.headers) {
        config.headers["x-csrf-token"] = csrfToken;
      }
    } catch (err) {
      console.error("Interceptor error:", err);
    }
    return config;
  },
  (error) => Promise.reject(error),
);
export default api;

import axios from "axios";

const api = axios.create({
  baseURL:
    "https://api.thecatapi.com/v1/images/search?api-key=live_tY8F4OShCc8epfYgqRXAMFyA9k0JUC0q1h65PDNXmDdxEvknZ1sHQi4IGbSIGB92",
  timeout: 300000,
  timeoutErrorMessage: "timeout",
});

export default api;

import axios from "axios";

function sleep(ms = 2000): Promise<void> {
  console.log("Kindly remember to remove `sleep`");
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const api = axios.create({
  baseURL: `http://192.168.1.2:3333`,
  headers: { accept: "application/json" },
});

api.interceptors.response.use(async (response) => {
  // add artificial delay for dev env
  if (process.env.NODE_ENV === "development") {
    await sleep();
  }
  return response.data;
});

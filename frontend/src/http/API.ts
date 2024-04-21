import { $host } from ".";
import store from "../store";

// export const voicePush = async (voice: string) => {
//   const response = await $host.post("/", voice);
//   return response;
// };

// export const createUser = async (email: string, password: string) => {
//   const response = await $host.post("/", voice);
//   return response;
// };

export const getUser = async (email: string, password: string) => {
  const token = store.getState().settings.token;

  const response = await $host.get(
    `/auth/me?email=${email}&password=${password}`
  );
  return response.data;
};

export const loginUserByEmail = async (email: string, password: string) => {
  const response = await $host.post("/auth/email/login", { email, password });
  return response.data;
};

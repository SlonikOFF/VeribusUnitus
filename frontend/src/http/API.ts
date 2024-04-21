import { $host } from ".";

export const voicePush = async (voice: string) => {
  const response = await $host.post("/", voice);
  return response;
};

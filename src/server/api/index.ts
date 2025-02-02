import axios, { type AxiosInstance } from "axios";
import { env } from "~/env";

export const emailServiceApiClient = createApiClient(
  env.NEXT_PUBLIC_EMAIL_SERVICE_BASE_URL,
);

function createApiClient(baseURL: string): AxiosInstance {
  const instance = axios.create({
    baseURL: `${baseURL}/api/v0`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
}

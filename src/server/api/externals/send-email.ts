// /send-email

import { emailServiceApiClient } from "..";

interface IEmailRequest {
  template: string;
  vars: {
    name: string;
    content: string;
  };
}

export async function sendEmail(params: IEmailRequest) {
  const response = await emailServiceApiClient.post<string>(
    "/send-email",
    params,
  );

  return response.data;
}

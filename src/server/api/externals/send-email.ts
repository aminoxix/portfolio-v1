// /send-email

import { emailServiceBaseURL } from "..";

interface IEmailRequest {
  template: string;
  vars: {
    name: string;
    content: string;
  };
}

export async function sendEmail(params: IEmailRequest) {
  const response = await fetch(`${emailServiceBaseURL}/send-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error(`Email service error: ${response.status}`);
  }

  return response.text();
}

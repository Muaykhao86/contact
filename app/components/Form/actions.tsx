"use server";

import { z } from "zod";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
const config = {
  region: process.env.AWS_REGION || "us-west-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "none",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "none",
  },
};

export async function sendMessage(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
  });
  const parse = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parse.success) {
    return { message: "Failed to send message", status: "error"};
  }

  const data = parse.data;

  try {
    const client = new SESv2Client(config);
    const input = {
      Destination: {
        ToAddresses: ["danielhardiman@protonmail.com"],
      },
      Content: {
        Simple: {
          Body: {
            Text: {
              Data: "",
            },
          },
          Subject: {
            Data: "",
          },
        },
      },
      FromEmailAddress: "danielhardiman@live.co.uk",
    };

    // set the subject and body
    input.Content.Simple.Subject.Data = `Job contact message from ${data.name} - ${data.email}`;
    input.Content.Simple.Body.Text.Data = data.message;

    // TODO check they are not a robot

    // send email
    const command = new SendEmailCommand(input);
    const response = await client.send(command);
    console.log("Sent email - response -> ", response)

    // change component to message sent so they cant send again
    return { message: `Sent message from ${data.email}`, status: "success"};
  } catch (e) {
    console.error("Failed to send email", e);
    return { message: "Failed to send email", status: "error"};
  }
}

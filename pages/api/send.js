import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend('re_gtL4pWF3_LKTFJtxBe8xy6SEssFLetiaz');

export const sendEmail = async () => {
  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "hello world",
    text: "it works!",
    headers: {
      "X-Entity-Ref-ID": "123456789",
    },

    tags: [
      {
        name: "category",
        value: "confirm_email",
      },
    ],
  });
  // try {
  //   const data = await resend.emails.send({
  //     from: [email],
  //     to: ["apolo1577@gmail.com"],
  //     subject: [subject],
  //     react: [message],
  //   });

  //   res?.status(200).json(data);
  // } catch (error) {
  //   res?.status(400).json(error);
  // }
};

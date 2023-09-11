
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (req, res, email, subject, message) =>{
  try {
    const data = await resend.emails.send({
      from: [email],
      to: ['apolo1577@gmail.com'],
      subject: [subject],
      react: [message],
    });

    res?.status(200).json(data);
  } catch (error) {
    res?.status(400).json(error);
  }
}
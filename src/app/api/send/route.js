// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
export async function POST() {
  try {
    const { data } = await resend.emails.send({
      from: 'fromEmail',
      to: ["naziaimran.4df@gmail.com"],
      subject: 'Hello world',
      react: 
      <>
      <p>Email Body</p>
      </>
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, service, message } = await req.json();

    const data = await resend.emails.send({
      from: "Aether AI <onboarding@resend.dev>",
      to: ["aitherai.solutions@gmail.com"],
      subject: `New Project Inquiry - ${service}`,
      html: `
        <h2>New Project Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>

        <hr />

        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("RESEND ERROR:", error);

    return NextResponse.json(
      {
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}
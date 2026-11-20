import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL = "hello@aetheraisolutions.in";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        { error: "Email service is unavailable." },
        { status: 503 }
      );
    }

    const body = await req.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim() : "";

    const company =
      typeof body.company === "string"
        ? body.company.trim()
        : "";

    const service =
      typeof body.service === "string"
        ? body.service.trim()
        : "";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (
      !name ||
      name.length > 120 ||
      !validEmail ||
      email.length > 254 ||
      company.length > 150 ||
      !service ||
      service.length > 150 ||
      !message ||
      message.length > 10000
    ) {
      return NextResponse.json(
        { error: "Please provide valid contact details." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: `Aether AI <${EMAIL}>`,
      to: [EMAIL],
      replyTo: email,
      subject: `New Project Inquiry - ${service.replace(/[\r\n]/g, " ")}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#222">
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <hr />
          <h3>Project Details</h3>
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND DELIVERY ERROR:", error);

      return NextResponse.json(
        { error: "Unable to send your inquiry right now." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}


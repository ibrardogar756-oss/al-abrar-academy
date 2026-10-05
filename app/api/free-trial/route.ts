import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const country = String(body.country ?? "").trim();
    const whatsappNumber = String(body.whatsappNumber ?? "").trim();
    const course = String(body.course ?? "").trim();

    if (!name || !country || !whatsappNumber || !course) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const { data: emailData, error: emailError } =
      await resend.emails.send({
        from: "Al Abrar Academy <onboarding@resend.dev>",
        to: ["ibrardogar756@gmail.com"],
        subject: `New Free Trial Request - ${name}`,
        html: `
          <h2>New Free Trial Request</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>WhatsApp:</strong> ${whatsappNumber}</p>
          <p><strong>Course:</strong> ${course}</p>

          <hr />

          <p>
            This Free Trial request was submitted through the
            Al Abrar Quran Academy website.
          </p>
        `,
      });

    if (emailError) {
      console.error(
        "RESEND EMAIL ERROR:",
        JSON.stringify(emailError, null, 2)
      );

      return NextResponse.json(
        {
          success: false,
          message: "The email could not be sent. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Free trial request submitted successfully.",
        emailId: emailData?.id ?? null,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Free Trial API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { auth } from "@/lib/auth";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const appointmentId = formData.get("appointmentId");
    const doctorId = formData.get("doctorId");
    const doctorName = formData.get("doctorName");
    const fee = formData.get("fee");

    const sessionData = await auth.api.getSession({
      headers: await headers(),
    });

    const user = sessionData?.user;

    const origin = (await headers()).get("origin");

    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,

      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],

      mode: "payment",

      metadata: {
        appointmentId,
        doctorId,
        doctorName,
        fee,

        patientId: user?.id || "",
        patientName: user?.name || "",
        patientEmail: user?.email || "",
      },

      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/find-doctor/${doctorId}`,
    });

    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
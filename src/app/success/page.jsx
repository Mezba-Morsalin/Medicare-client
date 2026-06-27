import { redirect } from "next/navigation";
import Link from "next/link";
import { FaCheckCircle, FaCalendarCheck } from "react-icons/fa";
import { stripe } from "@/lib/stripe";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Invalid Stripe Session.");
  }

  const session = await stripe.checkout.sessions.retrieve(session_id);
  

  if (session.status === "open") {
    redirect("/");
  }

  if (session.status !== "complete") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-5">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-lg border p-10 text-center">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <FaCheckCircle className="text-6xl text-green-600" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mt-8">
          Payment Successful
        </h1>

        <p className="text-slate-500 mt-4 leading-7">
          Your appointment payment has been completed successfully.
          Your booking request has been submitted and is now waiting
          for the doctor s confirmation.
        </p>

        <div className="bg-sky-50 rounded-2xl border p-6 mt-8">
          <div className="flex items-center justify-center gap-3 text-sky-700 font-semibold">
            <FaCalendarCheck />
            Appointment Request Submitted
          </div>

          <p className="text-sm text-slate-500 mt-3">
            A confirmation email has been sent to:
          </p>

          <p className="font-semibold text-slate-900 mt-1">
            {session.customer_details?.email}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <Link
            href="/dashboard/patient/appointments"
            className="py-3 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
          >
            My Appointments
          </Link>

          <Link
            href="/find-doctor"
            className="py-3 rounded-xl border border-slate-300 font-semibold hover:bg-slate-100 transition"
          >
            Find Doctors
          </Link>
        </div>

        <p className="text-xs text-slate-400 mt-8">
          Transaction ID: {session.payment_intent}
        </p>
      </div>
    </div>
  );
}
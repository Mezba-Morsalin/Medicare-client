import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { FaCalendarCheck, FaCalendarTimes, FaUserMd } from "react-icons/fa";
import DoctorAppointmentsTable from "./DoctorAppointmentsTable";
import { FaStethoscope } from "react-icons/fa6";
import { Button } from "@heroui/react";
import Link from "next/link";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const doctorRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor?doctorId=${user.id}`,
    {
      cache: "no-store",
    }
  );

  const doctorData = await doctorRes.json();
  const doctor = doctorData.data?.[0];

  if (!doctor) return null;

  const paymentRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/my/payments?doctorId=${doctor._id}`,
    {
      cache: "no-store",
    }
  );

  const appointments = await paymentRes.json();

  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-sky-600 text-white p-8 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase font-semibold opacity-90">
                <FaStethoscope />
                Licensed Clinical Practitioner
              </div>
      
              <div>
                <h1 className="text-4xl font-bold mt-3">
                Greetings, {user?.name}
              </h1>
              <p>{doctor && (
        <span
          className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
            doctor.status === "Verified"
              ? "bg-green-100 text-green-600"
              : doctor.status === "Rejected"
              ? "bg-red-100 text-red-600"
              : "bg-amber-100 text-amber-600"
          }`}
        >
          {doctor.status}
        </span>
      )}</p>
              </div>
      
              <p className="mt-4 text-white/90 max-w-2xl leading-relaxed">
        Streamline patient care, oversee appointment management,
        coordinate treatment plans, and enhance clinical outcomes
        with your comprehensive physician workspace.
      </p>
            </div>
      
            <div className="hidden md:block bg-sky-600 rounded-2xl px-5 py-4">
             <p className="text-xs font-semibold uppercase">
        Medical Specialty
      </p>
      
              <p className="font-bold mt-1">
                {user?.specialization || "patient"}
              </p>
            </div>
          </div>
      {/* Hero */}
     {appointments.length === 0 ? <div className="bg-white border border-slate-200 rounded-3xl p-10 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center">
        <FaCalendarTimes className="text-4xl text-sky-600" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        No Appointments Found
      </h2>

      <p className="mt-3 max-w-md text-slate-500 leading-relaxed">
        You do not have any appointments scheduled yet. Once patients book
        consultations with you, they all appear here for easy management.
      </p>

      <Link href="/dashboard/doctor">
        <Button className="mt-8 rounded-xl bg-sky-600 text-white px-8">
          Back to Dashboard
        </Button>
      </Link>
    </div> : <div className="rounded-3xl bg-white border border-slate-200 shadow p-8">
  <div className="flex items-center justify-between flex-wrap gap-5">
    <div className="flex items-center gap-4">
      <div className="h-16 w-16 rounded-2xl bg-sky-100 flex items-center justify-center">
        <FaCalendarCheck className="text-3xl text-sky-600" />
      </div>

      <div>
        <p className="uppercase text-xs tracking-widest text-sky-600 font-semibold">
          Appointment Management
        </p>

        <h1 className="text-4xl font-bold text-slate-900 mt-1">
          My Appointments
        </h1>
      </div>
    </div>

    <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
      {appointments.length} Total Bookings
    </span>
  </div>

  <p className="mt-6 max-w-3xl text-slate-500 leading-8">
    Manage your daily consultation schedule, review patient booking
    requests, monitor payment status and keep every appointment
    organized from one place.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

    <div className="rounded-2xl border bg-slate-50 p-6">
      <p className="text-sm text-slate-500">
        Total Appointments
      </p>

      <h2 className="text-4xl font-bold text-slate-900 mt-3">
        {appointments.length}
      </h2>
    </div>

    <div className="rounded-2xl border bg-amber-50 p-6">
      <p className="text-sm text-amber-700">
        Pending Requests
      </p>

      <h2 className="text-4xl font-bold text-amber-600 mt-3">
        {
          appointments.filter(
            (item) => item.appointmentStatus === "Pending"
          ).length
        }
      </h2>
    </div>

    <div className="rounded-2xl border bg-green-50 p-6">
      <p className="text-sm text-green-700">
        Successful Payments
      </p>

      <h2 className="text-4xl font-bold text-green-600 mt-3">
        {
          appointments.filter(
            (item) => item.paymentStatus === "Paid"
          ).length
        }
      </h2>
    </div>

  </div>
</div>}

      <DoctorAppointmentsTable appointments={appointments} />
    </div>
  );
};

export default page;

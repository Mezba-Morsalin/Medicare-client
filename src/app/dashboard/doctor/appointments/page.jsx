import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { FaCalendarCheck, FaUserMd } from "react-icons/fa";
import DoctorAppointmentsTable from "./DoctorAppointmentsTable";
import { FaStethoscope } from "react-icons/fa6";

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
      <div className="rounded-3xl bg-sky-600 text-white p-8">
        <div className="flex items-center gap-3">
          <FaCalendarCheck className="text-3xl" />

          <div>
            <p className="uppercase text-sm opacity-80">
              Appointment Management
            </p>

            <h1 className="text-4xl font-bold mt-1">
              My Appointments
            </h1>
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-white/90 leading-8">
          Manage your daily consultation schedule, review patient booking
          requests, monitor payment status and keep every appointment
          organized from one place.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          <div className="bg-white/10 rounded-2xl p-5">
            <p className="text-sm opacity-80">
              Total Appointments
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {appointments.length}
            </h2>
          </div>

          <div className="bg-white/10 rounded-2xl p-5">
            <p className="text-sm opacity-80">
              Pending
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {
                appointments.filter(
                  (item) => item.appointmentStatus === "Pending"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white/10 rounded-2xl p-5">
            <p className="text-sm opacity-80">
              Paid
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {
                appointments.filter(
                  (item) => item.paymentStatus === "Paid"
                ).length
              }
            </h2>
          </div>
        </div>
      </div>

      <DoctorAppointmentsTable appointments={appointments} />
    </div>
  );
};

export default page;

{/* <div className='space-y-8'>
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
            <div className="bg-white border border-slate-200 rounded-3xl p-10 flex flex-col items-center text-center">
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
    </div>
         </div> */}
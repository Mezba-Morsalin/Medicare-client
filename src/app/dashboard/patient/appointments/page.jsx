import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { format } from 'date-fns';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa6';
import RescheduleAppointmentForm from './Reschedule';
import CancelAppointment from './CancelAppointment';

const page = async () => {
     const session = await auth.api.getSession({
                     headers: await headers(),
                   });
                 
                   const user = session?.user;
    const patientRes = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments?patientId=${user.id}`,
  {
    cache: "no-store",
  }
);

if (!patientRes.ok) {
  throw new Error("Failed to fetch payments");
}

const payments = await patientRes.json();

console.log("Payments:", payments);

const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors`, {
  cache: "no-store",
});

const data = await res.json();
const doctors = data.data;

    return (
        <div className='space-y-8'>
            <div className="bg-white border rounded-3xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
  {/* Left */}
  <div className="text-center md:text-left">
    <p className="text-xs uppercase tracking-widest text-sky-600 font-bold">
      Patient Administrative Portal
    </p>

    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 leading-tight">
      Welcome back, {user?.name}
    </h1>

    <p className="text-sm sm:text-base text-gray-500 mt-2 break-all md:break-normal">
      Identity: {user?.id} <br className="md:hidden" />
      <span className="hidden md:inline"> • </span>
      Role: {user?.role}
    </p>
  </div>

  {/* Right */}
  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4">
    <div className="text-center sm:text-right">
      <p className="text-xs uppercase text-gray-400 font-semibold">
        Health Identity Verified
      </p>

      <p className="text-lg font-bold text-green-600">
        HIPAA Secured
      </p>
    </div>

    <Image
      src={user?.image}
      alt={user?.name}
      width={70}
      height={70}
      className="rounded-2xl border object-cover"
    />
  </div>
</div>
            { payments?.length === 0 ?  <div className="bg-white border border-slate-200 rounded-3xl py-20 px-8 flex flex-col items-center text-center">
      <div className="h-20 w-20 rounded-full bg-sky-100 flex items-center justify-center">
         <FaCalendarCheck className="text-4xl text-sky-600" />
       </div>

       <h2 className="mt-6 text-3xl font-bold text-slate-900">
         No Appointments Scheduled
       </h2>

       <p className="mt-4 max-w-xl text-slate-500 leading-7">
         You don not have any upcoming or previous appointments at the moment.
         Schedule a consultation with one of our verified clinicians to begin
         managing your healthcare journey.
       </p>

       <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
         <Link
          href="/find-doctor"
          className="rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold hover:bg-sky-700 transition"
         >
           Find a Doctor
        </Link>

        <Link
           href="/"
           className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100 transition"         >
           Back to Home
         </Link>
       </div>
     </div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {payments.map((payment) => {
  const doctorInfo = doctors.find(
    (doc) => doc._id === payment.doctorId
  );

  return (
    <div
      key={payment._id}
      className="w-full bg-white rounded-3xl border border-gray-200 shadow-md p-4 sm:p-6 hover:shadow-lg transition"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Image
            src={payment.doctorImage}
            alt={payment.doctorName}
            width={120}
            height={120}
            className="rounded-full border object-cover h-[120px] w-[120px]"
          />

          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-slate-800">
              {payment.doctorName}
            </h2>

            <p className="uppercase text-sm tracking-wide text-sky-600 font-semibold">
              {payment.doctorSpecialization}
            </p>

            <p className="text-sm text-gray-500">
              Metropolitan Heart &amp; Vascular Institute
            </p>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end">
          <span
            className={`px-4 py-1 h-6 rounded-full text-xs font-bold uppercase ${
              payment.appointmentStatus === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : payment.appointmentStatus === "Confirmed"
                ? "bg-blue-100 text-blue-700"
                : payment.appointmentStatus === "Completed"
                ? "bg-green-100 text-green-700"
                : payment.appointmentStatus === "Cancelled"
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {payment.appointmentStatus}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-400">
            Date & Clock
          </p>

          <p className="mt-2 text-gray-700 font-medium">
            📅{" "}
            {payment.appointmentDate
              ? format(new Date(payment.appointmentDate), "MMMM dd, yyyy")
              : "N/A"}
          </p>

          <p className="text-gray-500 mt-1">
            🕙 {payment.appointmentSlot}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase text-gray-400">
            Financial Co-Pay
          </p>

          <p className="mt-2 text-green-600 font-bold text-lg">
            ${payment.amount}
          </p>

          <span
            className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${
              payment.paymentStatus === "Paid"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {payment.paymentStatus}
          </span>
        </div>
      </div>

      {/* Symptoms */}
      <div className="bg-gray-50 rounded-2xl p-4 mt-6">
        <p className="italic text-sm text-gray-500">
          {payment.symptoms}
        </p>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        <RescheduleAppointmentForm
          payment={payment}
          availableSlots={doctorInfo?.availableSlots || []}
        />

       <CancelAppointment payment={payment}/>
      </div>
    </div>
  );
})}
</div>}
        </div>
    );
};

export default page;
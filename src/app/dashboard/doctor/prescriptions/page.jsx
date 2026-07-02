import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { FaCalendarTimes, FaHome } from 'react-icons/fa';
import { FaPlus, FaStethoscope, FaUserInjured } from 'react-icons/fa6';
import { GiMedicines } from 'react-icons/gi';
import UpdatePrescription from './UpdatePrescription';
import DeletePrescription from './DeletePrescription';

const page = async () => {
    const session = await auth.api.getSession({
             headers: await headers(),
           });
         
           const user = session?.user;

           const tokenData = await auth.api.getToken({
          headers: await headers(),
        });
        console.log(tokenData)
           
         const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor?doctorId=${user?.id}`,
      {
        cache: "no-store",
         headers : {
                      authorization: `Bearer ${tokenData.token}`,
            }
      }
    );
    
    const data = await res.json();
    const doctor = data?.data?.[0];
    
    if (!doctor) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white border border-slate-200 rounded-3xl shadow-sm p-10 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-sky-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
            />
          </svg>
        </div>

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          Complete Your Doctor Profile
        </h2>

        <p className="mt-3 text-slate-600 leading-7">
          Your doctor verification profile has not been submitted yet.
          Complete your professional information to request verification
          and start accepting appointments.
        </p>

        <Link
          href='/dashboard/doctor/complete-profile'
        >
          <Button className="mt-5 rounded-xl bg-sky-600 px-8 py-3 font-semibold text-white hover:bg-sky-700 transition">Create Doctor Profile</Button>
        </Link>
      </div>
    </div>
  );
}

const prescriptionRes = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prescriptions?doctorId=${user?.id}`,
  {
    cache: "no-store",
    headers : {
                      authorization: `Bearer ${tokenData.token}`,
            }
  }
);

const prescriptionData = await prescriptionRes.json();
const prescriptions = prescriptionData.data || [];

if (doctor?.status === "Suspended") {
  return (
    <div className="min-h-[75vh] flex items-center justify-center">
      <div className="max-w-2xl w-full bg-red-50 border border-red-200 rounded-3xl p-10 text-center">

        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
          <span className="text-5xl">🚫</span>
        </div>

        <h1 className="text-3xl font-bold text-red-700">
          Your  Account is Suspended
        </h1>

        <p className="mt-4 text-slate-600 leading-7">
          Your doctor account has been temporarily suspended by the administrator.
          You cannot manage appointments, schedules, prescriptions, or access
          other doctor features until your account is reactivated.
        </p>

        <div className="mt-8 bg-white rounded-2xl border border-red-200 p-5">
          <h3 className="font-semibold text-slate-800">
            Need Assistance?
          </h3>

          <p className="mt-2 text-slate-500">
            Please contact the administrator if you believe this was a mistake
            or require further information regarding your account status.
          </p>
          <p className="text-red-600">
            admin.medicare@gmail.com
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/">
            <Button className="bg-sky-600 hover:bg-sky-700 transition duration-300 text-white px-8 rounded-xl flex items-center justify-center gap-2">
              <FaHome/> Go to Home
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}

    return (
         <div className='space-y-8'>
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
           {prescriptions.length === 0 ? (
  <div className="bg-white border border-slate-200 rounded-3xl p-10">
    <div className="flex flex-col items-center justify-center text-center py-12">
      <div className="w-24 h-24 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center">
        <GiMedicines className="text-5xl text-sky-600" />
      </div>

      <h2 className="mt-6 text-3xl font-bold text-slate-900">
        No Prescriptions Found
      </h2>

      <p className="mt-3 max-w-xl text-slate-500 leading-7">
        There are no prescription records available at the moment.
      </p>

      <div className="flex gap-4 mt-8">
        <Link href="/dashboard/doctor/prescriptions/create-prescription">
          <Button className="bg-sky-600 text-white rounded-xl">
            <FaPlus />
            Create Prescription
          </Button>
        </Link>

        <Link href="/dashboard/doctor">
          <Button
            variant="bordered"
            className="border-sky-600 text-sky-600 rounded-xl"
          >
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  </div>
) : (
  <div className="grid gap-6">
    {prescriptions.map((prescription) => (
      <div key={prescription._id}>
        <div
        
        className="bg-white border rounded-3xl p-6 shadow-sm hover:shadow-md transition"
      >
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {prescription.patientName}
            </h2>

            <p className="mt-2 text-sm font-semibold uppercase text-sky-600">
              Patient
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase text-gray-400">
                Diagnosis
              </p>

              <h4 className="font-semibold mt-2">
                {prescription.diagnosis}
              </h4>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-400">
                Follow Up
              </p>

              <h4 className="font-semibold mt-2">
                {prescription.followUp}
              </h4>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-400">
                Medicines
              </p>

              <h4 className="font-semibold mt-2">
                {[prescription.medicine1, prescription.medicine2]
                  .filter(Boolean)
                  .length}
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-5 space-y-2">
          <p>
            <span className="font-semibold">Symptoms:</span>{" "}
            {prescription.symptoms}
          </p>

          <p>
            <span className="font-semibold">Medicine 1:</span>{" "}
            {prescription.medicine1} ({prescription.dosage1}) •{" "}
            {prescription.frequency1} • {prescription.duration1} Days
          </p>

          {prescription.medicine2 && (
            <p>
              <span className="font-semibold">Medicine 2:</span>{" "}
              {prescription.medicine2} ({prescription.dosage2}) •{" "}
              {prescription.frequency2} • {prescription.duration2} Days
            </p>
          )}

          <p>
            <span className="font-semibold">Advice:</span>{" "}
            {prescription.advice}
          </p>
        </div>

        <div className="mt-6 flex justify-end gap-3">

          <UpdatePrescription prescription ={prescription}/>

          <DeletePrescription prescription ={prescription}/>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/dashboard/doctor/prescriptions/create-prescription">
          <Button className="bg-sky-600 text-white rounded-xl">
            <FaPlus />
            Create Prescription
          </Button>
        </Link>
      </div>
      </div>
    ))}
  </div>
)}
         </div>
            
    );
};

export default page;
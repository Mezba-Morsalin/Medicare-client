import React from 'react';
import DoctorProfile from './DoctorProfile';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { FaStethoscope } from 'react-icons/fa';

const page = async () => {
  const session = await auth.api.getSession({
               headers: await headers(),
             });
           
             const user = session?.user;
             
           const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor?doctorId=${user?.id}`,
        {
          cache: "no-store",
        }
      );
      
      const data = await res.json();
      const doctor = data?.data?.[0];
      if (!doctor) {
    return (
      <div className="p-10 text-center">
        Doctor profile not found
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
      <DoctorProfile doctor = {doctor}/>
    </div>
  );
};

export default page;
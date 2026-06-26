import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { FaCalendarTimes } from 'react-icons/fa';
import { FaPlus, FaStethoscope, FaUserInjured } from 'react-icons/fa6';
import { GiMedicines } from 'react-icons/gi';

const page = async () => {
    const session = await auth.api.getSession({
             headers: await headers(),
           });
         
           const user = session?.user;
           
         const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors?doctorId=${user?.id}`,
      {
        cache: "no-store",
      }
    );
    
    const data = await res.json();
    const doctor = data?.data?.[0];

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
              doctor.status === "Approved"
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
          Create a new prescription to maintain organized treatment
          history and provide patients with accurate medication details.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <Link href="/dashboard/doctor/prescriptions/create-prescription">
            <Button className="bg-sky-600 rounded-xl text-white px-6">
              <FaPlus />
              Create Prescription
            </Button>
          </Link>

          <Link href="/dashboard/doctor">
            <Button className="border border-sky-600 text-sky-600 rounded-xl" variant="bordered">
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
         </div>
            
    );
};

export default page;
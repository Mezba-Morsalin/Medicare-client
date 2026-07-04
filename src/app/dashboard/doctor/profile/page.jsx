import React from 'react';
import DoctorProfile from './DoctorProfile';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { FaHome, FaStethoscope } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { getUserToken } from '@/lib/session';
import Image from 'next/image';

const page = async () => {
  const session = await auth.api.getSession({
               headers: await headers(),
             });
           
             const user = session?.user;

             const token = await getUserToken()
             
           const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor?doctorId=${user?.id}`,
        {
          cache: "no-store",
           headers : {
                                authorization: `Bearer ${token}`,
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
      <div className="bg-linear-to-r from-sky-600 to-cyan-500 rounded-3xl p-6 md:p-8 text-white shadow-lg">
            
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
                  {/* Left Content */}
                  <div className="flex-1 text-center lg:text-left">
            
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
                      <FaStethoscope />
                      Licensed Clinical Practitioner
                    </div>
            
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mt-5">
                      Greetings, {user?.name}
                    </h1>
            
                    {doctor && (
                      <div className="mt-4">
                        <span
                          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                            doctor.status === "Verified"
                              ? "bg-green-100 text-green-700"
                              : doctor.status === "Rejected"
                              ? "bg-red-100 text-red-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {doctor.status}
                        </span>
                      </div>
                    )}
            
                    <p className="mt-5 max-w-2xl text-white/90 leading-relaxed">
                      Streamline patient care, oversee appointment management,
                      coordinate treatment plans, and enhance clinical outcomes
                      with your comprehensive physician workspace.
                    </p>
            
                    {/* Mobile Specialty */}
                    <div className="lg:hidden mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <p className="text-xs uppercase font-semibold text-white/70">
                        Medical Specialty
                      </p>
            
                      <p className="font-bold mt-1 text-lg">
                        {user?.specialization || "General Physician"}
                      </p>
                    </div>
                  </div>
            
                  {/* Right Side */}
                  <div className="flex flex-col items-center">
            
                    <div className="relative">
                      <Image
                        src={doctor?.image}
                        alt="doctor-image"
                        width={180}
                        height={180}
                        className="rounded-3xl object-cover border-4 border-white shadow-xl"
                      />
                    </div>
            
                    <div className="hidden lg:block mt-5 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center min-w-[220px]">
                      <p className="text-xs uppercase font-semibold text-white/70">
                        Medical Specialty
                      </p>
            
                      <p className="font-bold mt-2 text-lg">
                        {user?.specialization || "General Physician"}
                      </p>
                    </div>
                  </div>
            
                </div>
              </div>
      <DoctorProfile doctor = {doctor} token ={token}/>
    </div>
  );
};

export default page;
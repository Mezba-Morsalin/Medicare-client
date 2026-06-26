import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa6';

const page = async () => {
     const session = await auth.api.getSession({
                     headers: await headers(),
                   });
                 
                   const user = session?.user;
    return (
        <div className='space-y-8'>
            <div className="bg-white border rounded-3xl p-6 flex items-center justify-between">
                                <div>
                                  <p className="text-xs uppercase tracking-widest text-sky-600 font-bold">
                                    Patient Administrative Portal
                                  </p>
                        
                                  <h1 className="text-4xl font-bold mt-2">
                                    Welcome back, {user?.name}
                                  </h1>
                        
                                  <p className="text-gray-500 mt-2">
                                    Identity: {user?.id} • Role: {user?.role}
                                  </p>
                                </div>
                        
                                <div className="flex items-center gap-4">
                                  <div className="text-right">
                                    <p className="text-xs uppercase text-gray-400 font-semibold">
                                      Health Identity Verified
                                    </p>
                        
                                    <p className="text-green-600 font-bold">
                                      HIPAA Secured
                                    </p>
                                  </div>
                        
                                  <Image
                                    src={user?.image}
                                    alt="patient"
                                    width={60}
                                    height={60}
                                    className="rounded-2xl"
                                  />
                                </div>
                              </div>
            <div className="bg-white border border-slate-200 rounded-3xl py-20 px-8 flex flex-col items-center text-center">
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
          className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
        </div>
    );
};

export default page;
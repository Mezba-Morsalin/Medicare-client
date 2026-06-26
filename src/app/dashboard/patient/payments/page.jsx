import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaMoneyCheckAlt } from 'react-icons/fa';


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
            <div className="bg-white border border-slate-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center">
      <div className="h-20 w-20 rounded-full bg-green-50 flex items-center justify-center">
        <FaMoneyCheckAlt className="text-4xl text-green-600" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        No Payment History Found
      </h2>

      <p className="mt-3 max-w-md text-slate-500 leading-relaxed">
        You have not completed any consultation payments yet.
        Once an appointment payment is successfully processed,
        your transaction history will appear here.
      </p>

      <Link
        href="/find-doctor"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
      >
        Find a Doctor
      </Link>
    </div>
        </div>
  );

};

export default page;
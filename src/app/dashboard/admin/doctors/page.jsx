import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import { BsActivity } from 'react-icons/bs';
import ManageDoctor from './ManageDoctor';

const page = async () => {
    const session = await auth.api.getSession({
            headers: await headers(),
          });
        
          const user = session?.user;

          const doctorsRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/all/doctors`,
  {
    cache: "no-store",
  }
);

const doctorsData = await doctorsRes.json();
const doctors = doctorsData.data;
    return (
        <div className='space-y-8'>
            <div className="rounded-3xl bg-sky-600 p-8 text-white flex flex-col lg:flex-row justify-between gap-6">
                  <div>
                    <h1 className="text-3xl font-bold">
                      Security Hub:
                      <span className="text-white">{user?.name}</span>
                    </h1>
            
                    <p className="mt-3 text-sky-100 max-w-2xl">
                      Active verification terminal. Access directories, suspend medical
                      profiles, track system ledger analytics and verification parameters.
                    </p>
                  </div>
            
                  <div className="flex items-center">
                    <div className="rounded-full bg-white/15 px-5 py-3 flex items-center gap-2">
                      <BsActivity size={18} />
                      <span className="font-semibold tracking-widest text-xs">
                        CLINIC OPERATIONAL LEDGER
                      </span>
                    </div>
                  </div>
                </div>
                <ManageDoctor doctors = {doctors}/>
        </div>
    );
};

export default page;
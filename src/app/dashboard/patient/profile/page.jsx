import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const page = async () => {
    const session = await auth.api.getSession({
                         headers: await headers(),
                       });
                     
                       const user = session?.user;
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
                                            Health Identity
                                          </p>
                                    
                                          <p
              className={`font-bold ${
                user.status === "Active"
                  ? "text-green-600"
                  : user.status === "Suspended"
                  ? "text-red-600"
                  : "text-amber-600"
              }`}
            >
              {user.status}
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
        </div>
    );
};

export default page;
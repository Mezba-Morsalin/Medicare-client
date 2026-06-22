"use client"

import { outfit } from '@/lib/font';
import { Button, Form, Input, Label, ListBox, TextField, Select } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiImage, FiLock, FiMail, FiPhone, FiUser } from 'react-icons/fi';

const SigninPage = () => {
    const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 ">
                {/* LEFT SIDE */}
                <div>
                  <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 max-w-xl">
  Welcome Back to <br /> Medicare <span className="text-sky-600">Connect</span>
</h1>

<p className="mt-8 text-lg text-slate-600 max-w-xl leading-relaxed">
  Sign in to access your healthcare dashboard, manage upcoming
  appointments, review medical information, and stay connected with
  trusted healthcare professionals anytime.
</p>
                </div>
        
                {/* RIGHT SIDE */}
                <div className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">
  Access Your Healthcare Dashboard
</h1>

<p className="mt-2 text-sm text-slate-500">
  Securely sign in to continue managing appointments, patient records, and healthcare services.
</p>
                  </div>
        
                  <Form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >

        
                    {/* Email + Role */}
                    <div className="">
                      <TextField
                        isRequired
                        name="email"
                        className="w-full"
                      >
                        <Label>Email Coordinates *</Label>
        
                        <div className="relative w-full">
                          <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />
        
                          <Input
                            type="email"
                            className="w-full pl-10"
                            placeholder="e.g. alice@gmail.com"
                          />
                        </div>
                      </TextField>

                    </div>

        
                    {/* Password */}
                    <TextField
                      isRequired
                      name="password"
                      className="w-full"
                    >
                      <Label>Account Passkey *</Label>
        
                      <div className="relative w-full">
                        <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />
        
                        <Input
                          type="password"
                          className="w-full pl-10"
                          placeholder="6+ chars, 1 number, 1 special sign"
                        />
                      </div>
                    </TextField>
        
                    <Button
                      type="submit"
                      className="mt-2 h-12 w-full rounded-xl bg-sky-600 text-white font-semibold"
                    >
                      Sign In Your Account
                    </Button>
                  </Form>
        
                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex-1 border-t border-zinc-300"></div>
        
                    <p className="text-sm text-zinc-500 font-medium">
                      OR
                    </p>
        
                    <div className="flex-1 border-t border-zinc-300"></div>
                  </div>
        
                  <Button
                    className="mt-6 w-full bg-white border border-zinc-300 text-zinc-700 rounded-xl"
                  >
                    <FcGoogle size={22} />
                    Sign In With Google
                  </Button>
                  <div className='flex justify-center mt-5'>
                    <p className='text-slate-600'>Don&#39;t have an account? <span className='text-sky-600 font-bold'><Link href={'/signup'}>Sign Up</Link></span></p>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default SigninPage;
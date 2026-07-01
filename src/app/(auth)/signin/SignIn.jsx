"use client"

import { authClient } from '@/lib/auth-client';

import { Button, Form, Input, Label, TextField, } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FiLock, FiMail} from 'react-icons/fi';

const SigninPage = () => {
   const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
    const handleSubmit = async(e) => {
    e.preventDefault();
setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    console.log(user);

    try {
      const {data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
        rememberMe: true,
      });

      if (error) {
        setIsSuccess(false);
        setMessage(error.message || "Failed to sign in.");
        return;
      }

      if (data) {
        setIsSuccess(true);
      setMessage("Welcome back! You have signed in successfully.");
      e.target.reset();
      setTimeout(() => {
  router.push("/");
}, 2000);
      }

    } catch (error) {
      setIsSuccess(false);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
                      className="w-full relative"
                    >
                      <Label>Account Passkey *</Label>
        
                      <div className="relative w-full">
                        <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />
        
                        <Input
                          type={showPassword ? "text" : "password"}
                          className="w-full pl-10"
                          placeholder="6+ chars, 1 number, 1 special sign"
                        />
                      </div>
                      <span onClick={()=> setShowPassword(!showPassword)} className="absolute top-8.5 cursor-pointer right-5">
                                            {
                                                showPassword ? <FaEye/> : <FaEyeSlash/>
                                            }
                                          </span>
                    </TextField>
                    {/* Success / Error Message */}
        {message && (
          <div
            className={`w-full rounded-xl px-4 py-3 text-sm font-medium ${
              isSuccess
                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                : "bg-red-500/10 border border-red-500/20 text-red-400"
            }`}
          >
            {message}
          </div>
        )}
        
                    <Button
                      type="submit"
                       isDisabled={loading}
                      className="mt-2 h-12 w-full rounded-xl bg-sky-600 text-white font-semibold"
                    >
                     {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Signing In...
            </span>
          ) : (
            <>
              Sign In
            </>
          )}
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
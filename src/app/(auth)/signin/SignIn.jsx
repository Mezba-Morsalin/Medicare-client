"use client"

import { authClient } from '@/lib/auth-client';

import { Button, Form, Input, Label, TextField, } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FiLock, FiMail} from 'react-icons/fi';

const SigninPage = () => {
   const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
    
const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setMessage("");

  const form = e.currentTarget;
  const formData = new FormData(form);
  const user = Object.fromEntries(formData.entries());

  try {
    const { data, error } = await authClient.signIn.email({
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
      // Login successful; get the actual logged-in user's session.
      const { data: sessionData, error: sessionError } =
        await authClient.getSession();

      if (sessionError || !sessionData?.user) {
        setIsSuccess(false);
        setMessage(
          "Login successful, but unable to load your session. Please try again."
        );
        return;
      }

      const role = sessionData.user.role;

      // Only allow dashboard routes that actually belong to your app.
      if (role !== "doctor" && role !== "patient") {
        setIsSuccess(false);
        setMessage(
          "Your account role is missing or invalid. Please contact support."
        );
        return;
      }

      setIsSuccess(true);
      setMessage("Welcome back! You have signed in successfully.");

      form.reset();

      setTimeout(() => {
        router.push(`/dashboard/${role}`);
      },2000)
    }
  } catch (error) {
    console.error("Sign in error:", error);
    setIsSuccess(false);
    setMessage("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  const handleGoogleLogin = async () => {
  try {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Google login failed");
    }
  } catch (error) {
    toast.error("Something went wrong with Google login");
    console.error("Google login error:", error);
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
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
  Access Your Medicare Dashboard
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
                        <Label>Email</Label>
        
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
                      <Label>Password</Label>
        
                      <div className="relative w-full">
                        <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />
        
                        <Input
                          type={showPassword ? "text" : "password"}
                          className="w-full pl-10"
                          placeholder="Type Password"
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
        
                  <Button onClick={()=> handleGoogleLogin()}
                    className="mt-6 w-full bg-white border border-zinc-300 text-zinc-700 rounded-xl hover:bg-gray-300 transition duration-300"
                  >
                    <FcGoogle size={22} />
                    Sign In With Google
                  </Button>
                  <div className='flex justify-center mt-5'>
                    <p className='text-slate-600'>Don&#39;t have an account? <span className='text-sky-600 font-bold'><Link href={'/signup'}>Sign Up</Link></span></p>
                  </div>
                </div>
              </div>
              <Toaster/>
            </div>
    );
};

export default SigninPage;
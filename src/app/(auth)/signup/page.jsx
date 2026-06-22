
"use client";

import { outfit } from "@/lib/font";

import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiImage,
  FiLock,
} from "react-icons/fi";

export default function SignUpPage() {
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
  Launch Your Digital <br /> Medicare <span className="text-sky-600">Connect</span> Account
</h1>

<p className="mt-8 text-lg text-slate-600 max-w-xl leading-relaxed">
  Create your MediCare Connect profile to schedule appointments,
  connect with verified doctors, access medical records, and manage
  your healthcare journey from a single secure platform.
</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
  Launch Your MediCare Profile
</h1>

<p className="mt-2 text-sm text-slate-500">
  Set up your secure healthcare account and connect with trusted medical professionals in minutes.
</p>
          </div>

          <Form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <TextField
              isRequired
              name="name"
              className="w-full"
            >
              <Label>Full Legal Name *</Label>

              <div className="relative w-full">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />

                <Input
                  className="w-full pl-10"
                  placeholder="e.g. Alice Miller"
                />
              </div>
            </TextField>

            {/* Email + Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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

              <Select
                name="role"
                className="w-full"
                placeholder="Select role"
              >
                <Label>Account Role *</Label>

                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item
                      id="patient"
                      textValue="Patient Client"
                    >
                      Patient Client
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="doctor"
                      textValue="Doctor"
                    >
                      Doctor
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="admin"
                      textValue="Admin"
                    >
                      Admin
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Phone + Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <TextField
                name="phone"
                className="w-full"
              >
                <Label>Primary Voice Phone</Label>

                <div className="relative w-full">
                  <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />

                  <Input
                    className="w-full pl-10"
                    placeholder="+1 555-019-2834"
                  />
                </div>
              </TextField>

              <Select
                name="gender"
                className="w-full"
                placeholder="Select gender"
              >
                <Label>Gender Identity</Label>

                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item
                      id="male"
                      textValue="Male"
                    >
                      Male
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="female"
                      textValue="Female"
                    >
                      Female
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="other"
                      textValue="Other"
                    >
                      Other
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Photo */}
            <TextField
              name="photo"
              className="w-full"
            >
              <Label>Photo URL (Optional)</Label>

              <div className="relative w-full">
                <FiImage className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />

                <Input
                  className="w-full pl-10"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
            </TextField>

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
              Create Your Medicare Profile
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
            Sign Up With Google
          </Button>
          <div className='flex justify-center mt-5'>
                    <p className='text-slate-600'>Already have an account? <span className='text-sky-600 font-bold'><Link href={'/signin'}>Sign In</Link></span></p>
                  </div>
        </div>
      </div>
    </div>
  );
}
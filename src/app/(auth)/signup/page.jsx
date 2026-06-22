"use client";

import {
  Button,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

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
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-5">
      <div className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Launch Patient Account
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Instantly record database registry profiles for appointment
            schedules
          </p>
        </div>

        <Form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Full Name */}
          <TextField
            isRequired
            name="name"
            className="w-full"
          >
            <Label>Full Legal Name *</Label>

            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />

              <Input
                className="pl-10"
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

              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />

                <Input
                  type="email"
                  className="pl-10"
                  placeholder="e.g. alice@gmail.com"
                />
              </div>
            </TextField>

            <div className="w-full">
              <Label>Account Role *</Label>

              <select
                name="role"
                className="mt-2 h-12 w-full rounded-xl border border-zinc-300 px-4 outline-none focus:border-sky-500"
              >
                <option value="patient">
                  Patient Client
                </option>

                <option value="doctor">
                  Doctor
                </option>

                <option value="admin">
                  Admin
                </option>
              </select>
            </div>
          </div>

          {/* Phone + Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <TextField
              name="phone"
              className="w-full"
            >
              <Label>Primary Voice Phone</Label>

              <div className="relative">
                <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />

                <Input
                  className="pl-10"
                  placeholder="+1 555-019-2834"
                />
              </div>
            </TextField>

            <div className="w-full">
              <Label>Gender Identity</Label>

              <select
                name="gender"
                className="mt-2 h-12 w-full rounded-xl border border-zinc-300 px-4 outline-none focus:border-sky-500"
              >
                <option value="male">
                  Male
                </option>

                <option value="female">
                  Female
                </option>

                <option value="other">
                  Other
                </option>
              </select>
            </div>
          </div>

          {/* Photo URL */}
          <TextField
            name="photo"
            className="w-full"
          >
            <Label>Photo URL (Optional)</Label>

            <div className="relative">
              <FiImage className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />

              <Input
                className="pl-10"
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

            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10" />

              <Input
                type="password"
                className="pl-10"
                placeholder="6+ chars, 1 number, 1 special sign"
              />
            </div>
          </TextField>

          <Button
            type="submit"
            className="mt-2 h-12 w-full bg-[#0284c7] text-white font-semibold"
          >
            Publish Registry & Launch Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
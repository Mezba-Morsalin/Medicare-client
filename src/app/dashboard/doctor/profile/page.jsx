"use client";

import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  TextArea,
} from "@heroui/react";

export default function UserProfilePage() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-blue-700 p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-wider">
          Patient Portal
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Profile Settings
        </h1>

        <p className="mt-3 max-w-2xl text-white/90">
          Manage your personal information, healthcare profile,
          and contact details.
        </p>
      </div>

      {/* Form Card */}
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">
          Personal Information
        </h2>

        <div className="mt-4 border-b" />

        <Form className="mt-6 flex flex-col gap-5">
          {/* Name + Email */}
          <div className="grid w-full gap-4 md:grid-cols-2">
            <TextField name="name">
              <Label>Full Name *</Label>
              <Input defaultValue="John Smith" />
            </TextField>

            <TextField name="email">
              <Label>Email Address *</Label>
              <Input
                type="email"
                defaultValue="john@example.com"
              />
            </TextField>
          </div>

          {/* Phone + Gender */}
          <div className="grid w-full gap-4 md:grid-cols-2">
            <TextField name="phone">
              <Label>Phone Number</Label>
              <Input defaultValue="+1 555-123-4567" />
            </TextField>

            <TextField name="gender">
              <Label>Gender</Label>
              <Input defaultValue="Male" />
            </TextField>
          </div>

          {/* Age + Blood Group */}
          <div className="grid w-full gap-4 md:grid-cols-2">
            <TextField name="age">
              <Label>Age</Label>
              <Input defaultValue="28" />
            </TextField>

            <TextField name="bloodGroup">
              <Label>Blood Group</Label>
              <Input defaultValue="O+" />
            </TextField>
          </div>

          {/* Address */}
          <TextField name="address">
            <Label>Address</Label>
            <Input defaultValue="New York, USA" />
          </TextField>

          {/* Medical Notes */}
          <TextField name="medicalNotes">
            <Label>Medical Notes</Label>

            <TextArea
              rows={4}
              defaultValue="No known allergies."
            />
          </TextField>

          <div className="flex justify-end">
            <Button
              className="bg-sky-600 text-white"
              size="lg"
            >
              Save Profile Changes
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
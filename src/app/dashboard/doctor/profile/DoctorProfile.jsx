"use client";

import { Button, Input, TextArea } from "@heroui/react";

export default function DoctorProfile({ doctor }) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">
          Professional Information
        </h2>

        <div className="my-5 border-b" />

        <div className="space-y-5">
  <div className="grid gap-4 md:grid-cols-2">
    <Input
      label="Doctor Name"
      name="name"
      value={doctor?.name ?? ""}
      readOnly
    />

    <Input
      label="Doctor Image"
      name="doctorImage"
      value={doctor?.image ?? ""}
      readOnly
    />
  </div>

  <div className="grid gap-4 md:grid-cols-2">
    <Input
      label="Specialization"
      name="specialization"
      value={doctor?.specialization ?? ""}
      readOnly
    />

    <Input
      label="Hospital"
      name="hospital"
      value={doctor?.hospital ?? ""}
      readOnly
    />
  </div>

  <div className="grid gap-4 md:grid-cols-2">
    <Input
      label="Experience"
      name="experience"
      value={`${doctor?.experience ?? 0} Years`}
      readOnly
    />

    <Input
      label="Consultation Fee"
      name="fee"
      value={`$${doctor?.fee ?? 0}`}
      readOnly
    />
  </div>

  <div className="grid gap-4 md:grid-cols-2">
    <Input
      label="Rating"
      name="rating"
      value={`${doctor?.rating ?? 0}`}
      readOnly
    />

    <Input
      label="Reviews"
      name="reviews"
      value={`${doctor?.reviews ?? 0}`}
      readOnly
    />
  </div>

  <div className="grid gap-4 md:grid-cols-2">
    <Input
      label="Degree"
      name="degrees"
      value={doctor?.degrees ?? ""}
      readOnly
    />

    <Input
      label="Languages"
      name="languages"
      value={doctor?.languages?.join(", ") ?? ""}
      readOnly
    />

    <Input
      label="Practice Days"
      name="practiceDays"
      value={doctor?.practiceDays?.join(", ") ?? ""}
      readOnly
    />

    <Input
      label="Available Slots"
      name="availableSlots"
      value={doctor?.availableSlots?.join(", ") ?? ""}
      readOnly
    />

    <Input
      label="Verification Status"
      name="status"
      value={doctor?.status ?? ""}
      readOnly
    />
  </div>

  <TextArea
    label="Professional Biography"
    name="description"
    rows={5}
    value={doctor?.description ?? ""}
    className="w-full"
    readOnly
  />

  <div className="flex justify-end">
    <Button className="rounded-xl bg-sky-600">
      Edit Profile
    </Button>
  </div>
</div>
      </div>
    </div>
  );
}
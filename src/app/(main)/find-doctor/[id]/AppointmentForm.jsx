"use client";

import { Button, Form, TextArea } from "@heroui/react";

const AppointmentForm = ({ doctor }) => {
  return (
    <Form
      action="/api/checkout_sessions"
      method="POST"
      className="space-y-4"
    >
      {/* Hidden Fields */}
      <input
        type="hidden"
        name="doctorId"
        value={doctor._id}
      />

      <input
        type="hidden"
        name="doctorName"
        value={doctor.name}
      />

      <input
        type="hidden"
        name="fee"
        value={doctor.fee}
      />

      {/* Appointment Date */}
      <input
        type="date"
        name="appointmentDate"
        className="w-full border rounded-xl px-4 py-3"
        required
      />
      <input
  type="hidden"
  name="doctorImage"
  value={doctor.image}
/>
      <input
  type="hidden"
  name="doctorSpecialization"
  value={doctor.specialization}
/>
      <input
  type="hidden"
  name="doctorHospital"
  value={doctor.hospital}
/>

      {/* Time Slot */}
      <select
        name="appointmentSlot"
        className="w-full border rounded-xl px-4 py-3"
        required
      >
        <option value="">Choose a slot</option>

        {doctor.availableSlots?.map((slot) => (
          <option
            key={slot}
            value={slot}
          >
            {slot}
          </option>
        ))}
      </select>

      {/* Symptoms */}
      <TextArea
        name="symptoms"
        rows={4}
        placeholder="Symptoms / Medical Disclosure"
        className="w-full border rounded-xl px-4 py-3"
      />

      <div className="bg-sky-50 border rounded-xl p-4 text-xs text-slate-500">
        Appointment booking requires confirmation and payment
        verification before schedule activation.
      </div>

      <Button
        type="submit"
        className="w-full py-3 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
      >
        BOOK APPOINTMENT SESSION
      </Button>
    </Form>
  );
};

export default AppointmentForm;
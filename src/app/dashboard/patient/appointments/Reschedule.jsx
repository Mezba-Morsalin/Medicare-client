"use client";

import { Button, Form, Modal, Surface } from "@heroui/react";
import { div } from "motion/react-client";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const RescheduleAppointmentForm = ({  payment, availableSlots = [],}) => {
    const router = useRouter()
    const handleReschedule = async (e) => {
  e.preventDefault();

  const form = e.target;

  const appointmentDate = form.appointmentDate.value;
  const appointmentSlot = form.appointmentSlot.value;

  try {
    const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/${payment._id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appointmentDate,
        appointmentSlot,
      }),
    }
  );

  const data = await res.json();

  if (data.success) {
    toast.success("Appointment Rescheduled Successfully");
    setTimeout(() => {
  router.refresh();
}, 1000);
  } else {
    toast.error(data.message);
  }

  } catch (error) {
    console.log(error)
    toast.error("Something Went Wrong")
  }
}
  return (
    <div>
        <Modal>
      <Button className="h-11 w-full rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold transition">
                Reschedule
              </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Body className="p-6">
              <Surface variant="default">
                <Form
      onSubmit={handleReschedule}
      className="space-y-6 bg-white rounded-3xl border border-gray-200 p-6 shadow-sm"
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Reschedule Appointment
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Choose a new appointment date and available time slot.
        </p>
      </div>

      <input
        type="hidden"
        name="appointmentId"
        value={payment._id}
      />

      <div className="space-y-2">
        <label className="font-semibold text-slate-700">
          Appointment Date
        </label>

        <input
          type="date"
          name="appointmentDate"
          defaultValue={payment.appointmentDate}
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-sky-500"
        />
      </div>

      <div className="space-y-2">
        <label className="font-semibold text-slate-700">
          Time Slot
        </label>

        <select
  name="appointmentSlot"
  defaultValue={payment.appointmentSlot}
  required
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-sky-500"
>
  <option value="">Select a Time Slot</option>

  {availableSlots?.map((slot) => (
    <option key={slot} value={slot}>
      {slot}
    </option>
  ))}
</select>
      </div>

      <Button
        type="submit"
        className="w-full bg-sky-600 text-white rounded-xl h-12 font-semibold"
      >
        Update Appointment
      </Button>
    </Form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    <Toaster/>
    </div>
  );
}


export default RescheduleAppointmentForm;
"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, Modal, Surface } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const UpdateSchedule = ({appointment, availableSlots}) => {
    const router = useRouter()
    const handleReschedule = async (e) => {
       e.preventDefault();
  e.stopPropagation();

  console.log("submit");

  const { data: tokenData } = await authClient.token();

  const form = e.target;

  const appointmentDate = form.appointmentDate.value;
  const appointmentSlot = form.appointmentSlot.value;

  try {
    const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/${appointment._id}`,
    {
      method: "PATCH",
      cache : "no-store",
      headers: {
        "Content-Type": "application/json",
        authorization : `Bearer ${tokenData?.token}`
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
      <Button  isDisabled={appointment.appointmentStatus === "Rejected"}
  className={`font-semibold bg-sky-600 rounded-xl ${
    appointment.appointmentStatus === "Rejected"
      ? "opacity-50 cursor-not-allowed"
      : ""
  }`}>
                Reschedule
              </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
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
        value={appointment._id}
      />

      <div className="space-y-2">
        <label className="font-semibold text-slate-700">
          Appointment Date
        </label>

        <input
          type="date"
          name="appointmentDate"
          defaultValue={appointment.appointmentDate}
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
  defaultValue={appointment.appointmentSlot}
  required
  className="w-full rounded-xl border border-gray-300 px-4 py-3"
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
        isDisabled={appointment.appointmentStatus === "Rejected"}
      className="bg-sky-600 text-white"
    >
       Confirm Reschedule
      </Button>
    </form>
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


export default UpdateSchedule;
"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";


const CancelAppointment = ({ payment }) => {
  const router = useRouter();

  const handleCancel = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/${payment._id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Appointment cancelled successfully.");

        setTimeout(() => {
          router.refresh();
        }, 1000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <AlertDialog>
      <Button className="h-11 w-full rounded-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold transition">
        Cancel
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-md rounded-3xl">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Cancel Appointment?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <div className="space-y-3">
                <p className="text-gray-600">
                  Are you sure you want to cancel your appointment with{" "}
                  <span className="font-semibold text-slate-900">
                    Dr. {payment.doctorName}
                  </span>
                  ?
                </p>

                <div className="rounded-xl border bg-red-50 border-red-200 p-3">
                  <p className="text-sm text-red-700">
                    This action cannot be undone. You will need to book a new
                    appointment if you wish to consult this doctor again.
                  </p>
                </div>
              </div>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button
                slot="close"
                variant="secondary"
                className="rounded-xl"
              >
                Keep Appointment
              </Button>

              <Button
                slot="close"
                variant="danger"
                className="rounded-xl"
                onPress={handleCancel}
              >
                Yes, Cancel Appointment
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
      <Toaster/>
    </AlertDialog>
  );
};

export default CancelAppointment;
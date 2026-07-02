"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";


const RemoveSchedule = ({ appointment}) => {
  const router = useRouter();

  const handleCancel = async () => {
    const {data : tokenData} = await authClient.token()
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/${appointment._id}`,
        {
          method: "DELETE",
          cache : "no-store",
          headers: {
          authorization : `Bearer ${tokenData?.token}`
        },
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Schedule Removed successfully.");

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
      <Button
            variant="danger-soft"
            className="font-semibold">
            Remove Schedule
          </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-md rounded-3xl">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Remove Schedule?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <div className="space-y-3">
                <p className="text-gray-600">
                  Are you sure you want to remove your schedule with{" "}
                  <span className="font-semibold text-slate-900">
                    {appointment.patientName}
                  </span>
                  ?
                </p>

                <div className="rounded-xl border bg-red-50 border-red-200 p-3">
                  <p className="text-sm text-red-700">
                    This action cannot be undone. You will need to book a new
                    schedule if you wish to consult this doctor again.
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
                Keep Schedule
              </Button>

              <Button
                slot="close"
                variant="danger"
                className="rounded-xl"
                onPress={handleCancel}
              >
                Remove Schedule
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
      <Toaster/>
    </AlertDialog>
  );
};

export default RemoveSchedule;
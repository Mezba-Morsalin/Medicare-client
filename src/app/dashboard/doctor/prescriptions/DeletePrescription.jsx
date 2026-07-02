"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const DeletePrescription = ({ prescription }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prescriptions/${prescription._id}`,
        {
          method: "DELETE",
          cache : "no-store",
          headers : {
            authorization : `Bearer ${tokenData?.token}`
          }
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Prescription deleted successfully");

        setTimeout(() => {
          router.refresh();
        }, 800);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <AlertDialog>
        <Button variant="danger-soft">
          Delete
        </Button>

        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-md rounded-3xl">
              <AlertDialog.CloseTrigger />

              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />

                <AlertDialog.Heading>
                  Delete Prescription?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body>
                <p className="text-gray-600">
                  Are you sure you want to delete the prescription of{" "}
                  <span className="font-semibold">
                    {prescription.patientName}
                  </span>
                  ?
                </p>

                <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-4">
                  <p className="text-sm text-red-600">
                    This action cannot be undone.
                  </p>
                </div>
              </AlertDialog.Body>

              <AlertDialog.Footer>
                <Button slot="close" variant="secondary">
                  Cancel
                </Button>

                <Button
                  slot="close"
                  variant="danger"
                  onPress={handleDelete}
                >
                  Yes, Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>

      <Toaster />
    </>
  );
};

export default DeletePrescription;
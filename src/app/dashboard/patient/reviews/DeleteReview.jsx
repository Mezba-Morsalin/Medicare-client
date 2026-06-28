"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaDeleteLeft } from "react-icons/fa6";

const DeleteReview = ({ review }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews/${review._id}`,
        {
          method: "DELETE",
          cache : "no-store"
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);

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
    <>
      <AlertDialog>
        <Button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-red-50 text-red-600 font-semibold hover:bg-red-100">
          <FaDeleteLeft />
          Delete
        </Button>

        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-md rounded-3xl">
              <AlertDialog.CloseTrigger />

              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />

                <AlertDialog.Heading>
                  Delete Review?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Are you sure you want to delete your review for{" "}
                    <span className="font-semibold text-slate-900">
                      {review.doctorName}
                    </span>
                    ?
                  </p>

                  <div className="rounded-xl border border-red-200 bg-red-50 p-3">
                    <p className="text-sm text-red-700">
                      This action cannot be undone. Your rating and feedback
                      will be permanently removed.
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
                  Keep Review
                </Button>

                <Button
                  slot="close"
                  variant="danger"
                  className="rounded-xl"
                  onPress={handleDelete}
                >
                  Yes, Delete Review
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>

      <Toaster position="top-center" />
    </>
  );
};

export default DeleteReview;
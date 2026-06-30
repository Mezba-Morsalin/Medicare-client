"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const DeleteUser = ({ user }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${user._id}`,
        {
          method: "DELETE",
          cache : "no-store",
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("User deleted successfully");
        router.refresh();
      } else {
        toast.error(data.message || "Failed to delete user");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <AlertDialog>
        <Button variant="danger">
          Delete
        </Button>

        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[430px]">
              <AlertDialog.CloseTrigger />

              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />

                <AlertDialog.Heading>
                  Delete User?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body>
                <p className="text-slate-600">
                  Are you sure you want to permanently delete{" "}
                  <strong>{user.name}</strong>?
                </p>

                <p className="mt-2 text-sm text-red-500">
                  This action cannot be undone.
                </p>
              </AlertDialog.Body>

              <AlertDialog.Footer>
                <Button slot="close" variant="bordered">
                  Cancel
                </Button>

                <Button
                  slot="close"
                  variant="danger"
                  onPress={handleDelete}
                >
                  Delete User
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

export default DeleteUser;
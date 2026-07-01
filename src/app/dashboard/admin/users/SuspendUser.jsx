"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SuspendUser = ({ user }) => {
  const router = useRouter();

  const toggleSuspend = async (user) => {
    const {data : tokenData} = await authClient.token()
    const status =
      user.status === "Suspended"
        ? "Active"
        : "Suspended";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${user._id}/status`,
      {
        method: "PATCH",
        cache : "no-store",
        headers: {
          "Content-Type": "application/json",
          authorization : `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify({ status }),
      }
    );

    const data = await res.json();

    if (data.success) {
      toast.success(`User ${status} Successfully`);
      router.refresh();
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      <Button
  onPress={() => toggleSuspend(user)}
  className={`px-3 py-1 rounded-xl  ${
    user.status === "Suspended"
      ? "bg-green-600 hover:bg-green-700"
      : " bg-slate-200 text-red-700 hover:bg-slate-300 "
}`}
>
  {user.status === "Suspended" ? "Activate" : "Suspend"}
</Button>

      <Toaster />
    </>
  );
};

export default SuspendUser;
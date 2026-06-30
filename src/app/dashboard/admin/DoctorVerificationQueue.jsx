"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const DoctorVerificationQueue = ({ doctors }) => {
  const router = useRouter();

  const pendingDoctors = doctors.filter(
    (doctor) => doctor.status === "Pending"
  );

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors/${id}`,
        {
          method: "PATCH",
          cache : "no-store",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success(`Doctor ${status} Successfully`);
        router.refresh(); // reload server component data
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
      <div className="flex flex-col gap-8 md:flex-row items-center justify-between mb-8">
        <h2 className="text-lg font-bold uppercase tracking-wide text-slate-800">
          Doctor Verification Queue
        </h2>

        <div className="flex flex-col gap-5">
          <span className="px-4 py-1 rounded-full bg-amber-100 text-amber-600 text-sm font-semibold w-28 mx-auto text-center">
            {pendingDoctors.length} Waiting
          </span>

          <Link href="/dashboard/admin/doctors">
            <Button className="bg-sky-600 rounded-xl text-white flex items-center gap-2 hover:bg-sky-700 transition duration-300">
              See Doctor Management <FaArrowRight />
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-5">
        {pendingDoctors.slice(0, 3).map((doctor) => (
          <div
            key={doctor._id}
            className="border border-slate-200 rounded-2xl p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={60}
                height={60}
                className="rounded-full object-cover border"
              />

              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  {doctor.name}
                </h3>

                <p className="text-slate-500 text-sm">
                  {doctor.specialization} • {doctor.hospital}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
  {doctor.status === "Pending" && (
    <>
      <Button
        onPress={() => updateStatus(doctor._id, "Verified")}
        className="bg-emerald-600 text-white rounded-xl"
      >
        Get Verify
      </Button>

      <Button
        onPress={() => updateStatus(doctor._id, "Rejected")}
        variant="danger"
      >
        Reject
      </Button>
    </>
  )}

  {doctor.status === "Verified" && (
    <span className="px-4 py-2 rounded-xl bg-green-100 text-green-700 font-semibold">
      Verified
    </span>
  )}

  {doctor.status === "Rejected" && (
    <span className="px-4 py-2 rounded-xl bg-red-100 text-red-700 font-semibold">
      Rejected
    </span>
  )}
</div>
          </div>
        ))}

        {pendingDoctors.length === 0 && (
          <div className="py-10 text-center text-slate-500">
            No pending doctor verification requests.
          </div>
        )}
      </div>
      <Toaster/>
    </div>
  );
};

export default DoctorVerificationQueue;
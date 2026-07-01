"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const DoctorVerificationQueue = ({ doctors }) => {

  const pendingDoctors = doctors.filter(
    (doctor) => doctor.status === "Pending"
  );

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
          </div>
        ))}

        {pendingDoctors.length === 0 && (
          <div className="py-10 text-center text-slate-500">
            No pending doctor verification requests.
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorVerificationQueue;
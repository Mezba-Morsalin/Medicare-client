
import DashboardStats from "@/app/components/dashboardComponents/DoctorDashBoard/DashboardStats";
import DashboardChart from "@/app/components/dashboardComponents/DoctorDashBoard/DashboardChart";

import RecentPrescriptions from "@/app/components/dashboardComponents/DoctorDashBoard/RecentPresciptions";
import { FaStar, FaStethoscope } from "react-icons/fa";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Button } from "@heroui/react";

export default async function DoctorDashboard() {
  const session = await auth.api.getSession({
         headers: await headers(),
       });
     
       const user = session?.user;
       
     const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor?doctorId=${user?.id}`,
  {
    cache: "no-store",
  }
);

const data = await res.json();
const doctor = data?.data?.[0];

console.log("doctor", doctor);
if (!doctor) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
      <h2 className="text-2xl font-bold text-amber-900">
        Complete Your Professional Profile
      </h2>

      <p className="mt-3 text-amber-700 max-w-2xl">
        Your doctor profile has not been created yet. Complete your
        professional information to appear in the clinician directory,
        receive appointment requests, and begin managing patients through
        MediCare Connect.
      </p>

      <Link href="/dashboard/doctor/complete-profile">
        <Button className="mt-6 px-6 py-3 bg-sky-600 text-white rounded-xl font-medium hover:bg-sky-700 transition duration-300">
          Complete Profile
        </Button>
      </Link>
    </div>
  );
}
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-sky-600 text-white p-8 flex justify-between items-start">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase font-semibold opacity-90">
          <FaStethoscope />
          Licensed Clinical Practitioner
        </div>

        <div>
          <h1 className="text-4xl font-bold mt-3">
          Greetings, {user?.name}
        </h1>
        <p>{doctor && (
  <span
    className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
      doctor.status === "Approved"
        ? "bg-green-100 text-green-600"
        : doctor.status === "Rejected"
        ? "bg-red-100 text-red-600"
        : "bg-amber-100 text-amber-600"
    }`}
  >
    {doctor.status}
  </span>
)}</p>
        </div>

        <p className="mt-4 text-white/90 max-w-2xl leading-relaxed">
  Streamline patient care, oversee appointment management,
  coordinate treatment plans, and enhance clinical outcomes
  with your comprehensive physician workspace.
</p>
      </div>

      <div className="hidden md:block bg-sky-600 rounded-2xl px-5 py-4">
       <p className="text-xs font-semibold uppercase">
  Medical Specialty
</p>

        <p className="font-bold mt-1">
          {user?.specialization || "patient"}
        </p>
      </div>
    </div>

      <DashboardStats />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <DashboardChart />
        <div className="bg-white border rounded-3xl p-6">
      <h2 className="font-bold uppercase text-sm mb-6 flex items-center gap-2">
        <FaStar className="text-yellow-500" />
        Recent Patient Feedback Testimonials
      </h2>

      <div className="border rounded-2xl p-4">
        <h3 className="font-semibold">
          Alice Miller
        </h3>

        <p className="text-sm text-gray-500 mt-2 italic">
          Dr. Vance is incredible! His explanation of my
          dynamic heart health was extremely easy to follow.
        </p>
      </div>
    </div>
      </div>

      <RecentPrescriptions />
    </div>
  );
}
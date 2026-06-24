
import DashboardStats from "@/app/components/dashboardComponents/DoctorDashBoard/DashboardStats";
import DashboardChart from "@/app/components/dashboardComponents/DoctorDashBoard/DashboardChart";

import RecentPrescriptions from "@/app/components/dashboardComponents/DoctorDashBoard/RecentPresciptions";
import { FaStar, FaStethoscope } from "react-icons/fa";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function DoctorDashboard() {
  const session = await auth.api.getSession({
         headers: await headers(),
       });
     
       const user = session?.user;
       console.log("doctor", user)
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-sky-600 text-white p-8 flex justify-between items-start">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase font-semibold opacity-90">
          <FaStethoscope />
          Licensed Clinical Practitioner
        </div>

        <h1 className="text-4xl font-bold mt-3">
          Greetings, {user.name}
        </h1>

        <p className="mt-4 text-white/90 max-w-2xl">
          Manage practice days, review scheduling requests,
          audit patient medical alerts, and publish active
          prescriptions.
        </p>
      </div>

      <div className="hidden md:block bg-sky-600 rounded-2xl px-5 py-4">
        <p className="text-xs font-semibold uppercase">
          Practice Branch
        </p>

        <p className="font-bold mt-1">
          {user.specialization}
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
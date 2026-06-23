import Link from "next/link";
import { FaPills } from "react-icons/fa";

export default function RecentPrescriptions() {
  return (
    <div className="bg-white border rounded-3xl p-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold flex items-center gap-2">
          <FaPills className="text-sky-600" />
          Recent Prescriptions
        </h2>

        <Link
          href="/dashboard/prescriptions"
          className="text-sky-600 text-sm font-semibold"
        >
          View All
        </Link>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-10 text-center text-gray-500">
        No prescriptions issued yet. Set up prescription
        orders in the Prescriptions tab.
      </div>
    </div>
  );
}
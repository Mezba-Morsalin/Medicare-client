import Image from "next/image";
import { FaCalendarAlt, FaDollarSign, FaStar } from "react-icons/fa";

export default function DashboardHeader({user}) {
  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-white border rounded-3xl p-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-sky-600 font-bold">
            Patient Administrative Portal
          </p>

          <h1 className="text-4xl font-bold mt-2">
            Welcome back, {user?.name}
          </h1>

          <p className="text-gray-500 mt-2">
            Identity: {user?.id} • Role: {user?.role}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs uppercase text-gray-400 font-semibold">
              Health Identity Verified
            </p>

            <p className="text-green-600 font-bold">
              HIPAA Secured
            </p>
          </div>

          <Image
            src={user?.image}
            alt="patient"
            width={60}
            height={60}
            className="rounded-2xl"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-white border rounded-3xl p-6 flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-sky-50 flex items-center justify-center">
            <FaCalendarAlt className="text-sky-600 text-xl" />
          </div>

          <div>
            <p className="text-xs uppercase text-gray-400 font-bold">
              Active Bookings
            </p>

            <h3 className="font-bold text-xl">
              2 Scheduled
            </h3>
          </div>
        </div>

        <div className="bg-white border rounded-3xl p-6 flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-green-50 flex items-center justify-center">
            <FaDollarSign className="text-green-600 text-xl" />
          </div>

          <div>
            <p className="text-xs uppercase text-gray-400 font-bold">
              Financial Spent
            </p>

            <h3 className="font-bold text-xl text-green-600">
              $330.00
            </h3>
          </div>
        </div>

        <div className="bg-white border rounded-3xl p-6 flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-amber-50 flex items-center justify-center">
            <FaStar className="text-amber-500 text-xl" />
          </div>

          <div>
            <p className="text-xs uppercase text-gray-400 font-bold">
              Reviews Published
            </p>

            <h3 className="font-bold text-xl text-amber-500">
              3 Submitted
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
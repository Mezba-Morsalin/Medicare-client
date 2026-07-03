import Image from "next/image";
import { FaCalendarAlt, FaDollarSign, FaStar } from "react-icons/fa";

export default function DashboardHeader({user, payments = [], reviews = [],}) {
   const totalSpent = payments.reduce(
    (total, item) => total + Number(item.amount || 0),
    0
  );

  const activeBookings = payments.filter(
    (item) =>
      item.appointmentStatus === "Pending" ||
      item.appointmentStatus === "Confirmed"
  ).length;
  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-white border rounded-3xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
  {/* Left */}
  <div className="text-center md:text-left">
    <p className="text-xs uppercase tracking-widest text-sky-600 font-bold">
      Patient Administrative Portal
    </p>

    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 leading-tight">
      Welcome back, {user?.name}
    </h1>

    <p className="text-sm sm:text-base text-gray-500 mt-2 break-all md:break-normal">
      Identity: {user?.id}
      <br className="md:hidden" />
      <span className="hidden md:inline"> • </span>
      Role:{" "}
      <span className="capitalize">{user?.role}</span>
    </p>
  </div>

  {/* Right */}
  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4">
    <div className="text-center sm:text-right">
      <p className="text-xs uppercase text-gray-400 font-semibold">
        Health Identity
      </p>

      <p
        className={`font-bold ${
          user?.status === "Active"
            ? "text-green-600"
            : user?.status === "Suspended"
            ? "text-red-600"
            : "text-amber-600"
        }`}
      >
        {user?.status}
      </p>
    </div>

    <Image
      src={user?.image}
      alt={user?.name || "Patient"}
      width={100}
      height={100}
      className="rounded-2xl border object-cover w-20 h-20 sm:w-24 sm:h-24"
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
              {activeBookings} Scheduled
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
               ${totalSpent.toFixed(2)}
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
               {reviews.length} Submitted
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
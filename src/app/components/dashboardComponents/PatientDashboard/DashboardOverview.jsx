"use client";

import Link from "next/link";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const DashboardOverview = ({ payments = [] }) => {
  // Upcoming Appointments
  const upcomingAppointments = payments.filter(
    (item) =>
      item.appointmentStatus === "Pending" ||
      item.appointmentStatus === "Confirmed"
  );

  // Chart Data
  const chartData = [...payments]
    .sort(
      (a, b) =>
        new Date(a.appointmentDate) - new Date(b.appointmentDate)
    )
    .map((payment) => ({
      name: new Date(payment.appointmentDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      amount: Number(payment.amount),
    }));

  return (
    <div className="space-y-6">
      {/* Upcoming Appointments */}
      <div className="bg-white border rounded-3xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold uppercase tracking-wide">
            Upcoming Consultation Schedule
          </h2>

          <Link
            href="/dashboard/patient/appointments"
            className="text-sky-600 font-semibold hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="space-y-4">
          {upcomingAppointments.length === 0 ? (
            <div className="border rounded-2xl p-10 text-center">
              <h3 className="text-xl font-bold text-slate-700">
                No Upcoming Appointments
              </h3>

              <p className="text-slate-500 mt-2">
                Your upcoming consultations will appear here.
              </p>
            </div>
          ) : (
            upcomingAppointments.slice(0, 3).map((appointment) => (
              <div
                key={appointment._id}
                className="border rounded-2xl p-5 hover:border-sky-200 transition"
              >
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-xl">
                      {appointment.doctorName}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Date:{" "}
                      {new Date(
                        appointment.appointmentDate
                      ).toLocaleDateString()}{" "}
                      at {appointment.appointmentSlot}
                    </p>

                    <p className="italic text-sm text-gray-400 mt-2">
                      Symptoms: {appointment.symptoms}
                    </p>
                  </div>

                  <span
                    className={`px-4 py-1 rounded-full text-xs font-bold h-fit ${
                      appointment.appointmentStatus === "Confirmed"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {appointment.appointmentStatus.toUpperCase()}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Spend Chart */}
      <div className="bg-white border rounded-3xl p-6">
        <h2 className="font-bold uppercase mb-6">
          Healthcare Expenses
        </h2>

        {chartData.length === 0 ? (
          <div className="h-[250px] flex items-center justify-center text-slate-500">
            No payment history available.
          </div>
        ) : (
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="4 4" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#0ea5e9"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardOverview;
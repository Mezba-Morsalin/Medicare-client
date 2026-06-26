"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jun 20", amount: 150 },
  { name: "Jun 18", amount: 180 },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Appointments */}
      <div className="bg-white border rounded-3xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold uppercase tracking-wide">
            Upcoming Consultation Schedule
          </h2>

          <button className="text-sky-600 font-semibold">
            View All →
          </button>
        </div>

        <div className="space-y-4">
          <div className="border rounded-2xl p-5">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-xl">
                  Dr. Adrian Vance, MD
                </h3>

                <p className="text-gray-500 mt-1">
                  Date: 2026-06-23 at 10:00 AM
                </p>

                <p className="italic text-sm text-gray-400 mt-2">
                  Symptoms: Mild coronary tightness during
                  workout sessions.
                </p>
              </div>

              <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-xs font-bold h-fit">
                ACCEPTED
              </span>
            </div>
          </div>

          <div className="border rounded-2xl p-5">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-xl">
                  Dr. Marcus Brody, DDS
                </h3>

                <p className="text-gray-500 mt-1">
                  Date: 2026-06-26 at 01:00 PM
                </p>

                <p className="italic text-sm text-gray-400 mt-2">
                  Symptoms: Routine checkup and preventive
                  scaling.
                </p>
              </div>

              <div className="flex gap-2 h-6">
                <span className="bg-amber-100 text-amber-600 px-4 py-1 rounded-xl text-xs font-bold">
                  PENDING
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white border rounded-3xl p-6">
        <h2 className="font-bold uppercase mb-6">
          Outpatient Spend Trend
        </h2>

        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#0ea5e9"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
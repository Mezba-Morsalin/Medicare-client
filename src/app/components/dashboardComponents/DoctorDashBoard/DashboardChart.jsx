"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Active Confirmed",
    value: 1,
  },
  {
    name: "Pending Inquiries",
    value: 0,
  },
  {
    name: "Completed",
    value: 0,
  },
];

export default function DashboardChart() {
  return (
    <div className="bg-white border rounded-3xl p-6">
      <h2 className="font-bold uppercase text-sm mb-6">
        Clinical Appointment Splits
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="#0084d1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
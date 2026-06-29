"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export default function DashboardChart({ payments }) {;

  const pending = payments.filter(
    (payment) => payment.appointmentStatus === "Pending"
  ).length;

  const approved = payments.filter(
    (payment) => payment.appointmentStatus === "Approved"
  ).length;
  const rejected = payments.filter(
    (payment) => payment.appointmentStatus === "Rejected"
  ).length;

  const data = [
    {
      name: "Approved",
      value: approved,
    },
    {
      name: "Pending",
      value: pending,
    },
    {
      name: "Rejected",
      value: rejected,
    },
  ];

  return (
    <div className="bg-white border rounded-3xl p-6">
      <h2 className="font-bold uppercase text-sm mb-6">
        Clinical Appointment Status
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Bar dataKey="value" fill="#0284c7" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
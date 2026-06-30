"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function AppointmentTrendChart({
  appointments = [],
}) {
  const monthMap = {};

  appointments.forEach((appointment) => {
    const date = new Date(appointment.createdAt);

    const month = date.toLocaleString("en-US", {
      month: "short",
    });

    if (!monthMap[month]) {
      monthMap[month] = 0;
    }

    monthMap[month] += 1;
  });

  const monthOrder = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = monthOrder
    .filter((month) => monthMap[month] !== undefined)
    .map((month) => ({
      month,
      appointments: monthMap[month],
    }));

  return (
    <div className="bg-white rounded-3xl border p-6">
      <h3 className="font-bold uppercase text-sm">
        Appointment Booking Trends Line Chart
      </h3>

      <p className="text-xs text-gray-500 mb-5">
        Monthly appointment booking trends.
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis allowDecimals={false} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="appointments"
            stroke="#4f46e5"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
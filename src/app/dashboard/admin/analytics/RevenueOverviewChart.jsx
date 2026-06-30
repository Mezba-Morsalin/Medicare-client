"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function RevenueOverviewChart({ payments = [] }) {
  const monthMap = {};

  payments.forEach((payment) => {
    const date = new Date(payment.createdAt);

    const month = date.toLocaleString("en-US", {
      month: "short",
    });

    if (!monthMap[month]) {
      monthMap[month] = 0;
    }

    monthMap[month] += Number(payment.amount);
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
      revenue: monthMap[month],
    }));

  return (
    <div className="bg-white rounded-3xl border p-6">
      <h3 className="font-bold uppercase text-sm">
        Consultation Revenue Overview Area Chart
      </h3>

      <p className="text-xs text-gray-500 mb-5">
        Monthly consultation revenue generated from completed payments.
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="fill">
              <stop
                offset="5%"
                stopColor="#10b981"
                stopOpacity={0.4}
              />
              <stop
                offset="95%"
                stopColor="#10b981"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#10b981"
            strokeWidth={3}
            fill="url(#fill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
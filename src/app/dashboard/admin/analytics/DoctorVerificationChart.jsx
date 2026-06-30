"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

export default function DoctorVerificationChart({
  doctors = [],
}) {
  const verified = doctors.filter(
    (doctor) => doctor.status === "Verified"
  ).length;

  const pending = doctors.filter(
    (doctor) => doctor.status === "Pending"
  ).length;

  const suspended = doctors.filter(
    (doctor) => doctor.status === "Suspended"
  ).length;

  const data = [
    {
      name: "Verified",
      value: verified,
      color: "#10b981",
    },
    {
      name: "Pending",
      value: pending,
      color: "#f59e0b",
    },
    {
      name: "Suspended",
      value: suspended,
      color: "#ef4444",
    },
  ];

  return (
    <div className="bg-white rounded-3xl border p-6">
      <h3 className="font-bold uppercase text-sm">
        Doctor Verification Statistics Pie Chart
      </h3>

      <p className="text-xs text-gray-500 mb-5">
        Roster credentials validation breakdown metrics.
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={55}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((item) => (
              <Cell
                key={item.name}
                fill={item.color}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
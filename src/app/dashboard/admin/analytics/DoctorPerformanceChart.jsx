"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function DoctorPerformanceChart({ reviews = [] }) {
  // Average rating per doctor
  const doctorRatings = reviews.reduce((acc, review) => {
    const name = review.doctorName;

    if (!acc[name]) {
      acc[name] = {
        name,
        total: 0,
        count: 0,
      };
    }

    acc[name].total += review.rating;
    acc[name].count += 1;

    return acc;
  }, {});

  const data = Object.values(doctorRatings).map((doctor) => ({
    name: doctor.name,
    rating: Number((doctor.total / doctor.count).toFixed(1)),
  }));

  return (
    <div className="bg-white rounded-3xl border p-6">
      <h3 className="font-bold uppercase text-sm">
        Doctor Performance Ratings Bar Chart
      </h3>

      <p className="text-xs text-gray-500 mb-5">
        Average ratings calculated from patient reviews.
      </p>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="name"
            fontSize={11}
            interval={0}
            angle={-25}
            textAnchor="end"
          />

          <YAxis
            domain={[1, 5]}
            ticks={[1, 2, 3, 4, 5]}
          />

          <Tooltip />

          <Bar
            dataKey="rating"
            fill="#3b82f6"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
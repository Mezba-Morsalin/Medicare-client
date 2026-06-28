"use client";

import { FaUserMd, FaUsers, FaCalendarCheck, FaStar } from "react-icons/fa";

const HomeStats = ({ stats }) => {
  const items = [
    {
      title: "Verified Doctors",
      value: `${stats?.totalDoctors || 0}+`,
      icon: <FaUserMd className="text-2xl text-sky-600" />,
    },
    {
      title: "Registered Patients",
      value: `${stats?.totalPatients || 0}+`,
      icon: <FaUsers className="text-2xl text-emerald-600" />,
    },
    {
      title: "Appointments Completed",
      value: `${stats?.totalAppointments || 0}+`,
      icon: <FaCalendarCheck className="text-2xl text-violet-600" />,
    },
    {
      title: "Average Patient Rating",
      value: `${stats?.averageRating || 0}/5.0`,
      icon: <FaStar className="text-2xl text-amber-500" />,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-white border border-slate-200 rounded-[32px] shadow-sm">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-6 py-10"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">
                {item.title}
              </p>

              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-sky-700">
                {item.value}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
"use client";

import { motion } from "framer-motion";
import {
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaStar,
} from "react-icons/fa";

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
      icon: (
        <FaCalendarCheck className="text-2xl text-violet-600" />
      ),
    },
    {
      title: "Average Patient Rating",
      value: `${stats?.averageRating || 0}/5.0`,
      icon: <FaStar className="text-2xl text-amber-500" />,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white border border-slate-200 rounded-[32px] shadow-sm"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="flex flex-col items-center justify-center text-center px-6 py-10"
            >
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                }}
                transition={{ duration: 0.25 }}
                className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-5"
              >
                {item.icon}
              </motion.div>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">
                {item.title}
              </p>

              <motion.h2
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: index * 0.15 + 0.2,
                  duration: 0.35,
                }}
                viewport={{ once: true }}
                className="mt-3 text-3xl lg:text-4xl font-extrabold text-sky-700"
              >
                {item.value}
              </motion.h2>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HomeStats;
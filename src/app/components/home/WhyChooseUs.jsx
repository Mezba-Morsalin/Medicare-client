"use client";

import { motion } from "framer-motion";
import {
  FiCalendar,
  FiShield,
  FiClock,
  FiUsers,
} from "react-icons/fi";

const features = [
  {
    icon: FiCalendar,
    title: "Instant Digital Booking",
    description:
      "Schedule appointments with preferred doctors, select available time slots, and receive immediate booking confirmation.",
    bg: "bg-sky-50",
    color: "text-sky-600",
  },
  {
    icon: FiShield,
    title: "Secure Health Records",
    description:
      "Protect patient histories, prescriptions, and medical reports with encrypted cloud-based storage.",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    icon: FiClock,
    title: "Zero Waiting Times",
    description:
      "Reduce unnecessary delays through streamlined appointment management and real-time scheduling.",
    bg: "bg-amber-50",
    color: "text-amber-600",
  },
  {
    icon: FiUsers,
    title: "Verified Clinical Practitioners",
    description:
      "Consult trusted healthcare professionals whose qualifications and credentials are thoroughly verified.",
    bg: "bg-violet-50",
    color: "text-violet-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="rounded-[32px] border border-slate-200 bg-white p-8 md:p-14"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-extrabold text-slate-900">
              Why Choose MediCare{" "}
              <span className="text-sky-600">Connect?</span>
            </h2>

            <p className="mt-4 text-slate-500 text-lg">
              Simplifying healthcare access through secure technology,
              verified specialists, and seamless appointment management.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl"
                >
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.15,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`h-14 w-14 shrink-0 rounded-2xl ${feature.bg} flex items-center justify-center`}
                  >
                    <Icon
                      className={`${feature.color} text-2xl`}
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-slate-500 leading-7">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
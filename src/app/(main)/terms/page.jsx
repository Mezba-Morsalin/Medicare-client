"use client";

import { motion } from "framer-motion";
import {
  FiFileText,
  FiShield,
  FiUserCheck,
  FiAlertTriangle,
  FiCalendar,
  FiLock,
} from "react-icons/fi";

const sections = [
  {
    icon: <FiUserCheck className="text-sky-600 text-2xl" />,
    title: "Acceptance of Terms",
    description:
      "By accessing or using MediCare Connect, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, you should discontinue using the platform immediately.",
  },
  {
    icon: <FiShield className="text-green-600 text-2xl" />,
    title: "User Responsibilities",
    description:
      "Users must provide accurate information during registration, maintain the confidentiality of their account credentials, and use the platform responsibly without violating applicable laws.",
  },
  {
    icon: <FiCalendar className="text-amber-600 text-2xl" />,
    title: "Appointments & Payments",
    description:
      "Appointment bookings are subject to doctor availability. Payments processed through the platform are final unless cancellation or refund policies explicitly apply.",
  },
  {
    icon: <FiLock className="text-violet-600 text-2xl" />,
    title: "Privacy & Security",
    description:
      "We implement industry-standard security measures to protect your personal and medical information. However, no online service can guarantee complete security.",
  },
  {
    icon: <FiAlertTriangle className="text-red-500 text-2xl" />,
    title: "Limitation of Liability",
    description:
      "MediCare Connect facilitates communication between patients and healthcare professionals. Medical decisions remain the responsibility of licensed practitioners and patients.",
  },
];

export default function TermsPage() {
  return (
    <section className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 font-semibold">
            <FiFileText />
            Legal Information
          </div>

          <h1 className="mt-8 text-5xl font-extrabold text-slate-900">
            Terms & <span className="text-sky-600">Conditions</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-500">
            These Terms & Conditions govern your access to and use of
            MediCare Connect. By using our healthcare platform, you agree
            to comply with the policies outlined below.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-7">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .55,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8"
            >
              <div className="flex items-start gap-5">

                <div className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-4 leading-8 text-slate-500">
                    {item.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="mt-20 bg-sky-600 rounded-[32px] text-white p-10 text-center"
        >
          <h2 className="text-3xl font-bold">
            Compliance & Transparency
          </h2>

          <p className="mt-5 leading-8 text-white/90 max-w-3xl mx-auto">
            These Terms & Conditions may be updated periodically to reflect
            improvements in our services, legal obligations, or security
            practices. Continued use of MediCare Connect constitutes
            acceptance of any revised terms.
          </p>

          <p className="mt-8 text-sm text-white/70">
            Last Updated • July 2026
          </p>
        </motion.div>

      </div>
    </section>
  );
}
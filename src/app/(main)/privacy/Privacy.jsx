"use client";

import { motion } from "framer-motion";
import {
  FiShield,
  FiLock,
  FiUserCheck,
  FiDatabase,
  FiGlobe,
  FiMail,
} from "react-icons/fi";

const sections = [
  {
    icon: FiShield,
    title: "Information We Collect",
    description:
      "We collect basic account information including your name, email address, phone number, medical profile, appointment history, and information necessary to provide healthcare services securely.",
  },
  {
    icon: FiLock,
    title: "How We Protect Your Data",
    description:
      "All personal information is encrypted and stored securely. Access is restricted only to authorized healthcare professionals and administrators following strict security standards.",
  },
  {
    icon: FiUserCheck,
    title: "How Your Information Is Used",
    description:
      "Your information is used solely for appointment management, doctor verification, medical consultation, payment processing, notifications, and improving healthcare services.",
  },
  {
    icon: FiDatabase,
    title: "Data Retention",
    description:
      "Medical records and account information are retained only for as long as necessary to provide healthcare services and comply with applicable legal obligations.",
  },
  {
    icon: FiGlobe,
    title: "Third-Party Services",
    description:
      "Certain trusted third-party services such as payment gateways and authentication providers may process limited information required to deliver our services securely.",
  },
  {
    icon: FiMail,
    title: "Contact Us",
    description:
      "If you have any questions regarding this Privacy Policy or your personal information, please contact our support team at support@medicareconnect.com.",
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="rounded-[32px] overflow-hidden bg-gradient-to-r from-sky-600 via-sky-700 to-cyan-700 text-white p-10 md:p-16 mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-sm font-semibold">
            <FiShield />
            Privacy & Security
          </span>

          <h1 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-white/90">
            Your privacy is important to us. This Privacy Policy explains how
            MediCare Connect collects, uses, stores, and protects your personal
            information while providing secure healthcare services.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8"
              >
                <div className="h-16 w-16 rounded-2xl bg-sky-50 flex items-center justify-center">
                  <Icon className="text-3xl text-sky-600" />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-4 leading-8 text-slate-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[32px] bg-white border border-slate-200 p-10 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Your Privacy Matters
          </h2>

          <p className="mt-5 max-w-4xl mx-auto text-slate-500 leading-8">
            MediCare Connect is committed to maintaining the confidentiality,
            integrity, and security of your personal health information. We
            continuously improve our security practices to ensure your data
            remains protected while providing trusted digital healthcare
            services.
          </p>

          <p className="mt-8 text-sm text-slate-400">
            Last Updated: July 2026
          </p>
        </motion.div>

      </div>
    </section>
  );
}
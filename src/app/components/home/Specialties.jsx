"use client";

import { motion } from "framer-motion";
import {
  FiHeart,
  FiActivity,
  FiSmile,
  FiUser,
  FiDroplet,
} from "react-icons/fi";

const specialties = [
  {
    icon: FiHeart,
    title: "Cardiology",
    description:
      "Heart health assessments, cardiovascular diagnostics, and preventive cardiac care.",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: FiActivity,
    title: "Neurology",
    description:
      "Advanced treatment for neurological disorders, migraines, and nervous system conditions.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
  },
  {
    icon: FiSmile,
    title: "Dentistry",
    description:
      "Comprehensive dental checkups, cosmetic dentistry, and oral health solutions.",
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: FiUser,
    title: "Pediatrics",
    description:
      "Dedicated healthcare services for infants, children, and adolescent patients.",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-500",
  },
  {
    icon: FiDroplet,
    title: "Dermatology",
    description:
      "Skin treatments, cosmetic procedures, and personalized dermatological care.",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
];

export default function Specialties() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-slate-900">
            Focus Medical Specializations
          </h2>

          <p className="mt-3 text-slate-500 text-lg">
            Explore board-certified healthcare professionals across
            our most sought-after medical departments.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {specialties.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl"
              >
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`h-12 w-12 rounded-xl ${item.iconBg} flex items-center justify-center`}
                >
                  <Icon
                    className={`${item.iconColor} text-xl`}
                  />
                </motion.div>

                <h3 className="mt-8 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

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
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Focus Medical Specializations
          </h2>

          <p className="mt-3 text-slate-500 text-lg">
            Explore board-certified healthcare professionals across
            our most sought-after medical departments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {specialties.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`h-12 w-12 rounded-xl ${item.iconBg} flex items-center justify-center`}
                >
                  <Icon className={`${item.iconColor} text-xl`} />
                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
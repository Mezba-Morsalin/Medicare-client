"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiShield,
  FiAward,
} from "react-icons/fi";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-sky-600 border border-sky-200 bg-sky-50 p-2 w-fit px-6 rounded-full mx-auto uppercase tracking-[0.25em] text-sm font-semibold">
            Trusted Healthcare Platform
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mt-4 leading-tight">
            Connecting Patients with
            <span className="block text-sky-600">
              Verified Healthcare Professionals
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover qualified specialists, schedule appointments instantly,
            and access healthcare services with confidence through a secure
            and reliable digital ecosystem.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{
              y: -8,
              transition: { duration: 0.25 },
            }}
            className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center">
              <FiHeart className="text-sky-600 text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Patient Integrity First
            </h3>

            <p className="text-slate-600 mt-4 leading-relaxed">
              Every clinical consult, prescription issue, and diagnostic
              profile is guarded, prioritizing user convenience and
              therapeutic outcomes above all.
            </p>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{
              y: -8,
              transition: { duration: 0.25 },
            }}
            className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center">
              <FiShield className="text-blue-600 text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Zero Trust Records
            </h3>

            <p className="text-slate-600 mt-4 leading-relaxed">
              Through high-grade encryption systems, medical summaries are
              kept secure, restricting accessibility to active clinical
              consultants.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{
              y: -8,
              transition: { duration: 0.25 },
            }}
            className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center">
              <FiAward className="text-amber-600 text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Verified Practitioners
            </h3>

            <p className="text-slate-600 mt-4 leading-relaxed">
              Only physicians verified manually by administrative boards are
              permitted to host schedules, ensuring zero medical
              misinformation on-platform.
            </p>
          </motion.div>
        </div>

        {/* Story */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mt-20 rounded-[32px] overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 shadow-2xl"
        >
          <div className="grid lg:grid-cols-2">

            {/* Left */}
            <div className="p-10 md:p-16">
              <p className="text-sky-500 uppercase text-sm font-semibold tracking-wider">
                Our Genesis
              </p>

              <h2 className="text-white text-4xl font-extrabold mt-4">
                Founded by clinicians, coded for comfort.
              </h2>

              <p className="text-slate-300 mt-6 leading-relaxed text-lg">
                MediCare Connect was born out of a simple observation:
                patients were spending more time inside waiting rooms and
                signing manual index charts than actively speaking with
                actual practitioners. We set out to bridge this technical
                divide.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-10">

                {[
                  ["50k+", "Successful Checkups"],
                  ["150+", "Hospital Affiliates"],
                  ["99.9%", "Scheduled On-Time"],
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.2,
                      duration: 0.5,
                    }}
                  >
                    <h3 className="text-white text-3xl font-bold">
                      {item[0]}
                    </h3>

                    <p className="text-slate-400 text-sm">
                      {item[1]}
                    </p>
                  </motion.div>
                ))}

              </div>
            </div>

            {/* Right */}
            <div className="hidden lg:flex items-center justify-center relative">

              <div className="absolute inset-0 bg-white/5" />

              <motion.div
                animate={{
                  y: [-12, 12, -12],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-72 h-72 rounded-[50px] border-[18px] border-white/10 flex items-center justify-center">
                  <FiHeart className="text-white/10 text-[140px]" />
                </div>
              </motion.div>

            </div>

          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mt-24 text-center max-w-4xl mx-auto bg-sky-50 p-5 rounded-xl border border-slate-200"
        >
          <h2 className="text-4xl font-extrabold text-slate-900">
            Our Mission
          </h2>

          <p className="text-slate-600 mt-6 text-lg leading-relaxed">
            We believe healthcare should be accessible, secure, and
            efficient. Our platform empowers patients to find trusted
            doctors, schedule appointments instantly, and manage their
            healthcare journey from one unified system.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
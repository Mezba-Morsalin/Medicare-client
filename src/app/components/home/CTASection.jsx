"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaCheckCircle,
  FaHeartbeat,
  FaShieldAlt,
} from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-sky-700 via-sky-800 to-sky-600 px-6 py-12 shadow-xl shadow-sky-900/20 sm:px-10 lg:px-16 lg:py-16">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[40px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-sky-400/10 blur-2xl" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <FaHeartbeat className="text-sky-200" />
              Your Health, Our Priority
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Take the First Step Toward
              <span className="mt-2 block text-sky-200">
                Better Health
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-sky-100 sm:text-lg lg:mx-0">
              Find the right specialist, book your appointment, and
              take control of your healthcare journey with MediCare Connect.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/find-doctor"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-sky-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50"
              >
                Find Your Doctor
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              
            </div>
          </div>

          {/* Trust Card */}
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-lg">
                <FaCalendarCheck size={27} />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Healthcare Made Easier
              </h3>

              <p className="mt-3 leading-7 text-sky-100">
                Your journey to better health starts with convenient
                access to healthcare professionals.
              </p>

              <div className="my-6 h-px bg-white/20" />

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-white sm:text-base">
                  <FaCheckCircle className="mt-1 shrink-0 text-sky-200" />
                  Find doctors by specialty
                </li>

                <li className="flex items-start gap-3 text-sm text-white sm:text-base">
                  <FaCheckCircle className="mt-1 shrink-0 text-sky-200" />
                  Book appointments conveniently
                </li>

                <li className="flex items-start gap-3 text-sm text-white sm:text-base">
                  <FaCheckCircle className="mt-1 shrink-0 text-sky-200" />
                  Manage your healthcare journey
                </li>
              </ul>

              <div className="mt-7 flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4">
                <FaShieldAlt className="shrink-0 text-2xl text-sky-200" />
                <div>
                  <p className="font-semibold text-white">
                    Care You Can Trust
                  </p>
                  <p className="mt-1 text-sm text-sky-100">
                    A more convenient healthcare experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
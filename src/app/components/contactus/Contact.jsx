"use client";

import {
  Button,
  Input,
  TextArea,
} from "@heroui/react";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiAlertTriangle,
} from "react-icons/fi";

const Contact = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="uppercase tracking-widest text-sky-600 text-sm font-semibold">
            Get In Touch
          </p>

          <h1 className="text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
            How can we help your Clinical workflow today?
          </h1>

          <p className="mt-6 text-lg text-slate-500">
            Questions regarding your billing history or physician schedules?
            Dispatch an electronic request or reach our 24/7 hotline.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Corporate Headquarters
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-sky-50 flex items-center justify-center">
                    <FiMapPin className="text-sky-600 text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Hospital Tech Plaza, Ste 400
                    </h4>
                    <p className="text-slate-500">
                      Silicon District, CA 94016
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <FiPhone className="text-blue-600 text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Support Desk (24/7 Toll-Free)
                    </h4>
                    <p className="text-slate-500">
                      +1 (800) 555-CARE (2273)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center">
                    <FiMail className="text-purple-600 text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Electronic Mail
                    </h4>
                    <p className="text-slate-500">
                      support@medicareconnect.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Box */}
              <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex items-center gap-2 text-red-600 font-bold mb-3">
                  <FiAlertTriangle />
                  EMERGENCY NOTE:
                </div>

                <p className="text-red-500 text-sm leading-relaxed">
                  This digital dashboard is for standard appointment
                  scheduling. If you are undergoing an active clinical
                  crisis, please call 911 immediately or visit your
                  closest physical hospital.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Submit Electronic Inquiry Form
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Your Full Name *"
                    placeholder="e.g. Alice Miller"
                  />

                  <Input
                    type="email"
                    label="Your Email Address *"
                    placeholder="e.g. alice@gmail.com"
                  />
                </div>

                <Input
                  label="Subject of Inquiry"
                  placeholder="e.g. Roster reschedule help / Doctor credentials validation"
                />

               <TextArea
    placeholder="Briefly explain what support is needed..."
    className="min-h-32"
  />
                <Button
                  className="bg-sky-600 hover:bg-sky-700 text-white px-8"
                  size="lg"
                >
                  Dispatch Electronic Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
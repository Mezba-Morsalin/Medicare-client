import React from 'react';
import {
  FiHeart,
  FiShield,
  FiAward,
} from "react-icons/fi";

const About = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-20">
              <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto">
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
  Discover qualified specialists, schedule appointments instantly, and
  access healthcare services with confidence through a secure and reliable
  digital ecosystem.
</p>
                </div>
        
                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                  <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center">
                      <FiHeart className="text-sky-600 text-2xl" />
                    </div>
        
                    <h3 className="text-2xl font-bold text-slate-900 mt-6">
                      Patient Integrity First
                    </h3>
        
                    <p className="text-slate-600 mt-4 leading-relaxed">
                      Every clinical consult, prescription issue, and diagnostic
                      profile is guarded, prioritizing user convenience and therapeutic
                      outcomes above all.
                    </p>
                  </div>
        
                  <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center">
                      <FiShield className="text-blue-600 text-2xl" />
                    </div>
        
                    <h3 className="text-2xl font-bold text-slate-900 mt-6">
                      Zero Trust Records
                    </h3>
        
                    <p className="text-slate-600 mt-4 leading-relaxed">
                      Through high-grade encryption systems, medical summaries are kept
                      secure, restricting accessibility to active clinical consultants.
                    </p>
                  </div>
        
                  <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center">
                      <FiAward className="text-amber-600 text-2xl" />
                    </div>
        
                    <h3 className="text-2xl font-bold text-slate-900 mt-6">
                      Verified Practitioners
                    </h3>
        
                    <p className="text-slate-600 mt-4 leading-relaxed">
                      Only physicians verified manually by administrative boards are
                      permitted to host schedules, ensuring zero medical misinformation
                      on-platform.
                    </p>
                  </div>
                </div>
        
                {/* Story Section */}
                <div className="mt-20 rounded-[32px] overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 shadow-2xl">
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
                        signing manual index charts than actively speaking with actual
                        practitioners. We set out to bridge this technical divide.
                      </p>
        
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-6 mt-10">
                        <div>
                          <h3 className="text-white text-3xl font-bold">50k+</h3>
                          <p className="text-slate-400 text-sm">
                            Successful Checkups
                          </p>
                        </div>
        
                        <div>
                          <h3 className="text-white text-3xl font-bold">150+</h3>
                          <p className="text-slate-400 text-sm">
                            Hospital Affiliates
                          </p>
                        </div>
        
                        <div>
                          <h3 className="text-white text-3xl font-bold">99.9%</h3>
                          <p className="text-slate-400 text-sm">
                            Scheduled On-Time
                          </p>
                        </div>
                      </div>
                    </div>
        
                    {/* Right */}
                    <div className="hidden lg:flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-white/5" />
        
                      <div className="relative">
                        <div className="w-72 h-72 rounded-[50px] border-[18px] border-white/10 flex items-center justify-center">
                          <FiHeart className="text-white/10 text-[140px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        
                {/* Mission */}
                <div className="mt-24 text-center max-w-4xl mx-auto bg-sky-50 p-5 rounded-xl border border-slate-200">
                  <h2 className="text-4xl font-extrabold text-slate-900">
                    Our Mission
                  </h2>
        
                  <p className="text-slate-600 mt-6 text-lg leading-relaxed">
                    We believe healthcare should be accessible, secure, and efficient.
                    Our platform empowers patients to find trusted doctors, schedule
                    appointments instantly, and manage their healthcare journey from
                    one unified system.
                  </p>
                </div>
              </div>
            </div>

    );
};

export default About;
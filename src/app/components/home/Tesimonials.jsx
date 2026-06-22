"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Alice Miller",
    doctor: "Dr. Adrian Vance, MD",
    image: "https://i.pravatar.cc/100?img=1",
    review:
      "Dr. Vance is incredible! His explanation of my heart condition was extremely clear and easy to understand.",
  },
  {
    name: "Alice Miller",
    doctor: "Dr. Evelyn Thorne, PhD",
    image: "https://i.pravatar.cc/100?img=5",
    review:
      "Outstanding experience with Dr. Evelyn. She was attentive, professional, and helped organize my migraine treatment plan.",
  },
  {
    name: "Alice Miller",
    doctor: "Dr. Marcus Brody, DDS",
    image: "https://i.pravatar.cc/100?img=8",
    review:
      "Excellent clinical service! The dental procedure was comfortable and the entire team was welcoming throughout.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Patient Success Stories
          </h2>

          <p className="mt-3 text-lg text-slate-500">
            Real experiences shared by patients following successful
            consultations and treatments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <p className="italic text-slate-500 leading-7">
                {item.review}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={42}
                  height={42}
                  className="rounded-full"
                />

                <div>
                  <h4 className="font-bold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-400">
                    Consulted with {item.doctor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
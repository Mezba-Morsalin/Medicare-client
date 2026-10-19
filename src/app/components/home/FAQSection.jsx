"use client";

import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What is MediCare Connect?",
    answer:
      "MediCare Connect is a healthcare platform that helps users find doctors, explore medical services, and manage their healthcare journey conveniently.",
  },
  {
    question: "How can I find the right doctor?",
    answer:
      "You can browse available doctors and use the available search or filtering options to find a doctor based on your healthcare needs and specialization.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Browse the available doctors, select your preferred doctor, and follow the appointment booking process provided on the platform.",
  },
  {
    question: "Do I need an account to use MediCare Connect?",
    answer:
      "Some features may require an account. You can register or sign in to access the features available to your account type.",
  },
  {
    question: "Can I pay for services online?",
    answer:
      "If online payment is available for your selected service, you can follow the checkout process and complete your payment using the supported payment methods.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "MediCare Connect is designed to provide a convenient healthcare experience. Please review the platform's privacy policy to understand how your personal information is collected and handled.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            <FaQuestionCircle />
            Got Questions?
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="text-sky-700">Questions</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Find answers to common questions about MediCare Connect
            and how to use our platform.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-sky-200 bg-sky-50/70 shadow-md shadow-sky-900/5"
                    : "border-slate-200 bg-white hover:border-sky-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span
                    className={`text-base font-semibold sm:text-lg ${
                      isOpen ? "text-sky-800" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-sky-700 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <FaChevronDown size={12} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-600 sm:text-base">
            Still have questions? We are here to help.
          </p>

          <a
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = ({ reviews = [] }) => {
  return (
    <section className="overflow-hidden bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Testimonials
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-base text-slate-500 sm:text-lg">
            Read authentic feedback from patients who trusted our
            healthcare professionals for consultations and treatment.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        {reviews.length > 0 ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            loop={reviews.length > 3}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="!pb-12"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={review._id ?? index} className="h-auto">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40,
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
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  {/* Rating */}
                  <div
                    className="mb-4 flex gap-1 text-lg text-yellow-500"
                    aria-label={`Rating: ${review.rating} out of 5`}
                  >
                    {"⭐".repeat(
                      Math.max(0, Math.min(5, Number(review.rating) || 0))
                    )}
                    {"☆".repeat(
                      5 -
                        Math.max(
                          0,
                          Math.min(5, Number(review.rating) || 0)
                        )
                    )}
                  </div>

                  {/* Review */}
                  <p className="min-h-[120px] flex-1 leading-7 text-slate-600">
                    {review.comment}
                  </p>

                  {/* Patient Information */}
                  <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 4,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="shrink-0"
                    >
                      <Image
                        src={review.patientImage || "/default-avatar.png"}
                        alt={review.patientName || "Patient"}
                        width={50}
                        height={50}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </motion.div>

                    <div className="min-w-0">
                      <h4 className="truncate font-bold text-slate-900">
                        {review.patientName || "Anonymous Patient"}
                      </h4>

                      <p className="truncate text-sm text-slate-500">
                        Reviewed {review.doctorName || "a doctor"}
                      </p>

                      {review.specialization && (
                        <p className="mt-1 text-xs text-sky-600">
                          {review.specialization}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <p className="font-medium text-slate-700">
              No patient reviews available yet.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Patient testimonials will appear here when available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
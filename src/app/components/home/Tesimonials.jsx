"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = ({ reviews = [] }) => {
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
            Patient Success Stories
          </h2>

          <p className="mt-3 text-lg text-slate-500 max-w-3xl mx-auto">
            Read authentic feedback from patients who trusted our healthcare
            professionals for consultations and treatment.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
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
        >
          {reviews?.map((review, index) => (
            <SwiperSlide key={review._id}>
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
                  y: -8,
                  scale: 1.02,
                }}
                className="bg-white border rounded-3xl p-6 shadow-sm hover:shadow-xl h-full"
              >
                {/* Rating */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex text-yellow-500 text-lg mb-4"
                >
                  {"⭐".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </motion.div>

                {/* Review */}
                <p className="italic text-slate-500 leading-7 min-h-[120px]">
                  {review.comment}
                </p>

                {/* Footer */}
                <div className="mt-6 pt-5 border-t flex items-center gap-3">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <Image
                      src={review.patientImage}
                      alt={review.patientName}
                      width={50}
                      height={50}
                      className="rounded-full object-cover w-12 h-12"
                    />
                  </motion.div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      {review.patientName}
                    </h4>

                    <p className="text-sm text-slate-500">
                      Reviewed {review.doctorName}
                    </p>

                    <p className="text-xs text-sky-600">
                      {review.specialization}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = ({ reviews = [] }) => {
    console.log("Reviews:", reviews);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Patient Success Stories
          </h2>

          <p className="mt-3 text-lg text-slate-500 max-w-3xl mx-auto">
            Read authentic feedback from patients who trusted our healthcare
            professionals for consultations and treatment.
          </p>
        </div>

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
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="bg-white border rounded-3xl p-6 shadow-sm h-full">

                {/* Rating */}
                <div className="flex text-yellow-500 text-lg mb-4">
                  {"⭐".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>

                {/* Review */}
                <p className="italic text-slate-500 leading-7 min-h-[120px]">
                  {review.comment}
                </p>

                {/* Footer */}
                <div className="mt-6 pt-5 border-t flex items-center gap-3">
                  <Image
                    src={review.patientImage}
                    alt={review.patientName}
                    width={50}
                    height={50}
                    className="rounded-full object-cover w-12 h-12"
                  />

                  <div>
                    <h4 className="font-bold text-slate-900">
                      {review.patientName}
                    </h4>

                    <p className="text-sm text-slate-500">
                      Reviewed Dr. {review.doctorName}
                    </p>

                    <p className="text-xs text-sky-600">
                      {review.specialization}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;
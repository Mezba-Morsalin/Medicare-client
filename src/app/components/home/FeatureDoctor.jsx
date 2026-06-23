import Link from 'next/link';
import React from 'react';
import FeaturedDoctorCard from './FeaturedDoctorCard';

const FeatureDoctor = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors`, {
        cache : "no-store"
    });
    const data = await res.json();
    const doctors = data.data
    return (
         <section className="py-16 max-w-7xl mx-auto px-5 lg:px-0">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-8">
        <div className='text-center md:text-left'>
          <h2 className="text-3xl font-bold">
            Meet Our Specialists
          </h2>

          <p className="text-slate-500 mt-2">
            Connect with experienced doctors and schedule appointments with ease.
          </p>
        </div>

        <Link
          href="/find-doctor"
          className="text-sky-600 font-semibold hover:underline"
        >
          Browse All Specialists  →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors?.slice(0, 4).map((doctor) => (
          <FeaturedDoctorCard
            key={doctor._id}
            doctor={doctor}
          />
        ))}
      </div>
    </section>
    );
};

export default FeatureDoctor;
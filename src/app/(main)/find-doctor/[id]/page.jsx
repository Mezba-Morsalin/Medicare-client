import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaStethoscope,
} from "react-icons/fa";
import AppointmentForm from "./AppointmentForm";

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors/${id}`,
  {
    cache: "no-store",
  }
);

const data = await res.json();

const doctor = data?.data;

if (!doctor) {
  notFound();
}

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Top */}
      <div className="flex items-center justify-between mb-8">
        <Link href={'/find-doctor'}>
        <Button className="px-4 py-2 rounded-full border text-slate-600 bg-white text-sm font-medium">
          ← Back to Directories
        </Button>
        </Link>

        <p className="text-sm text-slate-500">
          Clinician ID: {doctor.doctorId}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-6">
          {/* Doctor Card */}
          <div className="bg-white border rounded-3xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="border rounded-2xl p-3">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={180}
                  height={180}
                  className="rounded-xl object-cover"
                />

                <div className="flex justify-center">
                  <p
  className={`text-center inline-block py-1 px-4 rounded-full text-xs mt-2 font-semibold
    ${
      doctor.status === "Verified"
        ? "bg-green-100 text-green-600"
        : doctor.status === "Pending"
        ? "bg-amber-100 text-amber-500"
        : doctor.status === "Rejected"
        ? "bg-red-100 text-red-600"
        : "bg-slate-100 text-slate-600"
    }`}
>
  {doctor.status}
</p>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase">
                    {doctor.specialization}
                  </span>

                  <span className="flex items-center gap-1 text-amber-500 text-sm font-semibold">
                    <FaStar />
                    {doctor.rating} ({doctor.reviews} Reviews)
                  </span>
                </div>

                <h1 className="text-4xl font-bold mt-3">
                  {doctor.name}
                </h1>

                <p className="flex items-center gap-2 text-slate-500 mt-2">
                  <FaMapMarkerAlt />
                  {doctor.hospital}
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="border rounded-xl p-4">
                    <p className="text-xs text-slate-500 uppercase">
                      Experience
                    </p>

                    <h4 className="font-bold">
                      {doctor.experience} Years
                    </h4>
                  </div>

                  <div className="border rounded-xl p-4">
                    <p className="text-xs text-slate-500 uppercase">
                      Qualification
                    </p>

                    <h4 className="font-bold text-sm">
                      {doctor.degrees}
                    </h4>
                  </div>

                  <div className="border rounded-xl p-4">
                    <p className="text-xs text-slate-500 uppercase">
                      Consultation Fee
                    </p>

                    <h4 className="font-bold text-sky-600">
                      ${doctor.fee}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-white border rounded-3xl p-6 shadow-sm">
            <h2 className="font-bold text-xl mb-5">
              About The Clinician
            </h2>

            <p className="text-slate-600 leading-8">
              {doctor.description}
            </p>

            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase text-slate-500 mb-3">
                Languages Spoken
              </h4>

              <div className="flex flex-wrap gap-2">
                {doctor.languages?.map((language) => (
                  <span
                    key={language}
                    className="px-3 py-1 border rounded-lg text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white border rounded-3xl p-6 shadow-sm">
            <h2 className="font-bold text-xl mb-5">
              Available Practice Schedule
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="border rounded-2xl p-5">
                <h4 className="text-xs uppercase text-slate-500 mb-3">
                  Practice Days
                </h4>

                <p className="font-medium">
                  {doctor.practiceDays?.join(", ")}
                </p>
              </div>

              <div className="border rounded-2xl p-5">
                <h4 className="text-xs uppercase text-slate-500 mb-3">
                  Available Slots
                </h4>

                <div className="flex flex-wrap gap-2">
                  {doctor.availableSlots?.map((slot) => (
                    <span
                      key={slot}
                      className="px-3 py-1 border rounded-md text-sm"
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div>
          <div className="bg-white border rounded-3xl p-6 shadow-sm sticky top-24">
            <div className="bg-sky-50 border rounded-2xl p-4">
              <p className="text-xs text-slate-500">
                CONSULTATION RATE
              </p>

              <h3 className="text-4xl text-sky-600 font-bold mt-1">
                ${doctor.fee}
              </h3>

              <p className="text-sm text-sky-600 mt-1">
                Per session
              </p>
            </div>

            <h3 className="font-bold mt-6 mb-4">
              Book Appointment
            </h3>

            <AppointmentForm doctor = {doctor}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetailsPage;
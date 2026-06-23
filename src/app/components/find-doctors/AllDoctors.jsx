import Image from "next/image";
import Link from "next/link";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import userPng from "../../../../public/assets/user.png"

const AllDoctors = ({ doctor }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Specialization */}
      <div className="flex justify-between items-center mb-3">
        <span className="bg-sky-500 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase">
          {doctor.specialization}
        </span>

        <div className="flex items-center gap-1 bg-slate-700 text-white text-xs px-2 py-1 rounded-full">
          <FaStar className="text-yellow-400" />
          {doctor.rating}
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={doctor.image || userPng}
          alt={doctor.name}
          width={200}
          height={200}
          className="rounded-full object-cover border-4 border-slate-100"
        />
      </div>

      {/* Doctor Info */}
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg text-slate-900">
            {doctor.name}
          </h2>

          <span className="bg-sky-100 text-sky-700 text-xs px-2 py-1 rounded-md font-medium">
            {doctor.experience} Yrs Exp
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
          <FaMapMarkerAlt />
          <span>{doctor.hospital}</span>
        </div>

        <div className="mt-3 border rounded-xl p-3 text-xs text-slate-600 min-h-[70px]">
          {doctor.degrees}
        </div>
      </div>

      {/* Bottom Info */}
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-[10px] uppercase text-slate-400">
            Consultation Fee
          </p>

          <h3 className="font-bold text-sky-600">
            ${doctor.fee}
          </h3>
        </div>

        <div className="text-right">
          <p className="text-[10px] uppercase text-slate-400">
            Availability
          </p>

          <p className="text-xs text-slate-600">
            {doctor.practiceDays?.slice(0, 2).join(", ")}
          </p>
        </div>
      </div>

      {/* Button */}
      <Link
        href={`/find-doctor/${doctor._id}`}
        className="mt-5 flex items-center justify-center w-full border border-sky-300 text-sky-600 font-semibold rounded-xl py-3 hover:bg-sky-50 transition"
      >
        Meet the Specialist →
      </Link>
    </div>
  );
};

export default AllDoctors;
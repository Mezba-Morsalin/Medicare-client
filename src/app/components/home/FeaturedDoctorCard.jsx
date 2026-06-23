import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const FeaturedDoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative p-4">
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-sky-600 text-white text-[10px] font-semibold uppercase">
          {doctor.specialization}
        </span>

        <div className="flex justify-center">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={200}
            height={200}
            className="rounded-full object-cover border-4 border-slate-100"
          />
        </div>
      </div>

      {/* Content */}
      <div className="border-t border-slate-100 px-4 py-4">
        <h3 className="font-bold text-slate-900 line-clamp-1">
          {doctor.name}
        </h3>

        <p className="text-xs text-slate-500 mt-1 line-clamp-1">
          {doctor.hospital}
        </p>

        {/* Info */}
        <div className="flex items-center justify-between mt-5 text-sm">
          <div>
            <p className="text-slate-400 text-xs">Fee:</p>
            <p className="font-semibold text-sky-600">
              ${doctor.fee}
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-xs text-right">
              Exp:
            </p>
            <p className="font-medium text-slate-600">
              {doctor.experience} yrs
            </p>
          </div>
        </div>

        {/* Button */}
        <Link
          href={`/find-doctor/${doctor._id}`}
          className="mt-4 block"
        >
          <Button className="w-full py-2.5 rounded-xl bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition">
            Meet the Specialist
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedDoctorCard;
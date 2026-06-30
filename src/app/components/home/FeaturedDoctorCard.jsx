"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FeaturedDoctorCard = ({ doctor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
      }}
      className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative p-4">
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 left-4 px-3 py-1 rounded-full bg-sky-600 text-white text-[10px] font-semibold uppercase"
        >
          {doctor.specialization}
        </motion.span>

        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.06, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={200}
              height={200}
              className="rounded-full object-cover border-4 border-slate-100"
            />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="border-t border-slate-100 px-4 py-4">
        <motion.h3
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-bold text-slate-900 line-clamp-1"
        >
          {doctor.name}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-xs text-slate-500 mt-1 line-clamp-1"
        >
          {doctor.hospital}
        </motion.p>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex items-center justify-between mt-5 text-sm"
        >
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
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <Link
            href={`/find-doctor/${doctor._id}`}
            className="mt-4 block"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              <Button className="w-full py-2.5 rounded-xl bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition">
                Meet the Specialist
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedDoctorCard;
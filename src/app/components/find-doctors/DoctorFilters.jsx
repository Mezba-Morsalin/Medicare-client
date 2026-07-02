"use client";

import { useState } from "react";
import { Input, Label, TextField } from "@heroui/react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function DoctorFilters({ onApply }) {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("all");
  const [sortBy, setSortBy] = useState("");

  const applyFilters = (
    searchValue,
    specializationValue,
    sortValue
  ) => {
    onApply({
      search: searchValue,
      specialization: specializationValue,
      sortBy: sortValue,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

        {/* Search */}
<div className="lg:col-span-2">
  <label
    htmlFor="doctor-search"
    className="mb-2 block text-sm font-medium text-slate-700"
  >
    Search Doctor
  </label>

  <div className="relative">
    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

    <input
      id="doctor-search"
      type="text"
      value={search}
      placeholder="Search by doctor name..."
      onChange={(e) => {
        const value = e.target.value;

        setSearch(value);

        applyFilters(
          value,
          specialization,
          sortBy
        );
      }}
      className=" w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
    />
  </div>
</div>

        {/* Specialization */}
        <div className="flex flex-col gap-2">
          <Label>Specialization</Label>

          <select
            value={specialization}
            onChange={(e) => {
              const value = e.target.value;

              setSpecialization(value);

              applyFilters(
                search,
                value,
                sortBy
              );
            }}
            className="h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          >
            <option value="all">All Specializations</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="dentistry">Dentistry</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="dermatology">Dermatology</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="gynecology">Gynecology</option>
            <option value="ophthalmology">Ophthalmology</option>
            <option value="psychiatry">Psychiatry</option>
            <option value="ent-specialist">ENT Specialist</option>
            <option value="oncology">Oncology</option>
            <option value="urology">Urology</option>
            <option value="endocrinology">Endocrinology</option>
            <option value="general-physician">General Physician</option>
          </select>
        </div>

        {/* Sort */}
        <div className="flex flex-col gap-2">
          <Label>Sort By</Label>

          <select
            value={sortBy}
            onChange={(e) => {
              const value = e.target.value;

              setSortBy(value);

              applyFilters(
                search,
                specialization,
                value
              );
            }}
            className="h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          >
            <option value="">Sort Doctors</option>
            <option value="fee">Consultation Fee</option>
            <option value="experience">Experience</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>

      </div>
    </motion.div>
  );
}
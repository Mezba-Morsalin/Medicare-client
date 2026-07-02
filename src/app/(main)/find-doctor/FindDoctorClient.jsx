"use client";

import { useState } from "react";
import AllDoctors from "@/app/components/find-doctors/AllDoctors";
import DoctorFilters from "@/app/components/find-doctors/DoctorFilters";

const FindDoctorClient = ({ doctors }) => {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleApply = async ({
    search,
    specialization,
    sortBy,
  }) => {
    try {
      const params = new URLSearchParams();

      if (search.trim()) {
        params.append("search", search.trim());
      }

      if (specialization && specialization !== "all") {
        params.append("specialization", specialization);
      }

      if (sortBy) {
        params.append("sortBy", sortBy);
      }

      const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors?${params.toString()}`;

      console.log(url);

      const res = await fetch(url, {
        cache: "no-store",
      });

      const data = await res.json();

      console.log(data);

      setFilteredDoctors(data?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DoctorFilters onApply={handleApply} />

      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredDoctors.map((doctor) => (
            <AllDoctors
              key={doctor._id}
              doctor={doctor}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold text-slate-800">
            No Doctors Found
          </h2>

          <p className="mt-3 text-slate-500">
            Try changing your search or filter criteria.
          </p>
        </div>
      )}
    </>
  );
};

export default FindDoctorClient;
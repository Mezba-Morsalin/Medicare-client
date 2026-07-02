"use client";

import { useState, useEffect, useCallback } from "react";
import { Pagination } from "@heroui/react";
import { FaUserMd } from "react-icons/fa";

import AllDoctors from "@/app/components/find-doctors/AllDoctors";
import DoctorFilters from "@/app/components/find-doctors/DoctorFilters";

const ITEMS_PER_PAGE = 6;

const FindDoctorClient = ({ doctors, pagination }) => {
const [filteredDoctors, setFilteredDoctors] = useState(doctors || []);

const [page, setPage] = useState(
  pagination?.currentPage || 1
);

const [paginationInfo, setPaginationInfo] = useState(
  pagination || {
    totalItems: doctors?.length || 0,
    totalPages: 1,
    currentPage: 1,
    limit: ITEMS_PER_PAGE,
  }
);

const [filters, setFilters] = useState({
  search: "",
  specialization: "all",
  sortBy: "",
});

useEffect(() => {
  const loadDoctors = async () => {
    try {
      const params = new URLSearchParams();

      params.append("page", page.toString());
      params.append("limit", ITEMS_PER_PAGE.toString());

      if (filters.search.trim()) {
        params.append("search", filters.search.trim());
      }

      if (
        filters.specialization &&
        filters.specialization !== "all"
      ) {
        params.append(
          "specialization",
          filters.specialization
        );
      }

      if (filters.sortBy) {
        params.append("sortBy", filters.sortBy);
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors?${params.toString()}`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch doctors");
      }

      const data = await res.json();

      setFilteredDoctors(data?.data ?? []);

      setPaginationInfo(
        data?.pagination ?? {
          totalItems: 0,
          totalPages: 1,
          currentPage: 1,
          limit: ITEMS_PER_PAGE,
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  loadDoctors();
}, [page, filters]);

const handleApply = (newFilters) => {
  setFilters(newFilters);
  setPage(1);
};

  return (
    <>
      <DoctorFilters onApply={handleApply} />

      {filteredDoctors.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredDoctors.map((doctor) => (
              <AllDoctors
                key={doctor._id}
                doctor={doctor}
              />
            ))}
          </div>

         <div className="mt-12 flex flex-col items-center gap-5">
  <p className="text-sm text-slate-500">
    Showing{" "}
    <span className="font-semibold">
      {(paginationInfo.currentPage - 1) *
        paginationInfo.limit +
        1}
    </span>
    -
    <span className="font-semibold">
      {Math.min(
        paginationInfo.currentPage *
          paginationInfo.limit,
        paginationInfo.totalItems
      )}
    </span>{" "}
    of{" "}
    <span className="font-semibold">
      {paginationInfo.totalItems}
    </span>{" "}
    doctors
  </p>

  <div className="flex items-center gap-2 flex-wrap">
    <button
      onClick={() => setPage(page - 1)}
      disabled={!paginationInfo.hasPrevPage}
      className="px-4 cursor-pointer py-2 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      Previous
    </button>

    {Array.from(
      { length: paginationInfo.totalPages },
      (_, i) => i + 1
    ).map((number) => (
      <button
        key={number}
        onClick={() => setPage(number)}
        className={`h-10 cursor-pointer w-10 rounded-xl border transition-all ${
          page === number
            ? "bg-sky-600 border-sky-600 text-white"
            : "bg-white border-slate-300 hover:bg-sky-50"
        }`}
      >
        {number}
      </button>
    ))}

    <button
      onClick={() => setPage(page + 1)}
      disabled={!paginationInfo.hasNextPage}
      className="px-4 cursor-pointer py-2 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      Next
    </button>
  </div>
</div>
        </>
      ) : (
        <div className="flex items-center justify-center py-24">
          <div className="max-w-lg text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-sky-100">
              <FaUserMd className="text-5xl text-sky-600" />
            </div>

            <h2 className="mt-8 text-3xl font-bold text-slate-800">
              No Doctors Found
            </h2>

            <p className="mt-3 text-slate-500 leading-7">
              We could not find any doctors matching
              your current search or filter criteria.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left shadow-sm">
              <h3 className="mb-4 text-base font-semibold text-slate-700">
                Suggestions
              </h3>

              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-500"></span>
                  Check the spelling of the doctor s
                  name.
                </li>

                <li className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-500"></span>
                  Try another specialization.
                </li>

                <li className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-500"></span>
                  Clear the current filters.
                </li>

                <li className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-500"></span>
                  Try a different sorting option.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FindDoctorClient;
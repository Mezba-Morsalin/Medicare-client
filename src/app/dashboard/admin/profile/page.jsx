import Image from "next/image";
import { Chip } from "@heroui/react";
import {
  FaUserShield,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserCheck,
} from "react-icons/fa";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { format } from "date-fns";

const page = async () => {
    const session = await auth.api.getSession({
            headers: await headers(),
          });
        
          const admin = session?.user;
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-gradient-to-r from-sky-600 to-cyan-600 rounded-3xl p-8 text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src={admin?.image}
              alt="Admin"
              width={120}
              height={120}
              className="rounded-3xl border-4 border-white object-cover"
            />

            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start items-center gap-2 uppercase text-sm font-semibold text-sky-100">
                <FaUserShield />
                System Administrator
              </div>

              <h1 className="text-4xl font-bold mt-2">
                {admin?.name}
              </h1>

              <p className="text-sky-100 mt-3 max-w-2xl">
                Responsible for overseeing the MediCare Connect platform,
                managing doctors, patients, appointments and maintaining
                platform security.
              </p>

              <Chip
                className="mt-5 bg-white text-sky-700 font-semibold"
              >
                {admin?.role}
              </Chip>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
            <p className="uppercase text-xs tracking-widest">
              Administrator ID
            </p>

            <h2 className="font-bold text-xl mt-2">
              {admin.id}
            </h2>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="bg-white rounded-3xl border p-8 shadow-sm">
        <h2 className="text-2xl font-bold">
          Administrator Information
        </h2>

        <p className="text-gray-500 mt-2">
          Account details and administrator profile.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

          <div className="border rounded-2xl p-5">
            <div className="flex items-center gap-3 text-sky-600">
              <FaEnvelope />
              <span className="font-semibold">
                Email
              </span>
            </div>

            <p className="mt-3 text-gray-700">
              {admin.email}
            </p>
          </div>

          <div className="border rounded-2xl p-5">
            <div className="flex items-center gap-3 text-green-600">
              <FaPhoneAlt />
              <span className="font-semibold">
                Phone
              </span>
            </div>

            <p className="mt-3">
              +880 1712-345678
            </p>
          </div>

          <div className="border rounded-2xl p-5">
            <div className="flex items-center gap-3 text-purple-600">
              <FaUserCheck />
              <span className="font-semibold">
                Role
              </span>
            </div>

            <p className="mt-3">
              {admin?.role.toUpperCase()}
            </p>
          </div>

          <div className="border rounded-2xl p-5">
            <div className="flex items-center gap-3 text-orange-600">
              <FaCalendarAlt />
              <span className="font-semibold">
                Joined
              </span>
            </div>

            <p className="mt-3">
  {admin?.createdAt
    ? format(new Date(admin.createdAt), "MMMM dd, yyyy")
    : "N/A"}
</p>
          </div>

          <div className="border rounded-2xl p-5">
            <div className="flex items-center gap-3 text-red-600">
              <FaMapMarkerAlt />
              <span className="font-semibold">
                Location
              </span>
            </div>

            <p className="mt-3">
              Dhaka, Bangladesh
            </p>
          </div>

          <div className="border rounded-2xl p-5">
            <div className="flex items-center gap-3 text-cyan-600">
              <FaUserShield />
              <span className="font-semibold">
                Status
              </span>
            </div>

            <Chip
              color="success"
              variant="flat"
              className="mt-3"
            >
              {admin?.status}
            </Chip>
          </div>

        </div>
      </div>

      {/* Permissions */}
      <div className="bg-white rounded-3xl border p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">
          Administrative Permissions
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

          {[
            "Manage Users",
            "Verify Doctors",
            "Suspend Accounts",
            "Manage Payments",
            "Manage Reviews",
            "Manage Appointments",
            "View Reports",
            "Access Analytics",
            "System Configuration",
          ].map((item) => (
            <div
              key={item}
              className="border rounded-2xl p-5 flex items-center gap-3"
            >
              <FaUserCheck className="text-green-600" />

              <span className="font-medium">
                {item}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default page;
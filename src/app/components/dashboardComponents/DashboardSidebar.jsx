"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  FaTimes,
  FaThLarge,
  FaCalendarAlt,d,
  FaStar,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  FiCalendar,
  FiDollarSign,
  FiGrid,
  FiSearch,
  FiSettings,
  FiStar,
  FiTrendingUp,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

import { GiMedicines } from "react-icons/gi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { PuffLoader } from "react-spinners";

export default function DashboardSidebar({
  isOpen,
  setIsOpen,
}) {
  const router = useRouter();
  const pathname = usePathname();

  const { data: session, isPending } =
    authClient.useSession();

  const user = session?.user ?? null;

  const avatarSrc =
    user?.image?.trim()
      ? user.image
      : "/images/default-user.png";

  const doctorMenu = [
    {
      title: "Dashboard",
      href: "/dashboard/doctor",
      icon: FaThLarge,
    },
    {
      title: "Appointments",
      href: "/dashboard/doctor/appointments",
      icon: FaCalendarAlt,
    },
    {
      title: "Manage Schedule",
      href: "/dashboard/doctor/schedule",
      icon: RiCalendarScheduleLine,
    },
    {
      title: "Prescriptions",
      href: "/dashboard/doctor/prescriptions",
      icon: GiMedicines,
    },
    {
      title: "Profile",
      href: `/dashboard/${user?.role}/profile`,
      icon: FaUserCog,
    },
  ];

  const adminLinks = [
    {
      title: "Dashboard Overview",
      href: "/dashboard/admin",
      icon: FiGrid,
    },
    {
      title: "User Management",
      href: "/dashboard/admin/users",
      icon: FiUsers,
    },
    {
      title: "Doctor Management",
      href: "/dashboard/admin/doctors",
      icon: FiUserCheck,
    },
    {
      title: "Appointment Management",
      href: "/dashboard/admin/appointments",
      icon: FiCalendar,
    },
    {
      title: "Payment Management",
      href: "/dashboard/admin/payments",
      icon: FiDollarSign,
    },
    {
      title: "Analytics Dashboard",
      href: "/dashboard/admin/analytics",
      icon: FiTrendingUp,
    },
    {
      title: "Admin Profile",
      href: "/dashboard/admin/profile",
      icon: FiSettings,
    },
  ];

  const patientLinks = [
    {
      title: "Dashboard Overview",
      href: "/dashboard/patient",
      icon: FiGrid,
    },
    {
      title: "Find Doctors",
      href: "/find-doctor",
      icon: FiSearch,
    },
    {
      title: "My Appointments",
      href: "/dashboard/patient/appointments",
      icon: FiCalendar,
    },
    {
      title: "Payment History",
      href: "/dashboard/patient/payments",
      icon: FiDollarSign,
    },
    {
      title: "My Reviews",
      href: "/dashboard/patient/reviews",
      icon: FiStar,
    },
    {
      title: "Profile Management",
      href: "/dashboard/patient/profile",
      icon: FiSettings,
    },
  ];

  const navLinkMap = {
    patient: patientLinks,
    doctor: doctorMenu,
    admin: adminLinks,
  };

  const navItems =
    navLinkMap[user?.role] || [];

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-72 bg-white border-r
          transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
          lg:translate-x-0
        `}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-5 border-b">
            {isPending ? (
              <PuffLoader
                color="#0084d1"
                size={25}
              />
            ) : (
              <div>
                <Image
                  src={avatarSrc}
                  alt={user?.name || "User"}
                  width={100}
                  height={100}
                  className="rounded-full"
                />

                <h3 className="font-bold mt-2">
                  {user?.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {user?.specialization}
                </p>
              </div>
            )}

            <button
              className="lg:hidden cursor-pointer"
              onClick={() =>
                setIsOpen(false)
              }
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className={`
                    flex items-center gap-3
                    px-4 py-3 rounded-xl
                    transition
                    ${
                      pathname === item.href
                        ? "bg-sky-600 text-white"
                        : "hover:bg-slate-100"
                    }
                  `}
                >
                  <Icon />
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="p-4 border-t">
            <Button
              onClick={handleSignOut}
              className="w-full bg-red-50 text-red-600 hover:bg-red-100"
            >
              <FaSignOutAlt />
              Logout
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
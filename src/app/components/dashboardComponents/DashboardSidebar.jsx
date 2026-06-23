"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";


import {
  FaTimes,
  FaThLarge,
  FaCalendarAlt,
  FaUserInjured,
  FaClock,
  FaStar,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";


export default function DashboardSidebar({ isOpen, setIsOpen,}) {
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();
        const user = session?.user ?? null;
        const avatarSrc =
      user?.image?.trim() ? user.image : "/images/default-user.png";

      const menus = [
  {
    title: "Dashboard",
    href: "/dashboard/doctor",
    icon: FaThLarge,
  },
  {
    title: "Appointments",
    href: "/dashboard/appointments",
    icon: FaCalendarAlt,
  },
  {
    title: "Patients",
    href: "/dashboard/patients",
    icon: FaUserInjured,
  },
  {
    title: "Prescriptions",
    href: "/dashboard/prescriptions",
    icon: GiMedicines ,
  },
  {
    title: "Reviews",
    href: "/dashboard/reviews",
    icon: FaStar,
  },
  {
    title: "Profile",
    href: `/dashboard/${user?.role}/profile`,
    icon: FaUserCog,
  },
];
  return (
    <>
      {/* Mobile Overlay */}
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
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b">
            <div>
              <h3 className="font-bold">
                {user?.name}
              </h3>

              <p className="text-xs text-gray-500">
                {user?.specialization}
              </p>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          {/* Menus */}
          <div className="flex-1 p-4 space-y-2">
            {menus.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
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

          {/* Logout */}
          <div className="p-4 border-t">
            <button className="flex items-center gap-3 text-red-500">
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
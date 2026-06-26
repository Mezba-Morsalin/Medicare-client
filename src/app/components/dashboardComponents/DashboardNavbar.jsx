"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { FaBell, FaBars } from "react-icons/fa";
import { PuffLoader } from "react-spinners";
import navImg from '../../../../public/assets/navbar.png'
import { outfit } from "@/lib/font";
import { p } from "motion/react-client";

export default function DashboardNavbar({ onMenuClick }) {
      const { data: session, isPending } = authClient.useSession();
      const user = session?.user ?? null;
      const avatarSrc =
    user?.image?.trim() ? user.image : "/images/default-user.png";
  return (
    <nav className="sticky top-0 z-40 bg-white py-4 border-b h-16">
      <div className="max-w-7xl mx-auto h-full px-4 md:px-6">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-3">
            {/* Mobile Menu */}
            <button
              onClick={onMenuClick}
              className="lg:hidden"
            >
              <FaBars className="text-xl" />
            </button>

            <div className="flex gap-3 items-center">
            <Link href="/">
              <Image
                src={navImg}
                alt="Logo"
                width={50}
                height={50}
                priority
                className="bg-sky-50 p-3 rounded-xl"
              />
            </Link>
            <h3 className={`${outfit.className} text-2xl font-extrabold text-slate-800`}>
              Medicare <span className="text-sky-600">Connect</span>
            </h3>
          </div>
          </div>

            {
                isPending  ? <PuffLoader color="#0084d1" size={25} /> : <div className="flex items-center gap-2 md:gap-3 border border-zinc-300 p-2 rounded-full">
              <Image
                src={avatarSrc}
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />

              <div className="hidden sm:block">
                <h4 className="font-semibold text-sm">
                  {user?.name}
                </h4>
<div className="flex gap-2 text-xs text-gray-500">
  {user?.specialization && (
    <p>{user?.specialization.toUpperCase()}</p>
  )}

  <p>{user?.role.toUpperCase()}</p>
</div>
              </div>
            </div>
            }
          
        </div>
      </div>
    </nav>
  );
}
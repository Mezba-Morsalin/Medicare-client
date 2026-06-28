"use client";

import { authClient } from "@/lib/auth-client";
import { outfit } from "@/lib/font";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { PuffLoader } from "react-spinners";

import navImg from "../../../../public/assets/navbar.png";

export default function DashboardNavbar({ onMenuClick }) {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user ?? null;

  const avatarSrc =
    user?.image?.trim() || "/images/default-user.png";

  const handleSignOut = async () => {
    await authClient.signOut();

    setShowMenu(false);

    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-40 h-16 border-b bg-white">
      <div className="max-w-7xl mx-auto h-full px-4 md:px-6">
        <div className="flex h-full items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-10">
            <button
              onClick={onMenuClick}
              className="lg:hidden cursor-pointer"
            >
              <FaBars className="text-xl" />
            </button>

            <Link href="/" className="flex items-center gap-3">
              <Image
                src={navImg}
                alt="Logo"
                width={50}
                height={50}
                priority
                className="rounded-xl bg-sky-50 p-3"
              />

              <h2
                className={`${outfit.className}  text-2xl font-extrabold text-slate-800`}
              >
                Medicare <span className="text-sky-600">Connect</span>
              </h2>
            </Link>
          </div>

          {/* Right */}
          {isPending ? (
            <PuffLoader color="#0284c7" size={24} />
          ) : (
            <div className="relative hidden md:block">
  <button
    onClick={() => setShowMenu(!showMenu)}
    className="flex cursor-pointer items-center gap-3 rounded-full border border-slate-200 px-2 py-1.5 hover:bg-slate-50 transition-all duration-300"
  >
    <Image
      src={avatarSrc}
      alt={user?.name || "User"}
      width={40}
      height={40}
      className="h-10 w-10 rounded-full object-cover"
    />

    <div className="hidden md:block text-left">
      <h4 className="text-sm font-semibold text-slate-800">
        {user?.name}
      </h4>

      <p className="text-xs capitalize text-slate-500">
        {user?.role}
      </p>
    </div>

    {/* Arrow Icon */}
    <FaChevronDown
      className={`text-slate-500 transition-transform duration-300 ${
        showMenu ? "rotate-180" : "rotate-0"
      }`}
    />
  </button>

  {showMenu && (
    <div className="absolute right-0 top-14 w-64 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl z-50">
      <div className="mb-4 flex items-center gap-3 border-b pb-4">
        <Image
          src={avatarSrc}
          alt={user?.name || "User"}
          width={50}
          height={50}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-slate-800">
            {user?.name}
          </h3>

          <p className="text-xs text-slate-500 break-all">
            {user?.email}
          </p>
        </div>
      </div>

      <Link
        href={`/dashboard/${user?.role}`}
        onClick={() => setShowMenu(false)}
      >
        <Button className="mb-3 w-full rounded-xl border border-sky-500  text-sky-600 bg-transparent hover:bg-slate-100">
          Dashboard
        </Button>
      </Link>

      <Link
        href={`/dashboard/${user?.role}/profile`}
        onClick={() => setShowMenu(false)}
      >
        <Button className="mb-3 w-full rounded-xl border border-sky-500 bg-transparent text-sky-600 hover:bg-sky-50">
          My Profile
        </Button>
      </Link>

      <Button
        onClick={handleSignOut}
        className="w-full rounded-xl border border-red-200 bg-transparent text-red-600 hover:bg-red-50"
      >
        Sign Out
      </Button>
    </div>
  )}
</div>
          )}
        </div>
      </div>
    </nav>
  );
}
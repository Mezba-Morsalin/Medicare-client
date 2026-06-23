"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { PuffLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import NavLinks from "./shared/Navlinks";
import navImg from '../../../public/assets/navbar.png'
import { outfit } from "@/lib/font";

const Navbar = () => {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user ?? null;

  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const dropdownRef = useRef(null);

  const avatarSrc =
    user?.image?.trim() ? user.image : "/images/default-user.png";

  const handleSignOut = async () => {
    await authClient.signOut();
    setShowMenu(false);
    setOpen(false);
    router.push('/')
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowMenu(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const dashboardLink =
  user?.role === "admin"
    ? "/dashboard/admin"
    : user?.role === "doctor"
    ? "/dashboard/doctor"
    : "/dashboard/patient";

const MainLinks = [
  <li key="scroll" onClick={() => setOpen(false)}>
    <NavLinks href="/">Home</NavLinks>
  </li>,

  <li key="browse" onClick={() => setOpen(false)}>
    <NavLinks href="/find-doctor">Find Doctor</NavLinks>
  </li>,

  <li key="company" onClick={() => setOpen(false)}>
    <NavLinks href="/about">About Us</NavLinks>
  </li>,

  <li key="pricing" onClick={() => setOpen(false)}>
    <NavLinks href="/contact">Contact Us</NavLinks>
  </li>,
];

if (user) {
  MainLinks.push(
    <li key="dashboard" onClick={() => setOpen(false)}>
      <NavLinks href={dashboardLink}>Dashboard</NavLinks>
    </li>
  );
}

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#fefdff]/95 border-b border-slate-100 shadow-sm">
      <nav className="relative max-w-7xl mx-auto px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
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

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-5 text-sm lg:text-base text-slate-600 font-medium">
              {MainLinks}
            </ul>

            <div className="h-5 border-l border-slate-200" />

            <div className="flex items-center gap-3">

              {isPending ? (
                <PuffLoader color="#0284c7" size={30} />
              ) : user ? (
                <div ref={dropdownRef} className="relative">

                  {/* Profile Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setShowMenu(!showMenu)}
                    className="flex items-center gap-3 border border-slate-200 hover:bg-slate-50 p-1.5 pr-4 rounded-full cursor-pointer transition"
                  >
                    <Image
                      src={avatarSrc}
                      alt="User"
                      width={38}
                      height={38}
                      className="rounded-full border-2 border-sky-500 object-cover"
                    />

                    <div className="hidden lg:flex flex-col text-left">
                      <span className="text-slate-800 text-sm font-semibold leading-tight">
                        {user.name}
                      </span>
                      <span className="text-xs text-slate-500 leading-tight">
                        {user.role}
                      </span>
                    </div>

                    <motion.div
                      animate={{ rotate: showMenu ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-1"
                    >
                      <FaChevronDown className="text-slate-400 text-xs" />
                    </motion.div>
                  </motion.div>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {showMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-0 top-14 w-52 bg-white border border-slate-100 rounded-2xl p-3 shadow-xl z-50"
                      >
                        <Link href="/profile" onClick={() => setOpen(false)}>
    <Button className="w-full bg-transparent border border-sky-500 hover:bg-sky-50 text-sky-500 hover:text-sky-600 font-medium rounded-xl mb-4">
      Profile
    </Button>
  </Link>
                        <Button
                          onClick={handleSignOut}
                          className="w-full border border-red-200 bg-transparent hover:bg-red-50 text-red-600 font-medium rounded-xl transition duration-200"
                        >
                          Sign Out
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link href="/signin">
                  <Button className="border border-sky-600 hover:bg-sky-50 text-sky-600 bg-transparent rounded-xl font-medium">
                    Sign In
                  </Button>
                </Link>
              )}

              {!user && (

                <Link href="/signup">
                  <Button className="bg-sky-600 hover:bg-sky-700 transition duration-300 text-white rounded-xl px-4 py-2 font-medium shadow-sm">
                    Sign Up
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-50 rounded-lg transition cursor-pointer"
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4"
            >
              <div className="bg-white shadow-xl rounded-2xl border border-slate-100 p-5 space-y-5">

                <ul className="flex flex-col gap-4 text-slate-700 font-medium">
                  {MainLinks}
                </ul>

                <div className="border-t border-slate-100" />

                {isPending ? (
                  <div className="flex justify-center">
                    <PuffLoader color="#0284c7" size={30} />
                  </div>
                ) : user ? (
                  <div className="space-y-4">
  <div className="flex items-center gap-3">
    <Image
      src={avatarSrc}
      alt="User"
      width={46}
      height={46}
      className="rounded-full border-2 border-sky-500 object-cover"
    />

    <div>
      <h4 className="text-slate-800 font-semibold">
        {user.name}
      </h4>
      <p className="text-xs text-slate-500">
        {user.role}
      </p>
    </div>
  </div>

  <Link href="/profile" onClick={() => setOpen(false)}>
    <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-xl mb-4">
      Profile
    </Button>
  </Link>

  <Button
    onClick={handleSignOut}
    className="w-full bg-red-500 hover:bg-red-600 text-white font-medium rounded-xl"
  >
    Sign Out
  </Button>
</div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/signin" className="w-full" onClick={() => setOpen(false)}>
                      <Button className="w-full border border-sky-600 text-sky-600 bg-transparent rounded-xl font-medium">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup" className="w-full" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700 transition duration-300 text-white rounded-xl font-medium">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
};

export default Navbar;
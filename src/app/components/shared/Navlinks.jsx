"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`group relative px-3 py-2 font-semibold rounded-lg transition-all duration-300
        ${
          isActive
            ? "bg-sky-50 text-sky-600"
            : "text-zinc-600 hover:bg-sky-50 hover:text-sky-600"
        }`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
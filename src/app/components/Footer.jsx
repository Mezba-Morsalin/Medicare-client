"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiHeart,
  FiActivity,
} from "react-icons/fi";

const Footer = () => {
  const pathName = usePathname()
  if (pathName.includes('dashboard')) {
    return null
  }
  return (
    <footer className="bg-[#041336] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-sky-600/20 p-3 rounded-xl">
                <FiActivity className="text-sky-600 text-xl" />
              </div>

              <h3 className="text-2xl font-bold">
                MediCare
                <span className="text-sky-600">Connect</span>
              </h3>
            </div>

            <p className="text-slate-400 leading-8">
              Connecting clinicians, patients, and healthcare networks
              through full-stack, secure cloud solutions. Reduced paper
              friction, verified specialists on rostering tables.
            </p>

            <div className="flex items-center gap-4 mt-8">
  <a
    href="#"
    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-600 hover:border-sky-600 transition"
  >
    <FaFacebookF />
  </a>

  <a
    href="#"
    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-600 hover:border-sky-600 transition"
  >
    <FaTwitter />
  </a>

  <a
    href="#"
    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-600 hover:border-sky-600 transition"
  >
    <FaLinkedinIn />
  </a>
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold uppercase mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-sky-600 transition"
                >
                  Clinical Home
                </Link>
              </li>

              <li>
                <Link
                  href="/find-doctor"
                  className="hover:text-sky-600 transition"
                >
                  Find Doctors
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-sky-600 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-sky-600 transition"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold uppercase mb-6">
              Contact Us
            </h4>

            <div className="space-y-5 text-slate-400">
              <div className="flex gap-3">
                <FiMapPin className="text-sky-500 mt-1" />

                <p>
                  Hospital Tech Plaza,
                  <br />
                  Silicon District, CA
                </p>
              </div>

              <div className="flex gap-3">
                <FiPhone className="text-sky-500 mt-1" />

                <p>+1 (800) 555-CARE (2273)</p>
              </div>

              <div className="flex gap-3">
                <FiMail className="text-sky-500 mt-1" />

                <p>support@medicareconnect.com</p>
              </div>
            </div>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="text-xl font-bold uppercase text-red-400 mb-6">
              Emergency Hotline
            </h4>

            <div className="rounded-2xl border border-red-900 bg-red-950/40 p-5">
              <p className="text-sm text-slate-300 leading-6">
                If you are undergoing an acute health or clinical event,
                skip appointments and dial the line immediately.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="text-4xl font-extrabold text-red-400">
                  911
                </span>

                <span className="text-slate-300 font-semibold">
                  / 24hr ER Team
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MediCare Connect. All electronic clinical patient
            records confidential.
          </p>

          <Link href={'/privacy'} className="flex items-center gap-2 text-slate-500 text-sm hover:text-sky-600 transition">
            Privacy & Policy
          </Link>
          <Link href={'/terms'} className="flex items-center gap-2 text-slate-500 text-sm hover:text-sky-600 transition">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
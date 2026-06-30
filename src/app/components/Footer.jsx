"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiActivity,
} from "react-icons/fi";

const Footer = () => {
  const pathName = usePathname();

  if (pathName.includes("dashboard")) {
    return null;
  }

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <footer className="bg-[#041336] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Logo */}
          <motion.div variants={item}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="bg-sky-600/20 p-3 rounded-xl">
                <FiActivity className="text-sky-600 text-xl" />
              </div>

              <h3 className="text-2xl font-bold">
                MediCare
                <span className="text-sky-600">Connect</span>
              </h3>
            </motion.div>

            <p className="text-slate-400 leading-8">
              Connecting clinicians, patients, and healthcare networks
              through full-stack, secure cloud solutions. Reduced paper
              friction, verified specialists on rostering tables.
            </p>

            <div className="flex items-center gap-4 mt-8">
              {[FaFacebookF, FaTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-600 hover:border-sky-600"
                  >
                    <Icon />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h4 className="text-xl font-bold uppercase mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-slate-400">
              {[
                ["Clinical Home", "/"],
                ["Find Doctors", "/find-doctor"],
                ["About Us", "/about"],
                ["Contact Support", "/contact"],
              ].map(([title, href]) => (
                <li key={title}>
                  <motion.div whileHover={{ x: 6 }}>
                    <Link
                      href={href}
                      className="hover:text-sky-600"
                    >
                      {title}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h4 className="text-xl font-bold uppercase mb-6">
              Contact Us
            </h4>

            <div className="space-y-5 text-slate-400">
              <motion.div
                whileHover={{ x: 6 }}
                className="flex gap-3"
              >
                <FiMapPin className="text-sky-500 mt-1" />

                <p>
                  Hospital Tech Plaza,
                  <br />
                  Silicon District, CA
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex gap-3"
              >
                <FiPhone className="text-sky-500 mt-1" />

                <p>+1 (800) 555-CARE (2273)</p>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex gap-3"
              >
                <FiMail className="text-sky-500 mt-1" />

                <p>support@medicareconnect.com</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Emergency */}
          <motion.div variants={item}>
            <h4 className="text-xl font-bold uppercase text-red-400 mb-6">
              Emergency Hotline
            </h4>

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="rounded-2xl border border-red-900 bg-red-950/40 p-5"
            >
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
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-500 text-sm">
            © 2026 MediCare Connect. All electronic clinical patient
            records confidential.
          </p>

          <div className="flex gap-6">
            <motion.div whileHover={{ y: -2 }}>
              <Link
                href="/privacy"
                className="text-slate-500 text-sm hover:text-sky-600"
              >
                Privacy & Policy
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }}>
              <Link
                href="/terms"
                className="text-slate-500 text-sm hover:text-sky-600"
              >
                Terms & Conditions
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
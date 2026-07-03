"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5">
      <div className="max-w-xl w-full bg-white border border-slate-200 rounded-3xl shadow-sm p-10 text-center">
        <div className="mx-auto w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
          <FaExclamationTriangle className="text-5xl text-red-500" />
        </div>

        <h1 className="mt-8 text-4xl font-bold text-slate-900">
          Something went wrong
        </h1>

        <p className="mt-4 text-slate-500 leading-7">
          An unexpected error occurred while processing your request.
          Please try again. If the problem persists, contact support.
        </p>

        {process.env.NODE_ENV === "development" && error?.message && (
          <div className="mt-6 rounded-xl bg-slate-100 p-4 text-left text-sm text-red-600 break-words">
            {error.message}
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onPress={() => reset()}
            className="bg-sky-600 text-white px-6"
            startContent={<FaRedo />}
          >
            Try Again
          </Button>

          <Link href="/">
            <Button
              variant="bordered"
              startContent={<FaHome />}
            >
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
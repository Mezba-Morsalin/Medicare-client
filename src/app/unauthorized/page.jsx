import Link from "next/link";
import { FaShieldAlt, FaArrowLeft } from "react-icons/fa";

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-white border rounded-3xl shadow-lg p-10 text-center">
        {/* Icon */}
        <div className="w-24 h-24 mx-auto rounded-full bg-red-100 flex items-center justify-center">
          <FaShieldAlt className="text-5xl text-red-600" />
        </div>

        {/* Error Code */}
        <h1 className="text-6xl font-bold text-red-600 mt-8">401</h1>

        {/* Title */}
        <h2 className="text-3xl font-bold text-slate-900 mt-3">
          Unauthorized Access
        </h2>

        {/* Description */}
        <p className="text-slate-500 mt-4 leading-7">
          Sorry, you do not have permission to access this page.
          Please sign in with an authorized account or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t pt-5">
          <p className="text-sm text-slate-400">
            If you believe this is a mistake, please contact the system administrator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
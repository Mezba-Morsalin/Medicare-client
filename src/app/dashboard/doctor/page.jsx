
import DashboardStats from "@/app/components/dashboardComponents/DoctorDashBoard/DashboardStats";
import DashboardChart from "@/app/components/dashboardComponents/DoctorDashBoard/DashboardChart";
import { FaHome, FaStar, FaStethoscope } from "react-icons/fa";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { getUserToken } from "../../../lib/session";


export default async function DoctorDashboard() {
  const session = await auth.api.getSession({
  headers: await headers(),
});

const user = session?.user;

const token = await getUserToken()

const doctorRes = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor?doctorId=${user.id}`,
  {
    cache: "no-store",
    headers : {
                    authorization: `Bearer ${token}`,
          }
  }
);

const doctorData = await doctorRes.json();
const doctor = doctorData.data?.[0];

if (!doctor) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
      <h2 className="text-2xl font-bold text-amber-900">
        Complete Your Professional Profile
      </h2>

      <p className="mt-3 text-amber-700 max-w-2xl">
        Your doctor profile has not been created yet. Complete your
        professional information to appear in the clinician directory,
        receive appointment requests, and begin managing patients through
        MediCare Connect.
      </p>

      <Link href="/dashboard/doctor/complete-profile">
        <Button className="mt-6 px-6 py-3 bg-sky-600 text-white rounded-xl font-medium hover:bg-sky-700 transition duration-300">
          Complete Profile
        </Button>
      </Link>
    </div>
  );
}

if (doctor?.status === "Suspended") {
  return (
    <div className="min-h-[75vh] flex items-center justify-center">
      <div className="max-w-2xl w-full bg-red-50 border border-red-200 rounded-3xl p-10 text-center">

        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
          <span className="text-5xl">🚫</span>
        </div>

        <h1 className="text-3xl font-bold text-red-700">
          Your  Account is Suspended
        </h1>

        <p className="mt-4 text-slate-600 leading-7">
          Your doctor account has been temporarily suspended by the administrator.
          You cannot manage appointments, schedules, prescriptions, or access
          other doctor features until your account is reactivated.
        </p>

        <div className="mt-8 bg-white rounded-2xl border border-red-200 p-5">
          <h3 className="font-semibold text-slate-800">
            Need Assistance?
          </h3>

          <p className="mt-2 text-slate-500">
            Please contact the administrator if you believe this was a mistake
            or require further information regarding your account status.
          </p>
          <p className="text-red-600">
            admin.medicare@gmail.com
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/">
            <Button className="bg-sky-600 hover:bg-sky-700 transition duration-300 text-white px-8 rounded-xl flex items-center justify-center gap-2">
              <FaHome/> Go to Home
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}

const paymentRes = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/my/payments?doctorId=${doctor._id}`,
  {
    cache: "no-store",
    headers : {
                    authorization: `Bearer ${token}`,
          }
  }
);

const payments = await paymentRes.json();

const reviewRes = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews?doctorId=${doctor._id}`,
  {
    cache: "no-store",
    headers : {
                    authorization: `Bearer ${token}`,
          }
  }
);

const reviewData = await reviewRes.json();
const reviews = reviewData.data || [];

console.log(doctor);
console.log(payments);
console.log(reviews);

const totalRevenue = payments.reduce(
  (sum, payment) => sum + payment.amount,
  0
);

const totalAppointments = payments.length;

const averageRating =
  reviews.length > 0
    ? (
        reviews.reduce((sum, review) => sum + review.rating, 0) /
        reviews.length
      ).toFixed(1)
    : 0;

const totalPatients = new Set(
  payments.map((payment) => payment.patientId)
).size;

  return (
    <div className="space-y-6">

  {/* Hero Section */}
  <div className="bg-linear-to-r from-sky-600 to-cyan-500 rounded-3xl p-6 md:p-8 text-white shadow-lg">

    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left">

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
          <FaStethoscope />
          Licensed Clinical Practitioner
        </div>

        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mt-5">
          Greetings, {user?.name}
        </h1>

        {doctor && (
          <div className="mt-4">
            <span
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                doctor.status === "Verified"
                  ? "bg-green-100 text-green-700"
                  : doctor.status === "Rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {doctor.status}
            </span>
          </div>
        )}

        <p className="mt-5 max-w-2xl text-white/90 leading-relaxed">
          Streamline patient care, oversee appointment management,
          coordinate treatment plans, and enhance clinical outcomes
          with your comprehensive physician workspace.
        </p>

        {/* Mobile Specialty */}
        <div className="lg:hidden mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-xs uppercase font-semibold text-white/70">
            Medical Specialty
          </p>

          <p className="font-bold mt-1 text-lg">
            {user?.specialization || "General Physician"}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center">

        <div className="relative">
          <Image
            src={doctor?.image}
            alt="doctor-image"
            width={180}
            height={180}
            className="rounded-3xl object-cover border-4 border-white shadow-xl"
          />
        </div>

        <div className="hidden lg:block mt-5 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center min-w-[220px]">
          <p className="text-xs uppercase font-semibold text-white/70">
            Medical Specialty
          </p>

          <p className="font-bold mt-2 text-lg">
            {user?.specialization || "General Physician"}
          </p>
        </div>
      </div>

    </div>
  </div>

  {/* Stats */}
  <DashboardStats
    totalRevenue={totalRevenue}
    totalAppointments={totalAppointments}
    totalPatients={totalPatients}
    averageRating={averageRating}
  />

  {/* Charts + Reviews */}
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

    <DashboardChart payments={payments} />

    <div className="bg-white border rounded-3xl p-6 shadow-sm">

      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-xl bg-yellow-100 flex items-center justify-center">
          <FaStar className="text-yellow-500" />
        </div>

        <div>
          <h2 className="font-bold">
            Recent Patient Reviews
          </h2>

          <p className="text-sm text-gray-500">
            Latest feedback from your patients
          </p>
        </div>
      </div>

      <div className="space-y-4">

        {reviews.length > 0 ? (
          reviews.slice(0, 3).map((review) => (
            <div
              key={review._id}
              className="border rounded-2xl p-4 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-3">
                  <Image
                    src={review.patientImage}
                    alt={review.patientName}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {review.patientName}
                    </h3>

                    <p className="text-xs text-gray-400">
                      Patient Feedback
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold">
                  ⭐ {review.rating}
                </div>

              </div>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))
        ) : (
          <div className="border border-dashed rounded-2xl p-8 text-center">
            <FaStar className="mx-auto text-4xl text-gray-300 mb-3" />

            <h3 className="font-semibold text-gray-600">
              No Reviews Yet
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Patient reviews will appear here once submitted.
            </p>
          </div>
        )}

      </div>
    </div>

  </div>
</div>
  );
}
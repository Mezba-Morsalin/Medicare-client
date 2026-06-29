
import DashboardStats from "@/app/components/dashboardComponents/DoctorDashBoard/DashboardStats";
import DashboardChart from "@/app/components/dashboardComponents/DoctorDashBoard/DashboardChart";

import RecentPrescriptions from "@/app/components/dashboardComponents/DoctorDashBoard/RecentPresciptions";
import { FaStar, FaStethoscope } from "react-icons/fa";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";

export default async function DoctorDashboard() {
  const session = await auth.api.getSession({
  headers: await headers(),
});

const user = session?.user;

const doctorRes = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor?doctorId=${user.id}`,
  {
    cache: "no-store",
  }
);

const doctorData = await doctorRes.json();
const doctor = doctorData.data?.[0];

const paymentRes = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/my/payments?doctorId=${doctor._id}`,
  {
    cache: "no-store",
  }
);

const payments = await paymentRes.json();

const reviewRes = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews?doctorId=${doctor._id}`,
  {
    cache: "no-store",
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
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-sky-600 text-white p-8 flex justify-between items-start">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase font-semibold opacity-90">
          <FaStethoscope />
          Licensed Clinical Practitioner
        </div>

        <div>
          <h1 className="text-4xl font-bold mt-3">
          Greetings, {user?.name}
        </h1>
        <p>{doctor && (
  <span
    className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
      doctor.status === "Verified"
        ? "bg-green-100 text-green-600"
        : doctor.status === "Rejected"
        ? "bg-red-100 text-red-600"
        : "bg-amber-100 text-amber-600"
    }`}
  >
    {doctor.status}
  </span>
)}</p>
        </div>

        <p className="mt-4 text-white/90 max-w-2xl leading-relaxed">
  Streamline patient care, oversee appointment management,
  coordinate treatment plans, and enhance clinical outcomes
  with your comprehensive physician workspace.
</p>
      </div>

      <div className="hidden md:block bg-sky-600 rounded-2xl px-5 py-4">
       <p className="text-xs font-semibold uppercase">
  Medical Specialty
</p>

        <p className="font-bold mt-1">
          {user?.specialization || "patient"}
        </p>
      </div>
    </div>

      <DashboardStats  totalRevenue={totalRevenue}
  totalAppointments={totalAppointments}
  totalPatients={totalPatients}
  averageRating={averageRating}/>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <DashboardChart payments={payments}/>
        <div className="bg-white border rounded-3xl p-6">
  <h2 className="font-bold uppercase text-sm mb-6 flex items-center gap-2">
    <FaStar className="text-yellow-500" />
    Recent Patient Feedback Testimonials
  </h2>

  <div className="space-y-4">
    {reviews.length > 0 ? (
      reviews.slice(0, 3).map((review) => (
        <div
          key={review._id}
          className="border rounded-2xl p-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image className="rounded-full" src={review.patientImage} alt={review.patientName} width={40} height={40}></Image>
              <h3 className="font-semibold">
              {review.patientName}
            </h3>
            </div>

            <span className="text-yellow-500 font-medium">
              ⭐ {review.rating}
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2 italic">
            {review.comment}
          </p>
        </div>
      ))
    ) : (
      <div className="border rounded-2xl p-6 text-center text-gray-500">
        No reviews available.
      </div>
    )}
  </div>
</div>
      </div>

      <RecentPrescriptions />
    </div>
  );
}
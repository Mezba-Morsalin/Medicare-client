import DashboardHeader from "@/app/components/dashboardComponents/PatientDashboard/DashboardHeader";
import DashboardOverview from "@/app/components/dashboardComponents/PatientDashboard/DashboardOverview";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";



export default async function PatientDashboard() {
    const session = await auth.api.getSession({
             headers: await headers(),
           });
         
           const user = session?.user;

           const tokenData = await auth.api.getToken({
                   headers: await headers(),
                 });

  const paymentRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments?patientId=${user.id}`,
  {
    cache: "no-store",
    headers : {
                    authorization: `Bearer ${tokenData.token}`,
          }
  }
);

const payments = await paymentRes.json();

const reviewRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews?patientId=${user.id}`,
  {
    cache: "no-store",
    headers : {
                    authorization: `Bearer ${tokenData.token}`,
          }
  }
);

const reviewData = await reviewRes.json();

const reviews = reviewData.data;


  return user?.status === "Suspended" ? (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="max-w-xl w-full bg-white border border-red-200 rounded-3xl shadow-lg p-10 text-center">
      <div className="w-24 h-24 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 text-5xl">
        🚫
      </div>

      <h1 className="mt-6 text-3xl font-bold text-slate-900">
        Account Suspended
      </h1>

      <p className="mt-4 text-slate-600 leading-7">
        Your account has been suspended by the administrator.
        <br />
        You currently cannot access appointments, payments,
        reviews or other dashboard features.
      </p>

      <div className="mt-8 flex flex-col items-center gap-2 rounded-xl bg-red-50 border border-red-200 px-5 py-3 text-red-600 font-semibold space-y-2">
        <p>Please contact the administrator to reactivate your account.</p>
         <p className="text-red-600">
            admin.medicare@gmail.com
          </p>
      </div>
    </div>
  </div>
) : (
  <div className="space-y-6">
    <DashboardHeader
      user={user}
      payments={payments}
      reviews={reviews}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="lg:col-span-2">
        <DashboardOverview payments={payments} />
      </div>
    </div>
  </div>
);
}
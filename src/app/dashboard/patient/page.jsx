import DashboardHeader from "@/app/components/dashboardComponents/PatientDashboard/DashboardHeader";
import DashboardOverview from "@/app/components/dashboardComponents/PatientDashboard/DashboardOverview";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


export default async function PatientDashboard() {
    const session = await auth.api.getSession({
             headers: await headers(),
           });
         
           const user = session?.user;

  const paymentRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments?patientId=${user.id}`,
  {
    cache: "no-store",
  }
);

const payments = await paymentRes.json();

const reviewRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews?patientId=${user.id}`,
  {
    cache: "no-store",
  }
);

const reviewData = await reviewRes.json();

const reviews = reviewData.data;


  return (
    <div className="space-y-6">
  <DashboardHeader
    user={user}
    payments={payments}
    reviews={reviews}
  />

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Left Content */}
    <div className="lg:col-span-2">
      <DashboardOverview payments={payments} />
    </div>
  </div>
</div>
  );
}
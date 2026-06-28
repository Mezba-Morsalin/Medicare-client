import DashboardHeader from "@/app/components/dashboardComponents/PatientDashboard/DashboardHeader";
import DashboardOverview from "@/app/components/dashboardComponents/PatientDashboard/DashboardOverview";
import DashboardSidebarWidgets from "@/app/components/dashboardComponents/PatientDashboard/DashboardSidebarWidgets";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


export default async function PatientDashboard() {
    const session = await auth.api.getSession({
             headers: await headers(),
           });
         
           const user = session?.user;

  return (
    <div className="space-y-6">
      <DashboardHeader user ={user} />

      <div className="grid xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <DashboardOverview />
        </div>

        <div>
          <DashboardSidebarWidgets />
        </div>
      </div>
    </div>
  );
}
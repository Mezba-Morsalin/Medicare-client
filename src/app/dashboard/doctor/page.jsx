
import DashboardHero from "@/app/components/dashboardComponents/DoctorDashBoard/DashboardHero";
import DashboardStats from "@/app/components/dashboardComponents/DoctorDashBoard/DashboardStats";
import DashboardChart from "@/app/components/dashboardComponents/DoctorDashBoard/DashboardChart";
import DashboardFeedback from "@/app/components/dashboardComponents/DoctorDashBoard/DashboardFeedback";
import RecentPrescriptions from "@/app/components/dashboardComponents/DoctorDashBoard/RecentPresciptions";

export default function DoctorDashboard() {
  return (
    <div className="space-y-6">
      <DashboardHero />

      <DashboardStats />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <DashboardChart />
        <DashboardFeedback />
      </div>

      <RecentPrescriptions />
    </div>
  );
}
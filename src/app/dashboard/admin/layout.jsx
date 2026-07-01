import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
    title : "MediCare Connect - Admin Dashboard",
    description : "dashboard"
}
const getSessionUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user;
};

const requireRole = async (role) => {
  const user = await getSessionUser();

  if (!user) {
    redirect("/signin");
  }

  if (user?.role !== role) {
    redirect("/unauthorized");
  }

  return user;
};

const AdminLayout = async ({ children }) => {
  await requireRole("admin");

  return <>{children}</>;
};

export default AdminLayout;
import { getMe } from "@/service/getMe";
import DashboardSidebar from "./_components/dashboard/DashboardSidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getMe();

  const role = user?.data?.role;

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardSidebar role={role} />

      <main className="min-h-screen lg:pl-72">{children}</main>
    </div>
  );
}

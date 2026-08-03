// import AdminDashboardStats from "../../_components/admin/AdminDashboardStats";
// import { getAdminDashboardData } from "../../_actions/admin-actions/adminDashboard";

// export default async function AdminDashboardPage() {
//   const result = await getAdminDashboardData();

//   const data = result.data;

//   const totalUsers = data?.totalUsers ?? 0;
//   const totalLandlords = data?.totalLandlords ?? 0;
//   const totalTenants = data?.totalTenants ?? 0;

//   const totalProperties = data?.totalProperties ?? 0;
//   const availableProperties = data?.availableProperties ?? 0;
//   const unavailableProperties = data?.unavailableProperties ?? 0;

//   const totalRequests = data?.totalRequests ?? 0;
//   const pendingRequests = data?.pendingRequests ?? 0;
//   const activeRentals = data?.activeRentals ?? 0;
//   const completedRentals = data?.completedRentals ?? 0;

//   const totalPayments = data?.totalPayments ?? 0;
//   const totalRevenue = data?.totalRevenue ?? 0;

//   return (
//     <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//       <div className="mb-8">
//         <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
//           Admin Dashboard
//         </h1>

//         <p className="mt-2 text-sm text-muted-foreground">
//           Overview of users, properties, rental activity, and payments.
//         </p>
//       </div>

//       <AdminDashboardStats
//         totalUsers={totalUsers}
//         totalLandlords={totalLandlords}
//         totalTenants={totalTenants}
//         totalProperties={totalProperties}
//         availableProperties={availableProperties}
//         unavailableProperties={unavailableProperties}
//         totalRequests={totalRequests}
//         pendingRequests={pendingRequests}
//         activeRentals={activeRentals}
//         completedRentals={completedRentals}
//         totalPayments={totalPayments}
//         totalRevenue={totalRevenue}
//       />
//     </div>
//   );
// }

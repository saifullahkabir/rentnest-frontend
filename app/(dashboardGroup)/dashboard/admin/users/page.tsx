import Image from "next/image";

import { AdminUser } from "@/lib/types/admin-user";
import { getAllAdminUsers } from "@/app/(dashboardGroup)/_actions/admin-actions/adminDashboard";
import UserStatusSelect from "@/app/(dashboardGroup)/_components/admin/UserStatusSelect";

export default async function AdminUsersPage() {
  const result = await getAllAdminUsers();

  const users: AdminUser[] = result.data ?? [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          All Users
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Manage all users registered on RentNest.
        </p>
      </div>

      <div className="rounded-2xl border bg-card shadow-sm">
        <div className="border-b px-5 py-4">
          <p className="text-sm font-medium">Total Users: {users.length}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/40">
                <th className="px-5 py-3 text-left font-medium">User</th>

                <th className="px-5 py-3 text-left font-medium">Email</th>

                <th className="px-5 py-3 text-left font-medium">Role</th>

                <th className="px-5 py-3 text-left font-medium">Status</th>

                <th className="px-5 py-3 text-left font-medium">Joined</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b last:border-0">
                  {/* User */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {user.profileImage ? (
                        <Image
                          src={user.profileImage}
                          alt={user.name}
                          width={20}
                          height={20}
                          unoptimized
                          className="h-9 w-9 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                      )}

                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="px-5 py-4 text-muted-foreground">
                    {user.email}
                  </td>

                  {/* Role */}
                  <td className="px-5 py-4">
                    <span className="rounded-lg bg-muted px-2.5 py-1 text-xs font-medium">
                      {user.role}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <UserStatusSelect
                      userId={user.id}
                      initialStatus={user.status}
                    />
                  </td>

                  {/* Joined */}
                  <td className="px-5 py-4 text-muted-foreground">
                    {new Date(user.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-12 text-center text-muted-foreground"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

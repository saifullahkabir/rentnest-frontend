"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { updateAdminUserStatus } from "@/app/(dashboardGroup)/_actions/admin-actions/adminDashboard";

type UserStatus = "ACTIVE" | "BLOCKED";

type UserStatusSelectProps = {
  userId: string;
  initialStatus: UserStatus;
};

export default function UserStatusSelect({
  userId,
  initialStatus,
}: UserStatusSelectProps) {
  const [status, setStatus] = useState<UserStatus>(initialStatus);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (value: UserStatus) => {
    if (value === status) return;

    const previousStatus = status;

    setStatus(value);
    setIsUpdating(true);

    try {
      const result = await updateAdminUserStatus(userId, value);

      if (!result.success) {
        setStatus(previousStatus);

        toast.error(result.message || "Failed to update user status.");

        return;
      }

      toast.success(
        `User status changed to ${value === "ACTIVE" ? "Active" : "Blocked"}.`,
      );
    } catch {
      setStatus(previousStatus);

      toast.error("Something went wrong while updating status.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Select
      value={status}
      onValueChange={handleStatusChange}
      disabled={isUpdating}
    >
      <SelectTrigger
        className={`w-32 ${
          status === "ACTIVE"
            ? "border-green-200 text-green-700 dark:border-green-900/50 dark:text-green-400"
            : "border-red-200 text-red-700 dark:border-red-900/50 dark:text-red-400"
        }`}
      >
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="ACTIVE">ACTIVE</SelectItem>

        <SelectItem value="BLOCKED">BLOCKED</SelectItem>
      </SelectContent>
    </Select>
  );
}

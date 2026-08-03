export type AdminUser = {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  role: "ADMIN" | "LANDLORD" | "TENANT";
  status: "ACTIVE" | "BLOCKED";
  createdAt: string;
};
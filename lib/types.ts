export type User = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    role: "TENANT" | "LANDLORD" | "ADMIN";
    status: "ACTIVE" | "BLOCKED";
    phone: string | null;
    profileImage: string | null;
    createdAt: string;
    updatedAt: string;
  };
};

export type UserProps = {
  user: User | null;
};

export type AdminRentalRequest = {
  id: string;
  tenantId: string;
  propertyId: string;

  status: "PENDING" | "APPROVED" | "REJECTED" | "ACTIVE" | "COMPLETED";

  moveInDate: string | null;
  message: string | null;

  createdAt: string;
  updatedAt: string;

  tenant: {
    id: string;
    name: string;
    email: string;
    profileImage: string | null;
  };

  property: {
    id: string;
    title: string;
    rentAmount: number;
    location: string;

    landlord: {
      id: string;
      name: string;
      email: string;
    };
  };
};

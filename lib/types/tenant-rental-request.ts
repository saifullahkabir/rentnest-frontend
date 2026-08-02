export type TenantRentalRequestStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "ACTIVE"
  | "COMPLETED";

export type TenantRentalRequest = {
  id: string;
  tenantId: string;
  propertyId: string;
  status: TenantRentalRequestStatus;
  moveInDate: string | null;
  message: string | null;
  createdAt: string;
  updatedAt: string;

  property: {
    id: string;
    title: string;
    description: string;
    rentAmount: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    image: string;
    availability: string;
    landlordId: string;

    category: {
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };

    landlord: {
      id: string;
      name: string;
      email: string;
      profileImage: string | null;
    };
  };
};

export type TenantRentalRequestResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TenantRentalRequest[];
};

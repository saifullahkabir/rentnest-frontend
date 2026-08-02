export type LandlordRentalRequestStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "ACTIVE"
  | "COMPLETED";

export type LandlordRentalRequest = {
  id: string;
  tenantId: string;
  propertyId: string;
  status: LandlordRentalRequestStatus;
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
  };

  tenant: {
    id: string;
    name: string;
    email: string;
    profileImage: string | null;
  };
};

export type LandlordRentalRequestResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: LandlordRentalRequest[];
};
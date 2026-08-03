export type LandlordPayment = {
  id: string;
  rentalRequestId: string;
  tenantId: string;

  transactionId: string;
  stripeSessionId: string;

  amount: number;
  provider: "STRIPE";
  status: "COMPLETED" | "PENDING" | "FAILED";

  paidAt: string | null;
  createdAt: string;
  updatedAt: string;

  tenant: {
    id: string;
    name: string;
    email: string;
    profileImage: string | null;
  };

  rentalRequest: {
    id: string;
    tenantId: string;
    propertyId: string;
    status: string;
    moveInDate: string | null;
    message: string | null;

    property: {
      id: string;
      title: string;
      description: string;
      rentAmount: number;
      location: string;
      bedrooms: number;
      bathrooms: number;
      image: string;
      availability: "AVAILABLE" | "UNAVAILABLE";
      landlordId: string;
      categoryId: string;

      createdAt: string;
      updatedAt: string;

      category: {
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type LandlordPaymentsResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: LandlordPayment[];
};

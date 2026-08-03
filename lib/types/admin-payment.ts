export type AdminPayment = {
  id: string;
  rentalRequestId: string;
  tenantId: string;
  transactionId: string;
  stripeSessionId: string;
  amount: number;
  provider: "STRIPE";
  status: "PENDING" | "COMPLETED" | "FAILED";
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
    status: "PENDING" | "APPROVED" | "REJECTED" | "ACTIVE" | "COMPLETED";
    moveInDate: string | null;
    message: string | null;
    createdAt: string;
    updatedAt: string;

    property: {
      id: string;
      title: string;
      rentAmount: number;

      landlord: {
        id: string;
        name: string;
        email: string;
      };
    };
  };
};

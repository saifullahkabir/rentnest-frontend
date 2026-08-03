export type TenantPaymentStatus =
  | "PENDING"
  | "COMPLETED"
  | "FAILED"

export type TenantRentalRequestStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "ACTIVE"
  | "COMPLETED";

export interface TenantPayment {
  id: string;
  rentalRequestId: string;
  tenantId: string;
  transactionId: string | null;
  stripeSessionId: string | null;
  amount: number;
  provider: "STRIPE";
  status: TenantPaymentStatus;
  paidAt: string | null;
  createdAt: string;
  updatedAt: string;

  rentalRequest: {
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
      availability: "AVAILABLE" | "UNAVAILABLE";
      landlordId: string;
      categoryId: string;

      category: {
        id: string;
        name: string;
      };
    };
  };
}

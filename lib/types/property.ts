export type Property = {
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

  landlord: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    profileImage: string | null;
  };
};

export type PropertyResponse = {
  success: boolean;
  statusCode: number;
  message: string;

  data: Property[];
};

export interface IPropertyQuery {
  searchTerm?: string;
  location?: string;
  categoryId?: string;
  availability?: string;
  minPrice?: string;
  maxPrice?: string;
  sortBy?: string;
  sortOrder?: string;
  page?: string;
  limit?: string;
}

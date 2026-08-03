export type LandlordProperty = {
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
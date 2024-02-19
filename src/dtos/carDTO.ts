type Accessories = {
  type: string;
  name: string;
};

type Rent = {
  period: string;
  price: number;
};

export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: Rent;
  fuel_type?: string;
  thumbnail: string;
  accessories?: Accessories[];
  photos: string[];
}

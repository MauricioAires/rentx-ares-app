import { AccessoryIconTypes } from "../utils/mappers/accessory-icon";

type Accessories = {
  type: AccessoryIconTypes;
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
  fuel_type: AccessoryIconTypes;
  thumbnail: string;
  accessories: Accessories[];
  photos: string[];
}

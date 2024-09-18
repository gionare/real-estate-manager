// src/services/types.ts
export interface Agent {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  phoneNumber: number;
}

export interface RealEstate {
  id: number;
  address: string;
  zip_code: string;
  price: number;
  area: number;
  bedrooms: number;
  is_rental: number;
  image: string;
  city_id: number;
  city: City; // Nested city information
}

export interface City {
  id: number;
  name: string;
  region_id: number;
  region: Region; // Nested region information
}
export interface Region {
  id: number;
  name: string;
}

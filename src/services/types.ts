// src/services/types.ts
export interface Agent {
  id: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
  avatar: string;
}

export interface RealEstate {
  price: number;
  zip_code: string;
  area: number;
  city_id: number;
  address: string;
  agent_id: number;
  bedrooms: number;
  is_rental: number;
  description: string;
  image: File; // Define image as a File type
  created_at: string;
  id: number;

  location: string;
  city: City; // Nested city information
  agent: Agent;
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

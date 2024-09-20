const REAL_ESTATE_API_URL = "https://api.real-estate-manager.redberryinternship.ge/api/real-estates";
const DEFAULT_AUTH_TOKEN = "9d011621-10af-4128-ba0d-27fb1331419e";

interface RealEstateData {
  address: string;
  image: File | null; // Allow image to be null
  region_id: number;
  description: string;
  city_id: number;
  zip_code: string;
  price: number;
  area: number;
  bedrooms: number;
  is_rental: number; // Use 0 for sale, 1 for rent
  agent_id: number;
}

export const addRealEstate = async (realEstateData: RealEstateData, token: string = DEFAULT_AUTH_TOKEN) => {
  try {
    const formData = new FormData();

    // Append all fields to FormData
    formData.append("address", realEstateData.address);

    // Append the image only if it's not null
    if (realEstateData.image) {
      formData.append("image", realEstateData.image);
    }

    formData.append("region_id", realEstateData.region_id.toString());
    formData.append("description", realEstateData.description);
    formData.append("city_id", realEstateData.city_id.toString());
    formData.append("zip_code", realEstateData.zip_code);
    formData.append("price", realEstateData.price.toString());
    formData.append("area", realEstateData.area.toString());
    formData.append("bedrooms", realEstateData.bedrooms.toString());
    formData.append("is_rental", realEstateData.is_rental.toString());
    formData.append("agent_id", realEstateData.agent_id.toString());

    const response = await fetch(REAL_ESTATE_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        // Do not set Content-Type for FormData
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error ${response.status}: ${errorData.message || "Failed to add real estate"}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding real estate:", error);
    throw error;
  }
};

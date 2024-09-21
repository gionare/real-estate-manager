import React, { useEffect, useState } from "react";
import { getCities } from "../../services/api";
import { City } from "../../services/types";

interface CitySelectProps {
  onCityChange: (cityId: number) => void; // Callback function to update city_id in parent
}

const CitySelect: React.FC<CitySelectProps> = ({ onCityChange }) => {
  const [cities, setCities] = useState<City[]>([]);

  // Fetch cities when component mounts
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = await getCities();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCityChange(parseInt(e.target.value)); // Update the parent form with the selected city ID
  };

  return (
    <div>
      <label className="block mb-1">ქალაქი</label>
      <select onChange={handleCityChange} className="w-full p-2 border border-gray-300 rounded">
        <option value="" disabled selected hidden className="text-gray-500">
          აირჩიეთ ქალაქი
        </option>
        {cities.map((city) => (
          <option key={city.id} value={city.id} className="text-black">
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelect;

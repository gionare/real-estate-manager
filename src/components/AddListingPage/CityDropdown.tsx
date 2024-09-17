import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getCities } from "../../services/api";
import { City } from "../../services/types";

const CitySelect: React.FC = () => {
  const { register } = useForm();
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

  return (
    <div>
      <label className="block mb-1">ქალაქი</label>
      <select {...register("city")} className="w-full p-2 border border-gray-300 rounded">
        {/* <option value="" disabled selected hidden className="text-gray-500">
          აირჩიეთ ქალაქი
        </option> */}
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

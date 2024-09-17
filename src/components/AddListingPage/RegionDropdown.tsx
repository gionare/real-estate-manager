import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getRegions } from "../../services/api";
import { Region } from "../../services/types";

const RegionSelect: React.FC = () => {
  const { register } = useForm();
  const [regions, setRegions] = useState<Region[]>([]);

  // Fetch regions when component mounts
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const data = await getRegions();
        setRegions(data);
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };

    fetchRegions();
  }, []);

  return (
    <div>
      <label className="block mb-1">რეგიონი</label>
      <select {...register("region")} className="w-full p-2 border border-gray-300 rounded">
        {/* <option value="" disabled selected hidden className="text-gray-500">
          აირჩიეთ რეგიონი
        </option> */}
        {regions.map((region) => (
          <option key={region.id} value={region.id} className="text-black">
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionSelect;

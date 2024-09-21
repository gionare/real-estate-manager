import React, { useEffect, useState } from "react";
import { getRegions } from "../../services/api";
import { Region } from "../../services/types";

interface RegionSelectProps {
  onRegionChange: (regionId: number) => void; // Callback function to update region_id in parent
}

const RegionSelect: React.FC<RegionSelectProps> = ({ onRegionChange }) => {
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onRegionChange(parseInt(e.target.value)); // Update the parent form with the selected region ID
  };

  return (
    <div>
      <label className="block mb-1">რეგიონი</label>
      <select onChange={handleSelectChange} className="w-full p-2 border border-gray-300 rounded">
        <option value="" disabled selected hidden className="text-gray-500">
          აირჩიეთ რეგიონი
        </option>
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

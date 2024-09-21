import React, { useState } from "react";

interface BedroomsCategoryProps {
  onSelect: (value: number | "") => void;
  onClose: () => void; // Add a new prop for closing the popup
}

const BedroomsCategory: React.FC<BedroomsCategoryProps> = ({ onSelect, onClose }) => {
  const [bedrooms, setBedrooms] = useState<number | "">("");

  const handleBedroomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBedrooms(value ? Number(value) : "");
  };

  const handleSelectClick = () => {
    onSelect(bedrooms);
    onClose(); // Close the popup after selection
  };

  return (
    <div className="bedrooms-category w-[282px] p-4 bg-white rounded shadow-lg">
      <h3 className="font-medium text-lg">საძინებლების რაოდენობა</h3>
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex flex-col">
          <input type="number" value={bedrooms} placeholder="0" onChange={handleBedroomChange} className="border border-gray-300 rounded p-2 w-14 mb-4 mt-2" />
        </div>
        <button onClick={handleSelectClick} className="bg-red-500 text-white p-2 rounded w-[77px] self-end">
          არჩევა
        </button>
      </div>
    </div>
  );
};

export default BedroomsCategory;

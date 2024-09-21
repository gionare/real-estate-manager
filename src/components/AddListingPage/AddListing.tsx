import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRealEstate } from "../../services/PostRealEstate";
import AgentSelector from "./AgentSelector";
import RegionSelect from "./RegionDropdown";
import CitySelect from "./CityDropdown";

const AddRealEstateForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: "",
    image: null as File | null,
    region_id: 0,
    description: "",
    city_id: 0,
    zip_code: "",
    price: 0,
    area: 0,
    bedrooms: 0,
    is_rental: 0, // 0 for sale, 1 for rent
    agent_id: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // For radio buttons, we need to parse the value as an integer
    if (name === "is_rental") {
      setFormData((prev) => ({ ...prev, [name]: parseInt(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, image: null }));
    }
  };

  const handleAgentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, agent_id: parseInt(e.target.value) }));
  };

  const handleRegionChange = (regionId: number) => {
    setFormData((prev) => ({ ...prev, region_id: regionId }));
  };

  const handleCityChange = (cityId: number) => {
    setFormData((prev) => ({ ...prev, city_id: cityId }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const responseData = await addRealEstate(formData);
      alert("Real estate added successfully!");
      console.log("Response data:", responseData);
      navigate("/"); // Navigate to homepage after successful submission
    } catch (error) {
      alert("Error adding real estate. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl mx-auto p-4 mb-28">
      <h1 className="text-[32px] font-medium leading-normal text-[#021526] text-center mb-8">ლისტინგის დამატება</h1>

      <div>
        <h2 className="text-xl font-semibold mb-4" style={{ fontFeatureSettings: '"case"', textTransform: "capitalize" }}>
          გარიგების ტიპი
        </h2>
        <div className="flex items-center">
          <label className="flex items-center mr-4">
            <input className="mr-2" type="radio" name="is_rental" value={0} checked={formData.is_rental === 0} onChange={handleChange} required />
            <span>იყიდება</span>
          </label>

          <label className="flex items-center ml-16">
            <input className="mr-2" type="radio" name="is_rental" value={1} checked={formData.is_rental === 1} onChange={handleChange} required />
            <span>ქირავდება</span>
          </label>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">მდებარეობა</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="address" className="block mb-1">
              მისამართი *
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <span className="font-fira text-sm tracking-tight">✔️ მინიმუმ ორი სიმბოლო</span>
          </div>

          <div>
            <label className="block mb-1">საფოსტო ინდექსი *</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="zip_code"
              id="zip_code"
              value={formData.zip_code}
              onChange={handleChange}
              required
            />
            <span className="font-fira text-sm tracking-tight">✔️ მხოლოდ რიცხვები</span>
          </div>

          <RegionSelect onRegionChange={handleRegionChange} />
          <CitySelect onCityChange={handleCityChange} />
        </div>
      </div>

      <div className="pt-8">
        <h2 className="text-xl font-semibold mb-4">ბინის დეტალები</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">ფასი *</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <span className="font-fira text-sm tracking-tight">✔️ მხოლოდ რიცხვები</span>
          </div>

          <div>
            <label className="block mb-1">ფართობი *</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="number"
              name="area"
              id="area"
              value={formData.area}
              onChange={handleChange}
              required
            />
            <span className="font-fira text-sm tracking-tight">✔️ მხოლოდ რიცხვები</span>
          </div>

          <div>
            <label htmlFor="bedrooms" className="block mb-1">
              საძინებლების რაოდენობა *
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="number"
              name="bedrooms"
              id="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              required
            />
            <span className="font-fira text-sm tracking-tight">✔️ მხოლოდ რიცხვები</span>
          </div>
        </div>
      </div>

      <div>
        <label className="block">აღწერა *</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          rows={4}
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <span className="font-fira text-sm tracking-tight">✔️ მინიმუმ ხუთი სიტყვა</span>
      </div>

      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" name="image" id="image" onChange={handleFileChange} accept="image/*" required />
      </div>

      <AgentSelector selectedAgentId={formData.agent_id} onAgentChange={handleAgentChange} />

      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="w-[103px] h-[47px] flex items-center justify-center rounded-[10px] border border-[#f93b1d] text-[#f93b1d] bg-white hover:bg-[#f93b1d] hover:text-white hover:border-[#f93b1d] transition-all duration-300"
        >
          გაუქმება
        </button>

        <button
          type="submit"
          className="w-[187px] h-[47px] flex items-center justify-center rounded-[10px] bg-[#f93b1d] text-white hover:bg-[#e12d14] transition-all duration-200"
        >
          დაამატე ლისტინგი
        </button>
      </div>
    </form>
  );
};

export default AddRealEstateForm;

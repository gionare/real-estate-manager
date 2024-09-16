// src/components/AddListingForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Agent } from "../../services/types"; // Adjust based on your project structure

// Validation Schema
const schema = yup.object({
  //   is_rental: yup.number().required("Please check"),
  zip_code: yup.string().matches(/^\d+$/, "Only numbers allowed").required("Postal code is required"),
  address: yup.string().min(2, "Address must be at least 2 characters").required("Address is required"),
  region: yup.string(),
  city: yup.string(),
  price: yup.number().typeError("Only numbers allowed").required("Price is required"),
  area: yup.number().typeError("Only numbers allowed").required("Area is required"),
  bedrooms: yup.number().typeError("Only numbers allowed").required("Number of bedrooms is required"),
  description: yup.string().min(5, "Description must be at least 5 words").required("Description is required"),
  //   image: yup.mixed().required("image is required"),
  agent_id: yup.string().required("Agent selection is required"),
});

interface FormData {
  //   is_rental: number;
  zip_code: string;
  address: string;
  region?: string;
  city?: string;
  price: number;
  area: number;
  bedrooms: number;
  description: string;
  //   image: FileList;
  agent_id: string;
}

interface AddListingFormProps {
  agents: Agent[]; // Pass agents data from parent component
}

const AddListingForm: React.FC<AddListingFormProps> = ({ agents }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    // formData.append("is_rental", data.is_rental.toString());
    formData.append("zip_code", data.zip_code);
    formData.append("address", data.address);
    formData.append("region_id", data.region || "");
    formData.append("city_id", data.city || "");
    formData.append("price", data.price.toString());
    formData.append("area", data.area.toString());
    formData.append("bedrooms", data.bedrooms.toString());
    formData.append("description", data.description);
    formData.append("agent_id", data.agent_id);
    // formData.append("image", data.image[0]);

    try {
      const response = await fetch("https://api.real-estate-manager.redberryinternship.ge/api/real-estates", {
        method: "POST",
        headers: {
          Authorization: "Bearer AUTH_TOKEN", // Replace YOUR_TOKEN with actual token
        },
        body: formData,
      });
      if (!response.ok) throw new Error("Network response was not ok");
      // Handle success (e.g., show a message or redirect)
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">ლისტინგის დამატება</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Deal Type */}
        {/* <div>
          <h2 className="text-xl font-semibold mb-4">გარიგების ტიპი</h2>
          <div className="flex space-x-4">
            <label>
              <input type="radio" value="1" {...register("is_rental")} />
              <span>იყიდება</span>
            </label>
            <label>
              <input type="radio" value="0" {...register("is_rental")} />
              <span>ქირავდება</span>
            </label>
          </div>
          {errors.is_rental && <p className="text-red-500">{errors.is_rental.message}</p>}
        </div> */}

        {/* Location */}
        <div>
          <h2 className="text-xl font-semibold mb-4">მდებარეობა</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1">საფოსტო ინდექსი *</label>
              <input type="text" {...register("zip_code")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.zip_code && <p className="text-red-500">{errors.zip_code.message}</p>}
            </div>
            <div>
              <label className="block mb-1">მისამართი *</label>
              <input type="text" {...register("address")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.address && <p className="text-red-500">{errors.address.message}</p>}
            </div>
            <div>
              <label className="block mb-1">რეგიონი</label>
              <input type="text" {...register("region")} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block mb-1">ქალაქი</label>
              <input type="text" {...register("city")} className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">ბინის დეტალები</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1">ფასი *</label>
              <input type="text" {...register("price")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.price && <p className="text-red-500">{errors.price.message}</p>}
            </div>
            <div>
              <label className="block mb-1">ფართობი *</label>
              <input type="text" {...register("area")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.area && <p className="text-red-500">{errors.area.message}</p>}
            </div>
            <div>
              <label className="block mb-1">საძინებლების რაოდენობა *</label>
              <input type="text" {...register("bedrooms")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.bedrooms && <p className="text-red-500">{errors.bedrooms.message}</p>}
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1">აღწერა *</label>
          <textarea {...register("description")} className="w-full p-2 border border-gray-300 rounded" rows={4} />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>

        {/* Photo Upload */}
        {/* <div>
          <span className="block mb-1">ატვირთეთ ფოტო</span>
          <input type="file" {...register("image")} className="w-full border border-gray-300 rounded" />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div> */}

        {/* Agent */}
        <div>
          <h2 className="text-xl font-semibold mb-4">აგენტი</h2>
          <div>
            <label className="block mb-1">აირჩიე</label>
            <select {...register("agent_id")} className="w-full p-2 border border-gray-300 rounded">
              <option value="">Select an agent</option>
              {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {agent.name} {agent.surname}
                </option>
              ))}
            </select>
            {errors.agent_id && <p className="text-red-500">{errors.agent_id.message}</p>}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button type="button" className="bg-white border border-gray-300 p-2 rounded">
            გაუქმება
          </button>
          <button type="submit" className="bg-orange-500 text-white p-2 rounded">
            დაამატე ლისტინგი
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListingForm;

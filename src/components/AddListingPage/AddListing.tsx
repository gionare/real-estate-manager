// src/components/AddListingForm.tsx
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { Agent } from "../../services/types";
import RegionDropdown from "./RegionDropdown";
import CityDropdown from "./CityDropdown";
import AgentSelector from "./AgentSelector";

// Validation Schema
const schema = yup.object({
  price: yup.number().typeError("მხოლოდ რიცხვები").required("Price is required"),
  zip_code: yup.string().matches(/^\d+$/, "მხოლოდ რიცხვები").required("საფოსტო ინდექსი სავალდებულოა"),
  description: yup.string().min(5, "მინიმუმ ხუთი სიტყვა").required("Description is required"),
  area: yup.number().typeError("მხოლოდ რიცხვები").required("Area is required"),
  region: yup.string().required("რეგიონი სავალდებულოა"),
  city: yup.string().required("ქალაქი სავალდებულოა"),
  address: yup.string().min(2, "მინიმუმ ორი სიმბოლო").required("Address is required"),
  agent_id: yup.number().required("აირჩიე აგენტი"),
  bedrooms: yup.number().typeError("მხოლოდ რიცხვები").integer("საძინებლების რაოდენობა უნდა იყოს მთელი რიცხვი").required("Number of bedrooms is required"),
  is_rental: yup.number().required("აირჩიეთ გარიგების ტიპი"),
  image: yup
    .mixed<File>()
    .required("ატვირთეთ ფოტო")
    .test("fileType", "აირჩიეთ სურათის სწორი ტიპი (.jpg, .png)", (value) => {
      return value && ["image/jpeg", "image/png"].includes(value.type);
    })
    .test("fileType", "აირჩიეთ სურათის სწორი ტიპი (.jpg, .png)", (value) => {
      console.log(value); // Check the file type in the console
      return value && ["image/jpeg", "image/png"].includes(value.type);
    })
    .test("fileSize", "✔️ არ უნდა აღებმატებოდეს 1MB-ის ზომაში", (value) => {
      return value && value.size <= 1024 * 1024;
    }),
});

interface FormData {
  price: number;
  zip_code: string;
  description: string;
  area: number;
  city: string;
  address: string;
  agent_id: number;
  bedrooms: number;
  is_rental: number;
  image: File;
  region: string;
}

// interface FormData {
//   price: number,
//   zip_code: string;
//   description: string;
//   area: number;
//   city_id: number;
//   address: string;
//   agent_id: string;
//   bedrooms: number;
//   is_rental: number;
//   image: File;

//   region?: string;
//   city?: string;
// }

// {
//   "city_id": "1",
//   "agent_id": "1",
//   "created_at": "2024-08-07T10:46:53.000000Z",
//   "id": 1
// }

const AddListingForm: React.FC = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("is_rental", data.is_rental.toString());
    formData.append("zip_code", data.zip_code);
    formData.append("address", data.address);
    formData.append("region_id", data.region);
    formData.append("city_id", data.city);
    formData.append("price", data.price.toString());
    formData.append("area", data.area.toString());
    formData.append("bedrooms", data.bedrooms.toString());
    formData.append("description", data.description);
    formData.append("agent_id", data.agent_id.toString());
    formData.append("image", data.image);

    const AUTH_TOKEN = "9d011621-10af-4128-ba0d-27fb1331419e";

    try {
      const response = await fetch("https://api.real-estate-manager.redberryinternship.ge/api/real-estates", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        body: formData,
      });
      if (!response.ok) throw new Error("Network response was not ok");
      alert("Form submitted successfully!");
    } catch (error) {
      // Handle error
      alert("Error submitting the form. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mb-28">
      <h1 className="text-[32px] font-medium leading-normal text-[#021526] text-center mb-8">ლისტინგის დამატება</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/*  */}

        {/* Deal Type - Radio button */}
        <div>
          <h2 className="text-xl font-semibold mb-4">გარიგების ტიპი</h2>
          <div className="flex items-center">
            <label className="flex items-center mr-4">
              <input
                type="radio"
                value="0" // For sale
                {...methods.register("is_rental")}
                className="mr-2"
              />
              <span>იყიდება</span>
            </label>
            <label className="flex items-center ml-16">
              <input
                type="radio"
                value="1" // For rental
                {...methods.register("is_rental")}
                className="mr-2"
              />
              <span>ქირავდება</span>
            </label>
          </div>
          {errors.is_rental && <p className="text-red-500">{errors.is_rental.message}</p>}
        </div>

        {/* Location */}
        <div>
          <h2 className="text-xl font-semibold mb-4">მდებარეობა</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">მისამართი *</label>
              <input type="text" {...methods.register("address")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.address && <p className="text-red-500">{errors.address.message}</p>}
              <span className="font-fira text-sm  tracking-tight">✔️ მინიმუმ ორი სიმბოლო</span>
            </div>
            <div>
              <label className="block mb-1">საფოსტო ინდექსი *</label>
              <input type="text" {...methods.register("zip_code")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.zip_code && <p className="text-red-500">{errors.zip_code.message}</p>}
              <span className="font-fira text-sm tracking-tight">✔️ მხოლოდ რიცხვები</span>
            </div>
            <div>
              <RegionDropdown />
            </div>
            <div>
              <CityDropdown />
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className=" pt-8">
          <h2 className="text-xl font-semibold mb-4">ბინის დეტალები</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">ფასი *</label>
              <input type="text" {...methods.register("price")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.price && <p className="text-red-500">{errors.price.message}</p>}
              <span className="font-fira text-sm tracking-tight">✔️ მხოლოდ რიცხვები</span>
            </div>
            <div>
              <label className="block mb-1">ფართობი *</label>
              <input type="text" {...methods.register("area")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.area && <p className="text-red-500">{errors.area.message}</p>}
              <span className="font-fira text-sm tracking-tight">✔️ მხოლოდ რიცხვები</span>
            </div>
            <div>
              <label className="block mb-1">საძინებლების რაოდენობა *</label>
              <input type="text" {...methods.register("bedrooms")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.bedrooms && <p className="text-red-500">{errors.bedrooms.message}</p>}
              <span className="font-fira text-sm tracking-tight">✔️ მხოლოდ რიცხვები</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block">აღწერა *</label>
          <textarea {...methods.register("description")} className="w-full p-2 border border-gray-300 rounded" rows={4} />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          <span className="font-fira text-sm tracking-tight">✔️ მინიმუმ ხუთი სიტყვა</span>
        </div>

        {/* Photo Upload */}
        <div>
          <span className="block mb-1">ატვირთეთ ფოტო</span>
          <input type="file" {...methods.register("image")} accept="image/jpeg,image/png" className="w-full border border-gray-300 rounded" />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>

        {/* Agent */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="">
            {/* Other form fields */}

            {/* Include the AgentSelector component */}
            <AgentSelector />
          </form>
        </FormProvider>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="w-[103px] h-[47px] flex items-center justify-center rounded-[10px] border border-[#f93b1d] text-[#f93b1d] bg-white hover:bg-[#f93b1d] hover:text-white hover:border-[#f93b1d] transition-all duration-300"
          >
            გაუქმება
          </button>
          <button
            type="submit"
            className="w-[187px] h-[47px] flex items-center justify-center  rounded-[10px] bg-[#f93b1d] text-white hover:bg-[#e12d14] transition-all duration-200"
          >
            დაამატე ლისტინგი
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListingForm;

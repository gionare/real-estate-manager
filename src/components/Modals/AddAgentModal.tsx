import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Validation Schema
const schema = yup.object({
  firstName: yup.string().min(2, "მინიმუმ ორი სიმბოლო").required("სახელი აუცილებელია"),
  lastName: yup.string().min(2, "მინიმუმ ორი სიმბოლო").required("გვარი აუცილებელია"),
  email: yup
    .string()
    .email("არასწორი ელ-ფოსტა")
    .matches(/@redberry\.ge$/, "გამოიყენეთ @redberry.ge ფოსტა")
    .required("ელ–ფოსტა აუცილებელია"),
  phoneNumber: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, "მიუთითეთ სწორი ტელეფონის ნომერი")
    .required("ტელეფონის ნომერი აუცილებელია"),
  image: yup
    .mixed<File>()
    .required("ატვირთეთ ფოტო")
    .test("fileSize", "✔️ არ უნდა აღებმატებოდეს 1MB-ის ზომაში", (value) => {
      return value && value.size <= 1024 * 1024;
    }), // Correct type for file input
});

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  image: File;
};

interface AddAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAgent: (formData: FormData) => void;
}

const AddAgentModal: React.FC<AddAgentModalProps> = ({ isOpen, onClose, onAddAgent }) => {
  // Always call hooks unconditionally
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // Early return to handle conditional rendering
  if (!isOpen) return null;

  const onSubmit = (data: FormData) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    if (data.image) {
      formData.append("image", data.image);
    }
    onAddAgent(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded shadow-lg w-[1009px] h-[784px] z-50 p-[105px]" onClick={(e) => e.stopPropagation()}>
        <h1 className="text-center text-[32px] mb-6" style={{ fontFamily: "FiraGO", fontWeight: 500 }}>
          აგენტის დამატება
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 gap-[28px]">
          <div className="flex space-x-4 gap-[31px]">
            <div className="flex-1">
              <label className="block mb-1">სახელი *</label>
              <input type="text" {...register("firstName")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
              <span className="font-sans text-sm font-normal text-[#021526]" style={{ fontFamily: "FiraGO" }}>
                ✔️ მინიმუმ ორი სიმბოლო
              </span>
            </div>
            <div className="flex-1">
              <label className="block mb-1">გვარი</label>
              <input type="text" {...register("lastName")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
              <span className="font-sans text-sm font-normal text-[#021526]" style={{ fontFamily: "FiraGO" }}>
                ✔️ მინიმუმ ორი სიმბოლო
              </span>
            </div>
          </div>
          <div className="flex space-x-4 gap-[31px]">
            <div className="flex-1">
              <label className="block mb-1">ელ–ფოსტა *</label>
              <input type="email" {...register("email")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              <span className="font-sans text-sm font-normal text-[#021526]" style={{ fontFamily: "FiraGO" }}>
                ✔️ გამოიყენეთ @redberry.ge ფოსტა
              </span>
            </div>
            <div className="flex-1">
              <label className="block mb-1">ტელეფონის ნომერი</label>
              <input type="tel" {...register("phoneNumber")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
              <span className="font-sans text-sm font-normal text-[#021526]" style={{ fontFamily: "FiraGO" }}>
                ✔️ მხოლოდ რიცხვები
              </span>
            </div>
          </div>
          <div>
            <label className="block mb-1">ატვირთეთ ფოტო *</label>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <input
                  type="file"
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      field.onChange(e.target.files[0]); // Pass the selected file to the onChange handler
                    } else {
                      field.onChange(null); // If no file is selected, pass null
                    }
                  }}
                  onBlur={field.onBlur}
                />
              )}
            />

            {errors.image && <p className="text-red-500">{errors.image.message}</p>}
          </div>
          <div className="flex justify-end mt-24 space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="w-[103px] h-[47px] flex items-center justify-center rounded-[10px] border border-[#f93b1d] text-[#f93b1d] bg-white hover:bg-[#f93b1d] hover:text-white hover:border-[#f93b1d] transition-all duration-300"
            >
              გაუქმება
            </button>
            <button
              type="submit"
              className="w-[161px] h-[47px] flex items-center justify-center rounded-[10px] bg-[#f93b1d] text-white hover:bg-[#e12d14] transition-all duration-200"
            >
              დაამატე აგენტი
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAgentModal;

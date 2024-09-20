import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addAgent } from "../../services/agentService";

// Validation validationSchema
const validationSchema = yup.object({
  name: yup.string().min(2, "მინიმუმ ორი სიმბოლო").required("სახელი აუცილებელია"),
  surname: yup.string().min(2, "მინიმუმ ორი სიმბოლო").required("გვარი აუცილებელია"),
  email: yup
    .string()
    .email("არასწორი ელ-ფოსტა")
    .matches(/@redberry\.ge$/, "გამოიყენეთ @redberry.ge ფოსტა")
    .required("ელ–ფოსტა აუცილებელია"),
  phone: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, "მიუთითეთ სწორი ტელეფონის ნომერი")
    .required("ტელეფონის ნომერი აუცილებელია"),
  avatar: yup
    .mixed<File>()
    .required("ატვირთეთ ფოტო")
    .test("fileSize", "✔️ არ უნდა აღებმატებოდეს 1MB-ის ზომაში", (value) => {
      return value && value.size <= 1024 * 1024;
    }),
});

type FormData = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  avatar: File;
};

interface AddAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAgent: (formData: FormData) => void;
}

const AddAgentModal: React.FC<AddAgentModalProps> = ({ isOpen, onClose, onAddAgent }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  // Early return to handle conditional rendering
  if (!isOpen) return null;

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    if (data.avatar) {
      formData.append("avatar", data.avatar);
    }

    try {
      const result = await addAgent(formData);
      onAddAgent(result);
      onClose();
    } catch (error) {
      console.error("Failed to add agent:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose} style={{ fontFamily: "FiraGO" }}>
      <div className="bg-white rounded shadow-lg w-[1009px] h-[784px] z-50 p-[105px]" onClick={(e) => e.stopPropagation()}>
        <h1 className="text-center text-[32px] mb-6" style={{ fontWeight: 500 }}>
          აგენტის დამატება
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 gap-[28px]">
          <div className="flex space-x-4 gap-[31px]">
            <div className="flex-1">
              <label className="block mb-1">სახელი *</label>
              <input type="text" {...register("name")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              <span className="font-sans text-sm font-normal text-[#021526]">✔️ მინიმუმ ორი სიმბოლო</span>
            </div>
            <div className="flex-1">
              <label className="block mb-1">გვარი</label>
              <input type="text" {...register("surname")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.surname && <p className="text-red-500">{errors.surname.message}</p>}
              <span className="font-sans text-sm font-normal text-[#021526]">✔️ მინიმუმ ორი სიმბოლო</span>
            </div>
          </div>
          <div className="flex space-x-4 gap-[31px]">
            <div className="flex-1">
              <label className="block mb-1">ელ–ფოსტა *</label>
              <input type="email" {...register("email")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              <span className="font-sans text-sm font-normal text-[#021526]">✔️ გამოიყენეთ @redberry.ge ფოსტა</span>
            </div>
            <div className="flex-1">
              <label className="block mb-1">ტელეფონის ნომერი</label>
              <input type="tel" {...register("phone")} className="w-full p-2 border border-gray-300 rounded" />
              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
              <span className="font-sans text-sm font-normal text-[#021526]">✔️ მხოლოდ რიცხვები</span>
            </div>
          </div>
          <div>
            <label className="block mb-1">ატვირთეთ ფოტო *</label>
            <Controller
              name="avatar"
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

            {errors.avatar && <p className="text-red-500">{errors.avatar.message}</p>}
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

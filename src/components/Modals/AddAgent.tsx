// import React, { ChangeEvent } from 'react';

interface AgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAgent: (formData: FormData) => void;
}

const AgentModal: React.FC<AgentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  //   const [formData, setFormData] = React.useState({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     phoneNumber: '',
  //     image: null as File | null,
  //   });

  //   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   };

  //   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.files) {
  //       setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  //     }
  //   };

  //   const handleSubmit = () => {
  //     onAddAgent(formData);
  //     onClose();
  //   };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
        <h1 className="text-center text-2xl font-bold mb-6">აგენტის დამატება</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block mb-1">სახელი *</label>
              <input
                type="text"
                name="firstName"
                // value={formData.firstName}
                // onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="მინიმუმ ორი სიმბოლო"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1">გვარი</label>
              <input
                type="text"
                name="lastName"
                // value={formData.lastName}
                // onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="მინიმუმ ორი სიმბოლო"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block mb-1">ელ–ფოსტა *</label>
              <input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="გამოიყენეთ @redberry.ge ფოსტა"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1">ტელეფონის ნომერი</label>
              <input
                type="tel"
                name="phoneNumber"
                // value={formData.phoneNumber}
                // onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="მხოლოდ რიცხვები"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1">ატვირთეთ ფოტო *</label>
            <input type="file" name="image" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
        </div>
        <div className="flex justify-end mt-4 space-x-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 text-black rounded">
            გაუქმება
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded">დაამატე აგენტი</button>
        </div>
      </div>
    </div>
  );
};

export default AgentModal;

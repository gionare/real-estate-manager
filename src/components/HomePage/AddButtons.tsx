import React, { useState } from "react";
import AddAgentModal from "../Modals/AddAgentModal";

const AddButtons: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddAgentClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddAgent = (formData: FormData) => {
    // Handle form submission
    console.log("Agent added:", formData);
  };

  return (
    <div>
      <button
        className="w-[203px] h-[47px] flex items-center justify-center rounded-[10px] border border-[#f93b1d] text-[#f93b1d] bg-white hover:bg-[#f93b1d] hover:text-white hover:border-[#f93b1d] transition-all duration-300"
        onClick={handleAddAgentClick}
      >
        + აგენტის დამატება
      </button>
      <AddAgentModal isOpen={isModalOpen} onClose={handleCloseModal} onAddAgent={handleAddAgent} />
    </div>
  );
};

export default AddButtons;

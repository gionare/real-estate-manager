// import React, { useState } from "react";
import { deleteRealEstate } from "../../services/DeleteRealEstate";
import { useNavigate } from "react-router-dom";

interface DeleteListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  realEstateId: number; // Pass the real estate ID to delete
}

const DeleteListingModal: React.FC<DeleteListingModalProps> = ({ isOpen, onClose, realEstateId, onSuccess }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleConfirm = async () => {
    try {
      await deleteRealEstate(realEstateId);
      onSuccess(); // Notify parent component that deletion was successful
      onClose(); // Close the modal
    } catch (error) {
      console.error("Failed to delete the real estate:", error);
      alert("ლისტინგის წაშლა ვერ მოხერხდა!!!"); // Show error message if deletion fails
      navigate("/"); // Redirect to the homepage after deletion
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 rounded" onClick={onClose} style={{ fontFamily: "FiraGO" }}>
      <div
        className="bg-white rounded-2xl shadow-lg  z-50 w-[623px] h-[222px] "
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <h2 className="text-center text-lg text-[32px] mb-8 pt-[58px]">გსურთ წაშალოთ ლისტინგი?</h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 w-[103px] h-[47px] rounded-md border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-300"
          >
            გაუქმება
          </button>
          <button onClick={handleConfirm} className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300">
            დადასტურება
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteListingModal;

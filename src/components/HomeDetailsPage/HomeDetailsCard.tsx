import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AgentInfo from "./AgentInfo";
import { RealEstate, Agent } from "../../services/types";
import DeleteListingModal from "../Modals/DeleteListingModal";

interface HomeDetailsCardProps {
  realEstate: RealEstate;
  agent: Agent;
}

const HomeDetailsCard: React.FC<HomeDetailsCardProps> = ({ realEstate, agent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSuccess = () => {
    console.log("Real estate deleted successfully");
  };

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const formatPrice = (price: number) => {
    return (
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price) + " ₾"
    );
  };

  return (
    <div className="flex mt-14 gap-16">
      {/* Left Arrow Link */}

      {/* Image Section */}
      <div className="flex-none w-[839px] h-[670px] relative">
        <Link to="/" className="absolute top-[-52px] left-[-5px] p-2 rounded-full bg-white ">
          <img src="/icon-right.webp" alt="Back" className="w-7 h-7" />
        </Link>
        <img
          src={typeof realEstate.image === "string" ? realEstate.image : URL.createObjectURL(realEstate.image)}
          alt="Home"
          className="w-full h-full object-cover rounded-tl-[14px] rounded-tr-[14px]"
        />
        <div className="absolute top-[23px] left-[23px] w-[90px] h-[26px] flex items-center justify-center gap-[10px] p-[6px] rounded-[15px] bg-[#021526]/50">
          <span className="text-[12px] font-medium text-white tracking-[0.48px] text-center">Rent</span>
        </div>
        <div>
          <span className="flex justify-end mt-2 text-[16px] font-normal leading-[1.63] text-mutedText">
            გამოტვეყნების თარიღი {new Date(realEstate.created_at).toLocaleDateString("en-GB")}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-[503px] h-[714px] flex-grow-0 flex flex-col justify-start items-start gap-[40px] p-[30px_0_0_0]">
        {/* Price and Location Frame */}
        <div className="w-[338px] self-stretch flex-grow-0 font-fira-go text-left flex flex-col gap-[16px] ">
          <div>
            <span className="h-[58px] self-stretch text-[48px] font-bold leading-normal text-[#021526]">{formatPrice(realEstate.price)}</span>
          </div>
          <div className="flex items-center gap-[6px]">
            <img src="/Icon.png" alt="Location Icon" className="object-contain p-[2px_3px_1.1px_3px]" />
            <span className="h-[25px] text-[23px] font-normal leading-normal text-mutedText">{realEstate.address}</span>
          </div>
          <div className="flex-grow-0 flex flex-row justify-start items-center gap-[6px] p-0">
            <img src="/icon-area.png" alt="bed" className="w-[21px]" />
            <span className="h-[25px] text-[23px] font-normal leading-normal text-mutedText"> ფართი {realEstate.area} მ ²</span>
          </div>
          <div className="flex-grow-0 flex flex-row justify-start items-center gap-[6px] p-0">
            <img src="/icon-bed.png" alt="area" className="w-[21px]" />
            <span className="h-[25px] text-[23px] font-normal leading-normal text-mutedText">საძინებელი {realEstate.bedrooms}</span>
          </div>
          <div className="flex-grow-0 flex flex-row justify-start items-center gap-[6px] p-0">
            <img src="/icon-post-code.png" alt="postcode" className="w-[21px]" />
            <span className="h-[25px] text-[23px] font-normal leading-normal text-mutedText">საფოსტო ინდექსი {realEstate.zip_code}</span>
          </div>
        </div>

        {/* Description Section */}
        <div className="">
          <p className={`self-stretch text-[16px] font-normal leading-[1.63] text-mutedText ${!showFullDescription ? "line-clamp-3" : ""}`}>
            {realEstate.description}
          </p>
          <button className="text-mutedText mt-2" onClick={toggleDescription}>
            {showFullDescription ? "Show Less" : "Read More..."}
          </button>
        </div>

        <div className="h-[174px]">
          <AgentInfo
            avatar={agent.avatar}
            name={agent.name}
            surname={agent.surname}
            email={realEstate.agent.email}
            phone={realEstate.agent.phone}
            id={agent.id}
          />
        </div>

        {/* Delete Button */}
        <div className="h-[37px] flex justify-center items-center p-[10px] rounded-[8px] border border-[#676e76]">
          <button className="" onClick={handleDeleteClick}>
            ლისტინგის წაშლა
          </button>
        </div>

        {/* Delete Listing Modal */}
        <DeleteListingModal isOpen={isModalOpen} onClose={handleCloseModal} realEstateId={realEstate.id} onSuccess={handleSuccess} />
      </div>
    </div>
  );
};

export default HomeDetailsCard;

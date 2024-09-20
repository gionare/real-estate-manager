import React, { useState } from "react";
import AgentInfo from "./AgentInfo";
import { RealEstate, Agent } from "../../services/types";
import DeleteListingModal from "../Modals/DeleteListingModal";

// interface HomeDetailsCardProps {
//   imageUrl: string;
//   created_at: string;
//   price: string;
//   location: string;
//   bedroomIcon: string;
//   areaIcon: string;
//   postcodeIcon: string;
//   description: string;
//   agentInfo: string;
//   agent: {
//     avatar: string;
//     name: string;
//     surname: string;
//     email: string;
//     phone: string;
//   };
// }

interface HomeDetailsCardProps {
  realEstate: RealEstate;
  agent: Agent;
}

const HomeDetailsCard: React.FC<HomeDetailsCardProps> = ({ realEstate, agent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSuccess = () => {
    console.log("Real estate deleted successfully");
  };

  return (
    <div className="flex relative rounded-[14px] mt-14 gap-16">
      {/* Image Section */}
      <div className="flex-none w-[839px] h-[670px] relative">
        <img src={realEstate.image} alt="Home" className="w-full h-full object-cover rounded-tl-[14px] rounded-tr-[14px]" />
        {/* Tag Section */}
        <div className="absolute top-[23px] left-[23px] w-[90px] h-[26px] flex items-center justify-center gap-[10px] p-[6px] rounded-[15px] bg-[#021526]/50">
          <span className=" text-[12px] font-medium text-white tracking-[0.48px] text-center">Rent</span>
        </div>
        <div>
          <span className="flex justify-end mt-2 text-[16px] font-normal leading-[1.63] text-mutedText">გამოტვეყნების თარიღი {realEstate.created_at}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-[503px] h-[714px] flex-grow-0 flex flex-col justify-start items-start gap-[40px] p-[30px_0_0_0]">
        {/* Price and Location Frame */}

        <div className="w-[338px] self-stretch flex-grow-0 font-fira-go text-left flex flex-col gap-[16px] ">
          {/* Price */}
          <div className="">
            <span className="h-[58px] self-stretch text-[48px] font-bold leading-normal text-[#021526]">{realEstate.price}</span>
          </div>
          {/* Location Frame */}
          <div className=" flex items-center gap-[6px]">
            <img src="/Icon.png" alt="Location Icon" className="object-contain p-[2px_3px_1.1px_3px]" />
            <span className=" h-[28px] text-[24px] font-normal leading-normal text-mutedText">{realEstate.address}</span>
          </div>
          {/* Item 1 */}
          <div className="flex-grow-0 flex flex-row justify-start items-center gap-[6px] p-0">
            <img src="/icon-area.png" alt="bed" className="w-[21px]" />
            <span className=" h-[28px] text-[24px] font-normal leading-normal text-mutedText"> ფართი {realEstate.area} მ ²</span>
          </div>
          {/* Item 2 */}
          <div className="flex-grow-0 flex flex-row justify-start items-center gap-[6px] p-0">
            <img src="/icon-bed.png" alt="area" className="w-[21px]" />
            <span className=" h-[28px] text-[24px] font-normal leading-normal text-mutedText">საძინებელი {realEstate.bedrooms}</span>
          </div>
          {/* Item 3 */}
          <div className="flex-grow-0 flex flex-row justify-start items-center gap-[6px] p-0">
            <img src="/icon-post-code.png" alt="postcode" className="w-[21px]" />
            <span className=" h-[28px] text-[24px] font-normal leading-normal text-mutedText">საფოსტო ინდექსი {realEstate.zip_code}</span>
          </div>
        </div>

        {/* Description */}
        <div className="">
          <p className="self-stretch text-[16px] font-normal leading-[1.63] text-mutedText">{realEstate.description}</p>
        </div>

        <div className="">
          {/* Pass the agent info to the AgentInfo component */}
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
        <div className="h-[37px] flex justify-center items-center gap-[10px] p-[10px] rounded-[8px] border border-[#676e76]">
          <button className="" onClick={handleDeleteClick}>
            ლისტინგის წაშლა
          </button>
        </div>

        {/* Delete Listing Modal */}
        <DeleteListingModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          realEstateId={realEstate.id} // Pass real estate ID to the modal
          onSuccess={handleSuccess}
        />
      </div>
    </div>
  );
};

export default HomeDetailsCard;

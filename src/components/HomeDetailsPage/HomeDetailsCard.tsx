import React from "react";
import AgentInfo from "./AgentInfo";

interface HomeDetailsCardProps {
  imageUrl: string;
  publishData: string;
  price: string;
  location: string;
  bedroomIcon: string;
  areaIcon: string;
  postcodeIcon: string;
  description: string;
  agentInfo: string;
  agent: {
    avatar: string;
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;
  };
}

const HomeDetailsCard: React.FC<HomeDetailsCardProps> = ({
  imageUrl,
  publishData,
  price,
  location,
  bedroomIcon,
  areaIcon,
  postcodeIcon,
  description,
  agent,
}) => {
  return (
    <div className="flex relative rounded-[14px] mt-14 gap-16">
      {/* Image Section */}
      <div className="flex-none w-[839px] h-[670px] relative">
        <img src={imageUrl} alt="Home" className="w-full h-full object-cover rounded-tl-[14px] rounded-tr-[14px]" />
        {/* Tag Section */}
        <div className="absolute top-[23px] left-[23px] w-[90px] h-[26px] flex items-center justify-center gap-[10px] p-[6px] rounded-[15px] bg-[#021526]/50">
          <span className=" text-[12px] font-medium text-white tracking-[0.48px] text-center">Rent</span>
        </div>
        <div>
          <span className="flex justify-end mt-2 text-[16px] font-normal leading-[1.63] text-[#808a93]">გამოტვეყნების თარიღი {publishData}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-[503px] h-[714px] flex-grow-0 flex flex-col justify-start items-start gap-[40px] p-[30px_0_0_0]">
        {/* Price and Location Frame */}

        <div className="w-[338px] self-stretch flex-grow-0 font-fira-go text-left flex flex-col gap-[16px] ">
          {/* Price */}
          <div className="">
            <span className="h-[58px] self-stretch text-[48px] font-bold leading-normal text-[#021526]">{price}</span>
          </div>

          {/* Location Frame */}
          <div className=" flex items-center gap-[4px]">
            <img src="/Icon.png" alt="Location Icon" className="object-contain p-[2px_3px_1.1px_3px]" />
            <span className="w-[312px] h-[29px] text-[24px] font-normal leading-normal text-[#808a93]">{location}</span>
          </div>

          {/* Item 1 */}
          <div className="flex-grow-0 flex flex-row justify-start items-center gap-[4px] p-0">
            <img src={bedroomIcon} alt="bed" className="w-[21px]" />
          </div>

          {/* Item 2 */}
          <div className="flex-grow-0 flex flex-row justify-start items-center gap-[4px] p-0">
            <img src={areaIcon} alt="area" className="w-[21px]" />
          </div>

          {/* Item 3 */}
          <div className="flex-grow-0 flex flex-row justify-start items-center gap-[4px] p-0">
            <img src={postcodeIcon} alt="postcode" className="w-[21px]" />
          </div>
        </div>

        {/* Description */}
        <div className="">
          <p className="self-stretch text-[16px] font-normal leading-[1.63] text-[#808a93]">{description}</p>
        </div>

        <div className="">
          {/* Pass the agent info to the AgentInfo component */}
          <AgentInfo avatar={agent.avatar} name={agent.name} surname={agent.surname} email={agent.email} phoneNumber={agent.phoneNumber} />
        </div>

        {/* Button */}
        <div className="h-[37px] flex justify-center items-center gap-[10px] p-[10px] rounded-[8px] border border-[#676e76]">
          <button className="">ლისტინგის წაშლა</button>
        </div>
      </div>
    </div>
  );
};

export default HomeDetailsCard;

import React from "react";
import { RealEstate } from "../../services/types";
import { useNavigate } from "react-router-dom";

interface CardProps {
  realEstate: RealEstate;
}

const Card: React.FC<CardProps> = ({ realEstate }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/homedetails/${realEstate.id}`, { state: { realEstate } });
  };

  const { image, price, address, city, bedrooms, area, zip_code } = realEstate;

  // Check if image is a File object or a string
  const imageUrl = typeof image === "string" ? image : URL.createObjectURL(image);

  return (
    <div className="w-[384px] h-[455px] relative rounded-[14px] border-gray-300 shadow-[0_4px_8px_rgba(0,0,0,0.1)] mt-14" onClick={handleCardClick}>
      {/* Card image section */}
      <img src={imageUrl} alt="Card Image" className="w-full h-[307px] rounded-t-[14px] object-cover" />

      {/* tag section */}
      <div className="absolute top-[23px] left-[23px] w-[90px] h-[26px] flex items-center justify-center gap-[10px] p-[6px] rounded-[15px] bg-[#021526]/50">
        <span className="w-[70px] h-[14px] text-[12px] font-medium text-white tracking-[0.48px] text-center pb-5">
          {realEstate.is_rental ? "ქირავდება" : "იყიდება"}
        </span>
      </div>

      {/* Content Section */}
      <div className="w-full h-[148px] p-[22px_25px] flex flex-col gap-[20px] border-t border-x border-gray-300 rounded-b-[14px] bg-white ">
        {/* Price and Location Frame */}
        <div className="w-full h-[60px] flex flex-col gap-[6px] ">
          {/* Price */}
          <div className="w-full h-[34px] flex items-center text-[28px] font-bold font-[FiraGO] text-[#021526] mb-1">
            {/* Price content goes here */}
            <span className="h-[34px] self-stretch flex-grow-0 text-[28px] font-bold font-fira-go text-left text-[#021526]"> {price.toLocaleString()} ₾</span>
          </div>

          {/* Location Frame */}
          <div className="w-full h-[20px] flex items-center gap-[4px]">
            <img src="/Icon.png" alt="Location Icon" className="w-[20px] h-[20px] object-contain p-[2px_3px_1.1px_3px]" />
            <span className="w-[208px] h-[19px] text-sm font-medium text-[#021526]">
              {/* Location content goes here */}
              {address}, {city.name}
            </span>
          </div>
        </div>

        {/* Additional Information Frame */}
        <div className="w-full h-[24px] flex items-center gap-[32px]">
          {/* Item 1 */}
          <div className="w-[37px] h-[24px] flex items-center gap-[5px]">
            <img src="/icon-bed.png" alt="bed" className="w-[21px]" />
            <span className="text-sm text-gray-700">{bedrooms}</span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-[5px]">
            <img src="/icon-area.png" alt="area" className="w-[21px] h-[21px]" />
            <span className="text-sm text-gray-700 leading-none">{area} მ²</span>
          </div>

          {/* Item 3 */}
          <div className="w-[54px] h-[24px] flex items-center gap-[5px]">
            <img src="/icon-post-code.png" alt="zip code" className="w-[21px]" />
            <span className="text-sm text-gray-700">{zip_code}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

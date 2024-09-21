// import React from "react";

import React, { useState } from "react";
import PriceCategory from "./Filters/PriseCategory";

const FilterComponent = () => {
  const [isPricePopupOpen, setPricePopupOpen] = useState(false);

  const togglePricePopup = () => {
    setPricePopupOpen(!isPricePopupOpen);
  };

  // export default function Filters() {
  return (
    <div className="w-[785px] h-[47px] flex flex-row  items-center gap-[24px] p-[6px] border border-gray-300 rounded-[10px] bg-white">
      <div className="w-[116px] h-[35px] flex flex-row justify-start items-center p-[8px_14px]">
        <span className="w-[70px] h-[19px] text-[16px] font-medium text-[#021526]"> რეგიონი</span>
        <img src="/icon.svg" alt="Icon" className="w-[14px] h-[14px] object-contain mt-1.5" />
      </div>
      {/* <div className="w-[199px] h-[35px] flex flex-row justify-start items-centerS p-[8px_14px]">
        <span className="w-[153px] h-[19px] text-[16px] font-medium text-[#021526]"> საფასო კატეგორია</span>
        <img src="/icon.svg" alt="Icon" className="w-[14px] h-[14px] object-contain mt-1.5" />
      </div> */}

      <div className="relative">
        <span className="w-[153px] h-[19px] text-[16px] font-medium text-[#021526] cursor-pointer" onClick={togglePricePopup}>
          საფასო კატეგორია
        </span>

        {isPricePopupOpen && (
          <div className="absolute top-12 left-0 w-[382px] p-4 bg-white rounded shadow-lg z-10 ">
            <PriceCategory />
            <button onClick={togglePricePopup} className="mt-2 ml-64 bg-red-500 text-white p-2 rounded w-[77px] ">
              არჩევა
            </button>
          </div>
        )}
      </div>

      <div className="w-[124px] h-[35px] flex flex-row justify-start items-center  p-[8px_14px]">
        <span className="w-[78px] h-[19px] text-[16px] font-medium text-[#021526]"> ფართობი</span>
        <img src="/icon.svg" alt="Icon" className="w-[14px] h-[14px] object-contain mt-1.5" />
      </div>
      <div className="w-[262px] h-[35px] flex flex-row justify-start items-center p-[8px_14px]">
        <span className="w-[216px] h-[19px] text-[16px] font-medium text-[#021526]"> საძინებლების რაოდენობა</span>
        <img src="/icon.svg" alt="Icon" className="w-[14px] h-[14px] object-contain mt-1.5" />
      </div>
    </div>
  );
};

export default FilterComponent;

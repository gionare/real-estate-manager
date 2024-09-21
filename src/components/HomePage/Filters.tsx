import { useState } from "react";
import PriceCategory from "./Filters/PriseCategory";
import AreaCategory from "./Filters/AreaCategory";

const FilterComponent = () => {
  // States for each arrow and popup
  const [isPricePopupOpen, setPricePopupOpen] = useState(false);
  const [isAreaPopupOpen, setAreaPopupOpen] = useState(false); // State for area popup
  const [isRegionArrowDown, setIsRegionArrowDown] = useState(true);
  const [isPriceArrowDown, setIsPriceArrowDown] = useState(true);
  const [isAreaArrowDown, setIsAreaArrowDown] = useState(true);
  const [isBedroomsArrowDown, setIsBedroomsArrowDown] = useState(true);

  // Handlers for toggling specific dropdowns and arrows
  const toggleRegionArrow = () => {
    setIsRegionArrowDown(!isRegionArrowDown);
  };

  const togglePricePopup = () => {
    setPricePopupOpen(!isPricePopupOpen);
    setIsPriceArrowDown(!isPriceArrowDown);
  };

  const toggleAreaArrow = () => {
    setAreaPopupOpen(!isAreaPopupOpen);
    setIsAreaArrowDown(!isAreaArrowDown);
  };

  const toggleBedroomsArrow = () => {
    setIsBedroomsArrowDown(!isBedroomsArrowDown);
  };

  return (
    <div className="w-[785px] h-[47px] flex flex-row items-center gap-[24px] p-[6px] border border-gray-300 rounded-[10px] bg-white">
      {/* Region Filter */}
      <div className="w-[116px] h-[35px] flex flex-row justify-start items-center p-[8px_14px] cursor-pointer" onClick={toggleRegionArrow}>
        <span className="w-[70px] h-[19px] text-[16px] font-medium text-[#021526]">რეგიონი</span>
        <img
          src="/arrow-down.svg"
          alt="Icon"
          className={`w-[14px] h-[14px] object-contain mt-1.5 transition-transform duration-300 ease-in-out ${isRegionArrowDown ? "" : "rotate-180"}`}
        />
      </div>

      {/* Price Category Filter */}
      <div className="relative flex items-center">
        <span className="h-[19px] text-[16px] font-medium text-[#021526] cursor-pointer" onClick={togglePricePopup}>
          საფასო კატეგორია
        </span>
        <img
          src="/arrow-down.svg"
          alt="Icon"
          className={`w-[14px] h-[14px] object-contain mt-1.5 transition-transform duration-300 ease-in-out ${isPriceArrowDown ? "" : "rotate-180"}`}
        />
        {isPricePopupOpen && (
          <div className="absolute top-12 left-0 w-[382px] p-4 bg-white rounded shadow-lg z-10">
            <PriceCategory />
            <button className="mt-2 ml-64 bg-red-500 text-white p-2 rounded w-[77px]">არჩევა</button>
          </div>
        )}
      </div>

      {/* Area Filter */}
      <div className="relative flex items-center">
        <span className="h-[19px] text-[16px] font-medium text-[#021526]  cursor-pointer" onClick={toggleAreaArrow}>
          ფართობი
        </span>
        <img
          src="/arrow-down.svg"
          alt="Icon"
          className={`w-[14px] h-[14px] object-contain mt-1.5 transition-transform duration-300 ease-in-out ${isAreaArrowDown ? "" : "rotate-180"}`}
        />
        {isAreaPopupOpen && (
          <div className="absolute top-12 left-0 w-[382px] p-4 bg-white rounded shadow-lg z-10">
            <AreaCategory />
            <button className="mt-2 ml-64 bg-red-500 text-white p-2 rounded w-[77px]">არჩევა</button>
          </div>
        )}
      </div>

      {/* Bedrooms Filter */}
      <div className="w-[262px] h-[35px] flex flex-row justify-start items-center p-[8px_14px] cursor-pointer" onClick={toggleBedroomsArrow}>
        <span className="w-[216px] h-[19px] text-[16px] font-medium text-[#021526]">საძინებლების რაოდენობა</span>
        <img
          src="/arrow-down.svg"
          alt="Icon"
          className={`w-[14px] h-[14px] object-contain mt-1.5 transition-transform duration-300 ease-in-out ${isBedroomsArrowDown ? "" : "rotate-180"}`}
        />
      </div>
    </div>
  );
};

export default FilterComponent;

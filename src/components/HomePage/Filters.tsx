import { useState, useRef, useEffect } from "react";
import PriceCategory from "./Filters/PriseCategory";
import AreaCategory from "./Filters/AreaCategory";
import BedroomsCategory from "./Filters/BedroomCategory";

const FilterComponent = () => {
  // States for each arrow and popup
  const [isPricePopupOpen, setPricePopupOpen] = useState(false);
  const [isAreaPopupOpen, setAreaPopupOpen] = useState(false);
  const [isBedroomPopupOpen, setBedroomPopupOpen] = useState(false);

  const [isRegionArrowDown, setIsRegionArrowDown] = useState(true);
  const [isPriceArrowDown, setIsPriceArrowDown] = useState(true);
  const [isAreaArrowDown, setIsAreaArrowDown] = useState(true);
  const [isBedroomsArrowDown, setIsBedroomsArrowDown] = useState(true);

  const [selectedBedrooms, setSelectedBedrooms] = useState<number | "">("");

  const clearSelection = () => {
    setSelectedBedrooms("");
  };

  const priceRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const bedroomRef = useRef<HTMLDivElement>(null);

  // Handlers for toggling specific dropdowns and arrows
  const toggleRegionArrow = () => {
    setIsRegionArrowDown(!isRegionArrowDown);
    setIsRegionArrowDown((prev) => !prev);
  };

  const togglePricePopup = () => {
    setPricePopupOpen((prev) => !prev);
    setIsPriceArrowDown((prev) => !prev);
  };

  const toggleAreaPopup = () => {
    setAreaPopupOpen((prev) => !prev);
    setIsAreaArrowDown((prev) => !prev);
  };

  const toggleBedroomsPopup = () => {
    setBedroomPopupOpen((prev) => !prev);
    setIsBedroomsArrowDown((prev) => !prev);
  };

  // Close popup if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (priceRef.current && !priceRef.current.contains(event.target as Node)) {
      setPricePopupOpen(false);
      setIsPriceArrowDown(true); // Reset price arrow
    }
    if (areaRef.current && !areaRef.current.contains(event.target as Node)) {
      setAreaPopupOpen(false);
      setIsAreaArrowDown(true); // Reset area arrow
    }
    if (bedroomRef.current && !bedroomRef.current.contains(event.target as Node)) {
      setBedroomPopupOpen(false);
      setIsBedroomsArrowDown(true); // Reset bedroom arrow
    }
  };

  // const handleSelectBedrooms = (bedrooms: number) => {
  //   setSelectedBedrooms(bedrooms);
  //   setBedroomPopupOpen(false); // Close the popup after selection
  // };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
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
        <div className="relative flex items-center" ref={priceRef}>
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
        <div className="relative flex items-center" ref={areaRef}>
          <span className="h-[19px] text-[16px] font-medium text-[#021526] cursor-pointer" onClick={toggleAreaPopup}>
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
        <div className="relative flex items-center" ref={bedroomRef}>
          <span className="h-[19px] text-[16px] font-medium text-[#021526] cursor-pointer" onClick={toggleBedroomsPopup}>
            საძინებლების რაოდენობა
          </span>
          <img
            src="/arrow-down.svg"
            alt="Icon"
            className={`w-[14px] h-[14px] object-contain mt-1.5 transition-transform duration-300 ease-in-out ${isBedroomsArrowDown ? "" : "rotate-180"}`}
          />
          {isBedroomPopupOpen && (
            <div className="absolute top-12 left-0 w-[382px] p-4 rounded z-10">
              <BedroomsCategory onSelect={setSelectedBedrooms} />
            </div>
          )}
        </div>
      </div>

      {/* Selected Bedrooms Display */}
      <div className="mt-4">
        {selectedBedrooms !== "" && (
          <div className="flex items-center justify-around p-2 border border-gray-300 rounded-full w-[55px]">
            <span className="text-sm font-medium"> {selectedBedrooms}</span>
            <button onClick={clearSelection}>Ｘ</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;

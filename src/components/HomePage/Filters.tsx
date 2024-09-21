import { useState, useRef, useEffect } from "react";
import PriceCategory from "./Filters/PriseCategory";
import AreaCategory from "./Filters/AreaCategory";
import BedroomsCategory from "./Filters/BedroomCategory";

const FilterComponent = ({ onAreaSelect, onPriceSelect, onBedroomsSelect }) => {
  // States for each arrow and popup
  const [isPricePopupOpen, setPricePopupOpen] = useState(false);
  const [isAreaPopupOpen, setAreaPopupOpen] = useState(false);
  const [isBedroomPopupOpen, setBedroomPopupOpen] = useState(false);

  const [isRegionArrowDown, setIsRegionArrowDown] = useState(true);
  const [isPriceArrowDown, setIsPriceArrowDown] = useState(true);
  const [isAreaArrowDown, setIsAreaArrowDown] = useState(true);
  const [isBedroomsArrowDown, setIsBedroomsArrowDown] = useState(true);

  const [selectedArea, setSelectedArea] = useState<{ low: string; high: string }>({ low: "", high: "" });
  const [selectedPrice, setSelectedPrice] = useState<{ low: string; high: string }>({ low: "", high: "" });
  const [selectedBedrooms, setSelectedBedrooms] = useState<number | "">("");

  const priceRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const bedroomRef = useRef<HTMLDivElement>(null);

  const clearAllSelections = () => {
    clearPriceSelection();
    clearAreaSelection();
    clearSelection();
    // Any additional logic if needed
  };

  const clearSelection = () => {
    setSelectedBedrooms("");
  };

  const clearAreaSelection = () => {
    setSelectedArea({ low: "", high: "" });
  };
  const clearPriceSelection = () => {
    setSelectedPrice({ low: "", high: "" });
  };

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

  const handlePriceSelect = (low: string, high: string) => {
    setSelectedPrice({ low, high });
    onPriceSelect({ low, high }); // Pass to parent
  };

  const handleAreaSelect = (low: string, high: string) => {
    setSelectedArea({ low, high });
    onAreaSelect({ low, high }); // Pass to parent
  };

  const handleBedroomsSelect = (bedrooms: number | "") => {
    setSelectedBedrooms(bedrooms);
    onBedroomsSelect(bedrooms); // Pass to parent
  };

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
          <span className="w-[70px] h-[19px] text-[16px] font-semibold text-[#021526]">რეგიონი</span>
          <img
            src="/arrow-down.svg"
            alt="Icon"
            className={`w-[14px] h-[14px] object-contain mt-1.5 transition-transform duration-300 ease-in-out ${isRegionArrowDown ? "" : "rotate-180"}`}
          />
        </div>

        {/* Price Category Filter */}
        <div className="relative flex items-center" ref={priceRef}>
          <span className="h-[19px] text-[16px] font-semibold text-[#021526] cursor-pointer" onClick={togglePricePopup}>
            საფასო კატეგორია
          </span>
          <img
            src="/arrow-down.svg"
            alt="Icon"
            className={`w-[14px] h-[14px] object-contain mt-1.5 transition-transform duration-300 ease-in-out ${isPriceArrowDown ? "" : "rotate-180"}`}
          />
          {isPricePopupOpen && (
            <div className="absolute top-12 left-0 w-[382px] p-4 bg-white rounded shadow-lg z-10">
              <PriceCategory onSelect={handlePriceSelect} />
              <button
                className="mt-2 ml-64 bg-red-500 text-white p-2 rounded w-[77px]"
                onClick={() => {
                  handlePriceSelect(selectedPrice.low, selectedPrice.high); // Ensure to pass selected area values
                  setPricePopupOpen(false); // Close the popup
                  setIsPriceArrowDown(true); // Reset area arrow
                }}
              >
                არჩევა
              </button>
            </div>
          )}
        </div>

        {/* Area Filter */}
        <div className="relative flex items-center" ref={areaRef}>
          <span className="h-[19px] text-[16px] font-semibold text-[#021526] cursor-pointer" onClick={toggleAreaPopup}>
            ფართობი
          </span>
          <img
            src="/arrow-down.svg"
            alt="Icon"
            className={`w-[14px] h-[14px] object-contain mt-1.5 transition-transform duration-300 ease-in-out ${isAreaArrowDown ? "" : "rotate-180"}`}
          />
          {isAreaPopupOpen && (
            <div className="absolute top-12 left-0 w-[382px] p-4 bg-white rounded shadow-lg z-10">
              <AreaCategory onSelect={handleAreaSelect} />
              <button
                className="mt-2 ml-64 bg-red-500 text-white p-2 rounded w-[77px]"
                onClick={() => {
                  handleAreaSelect(selectedArea.low, selectedArea.high); // Ensure to pass selected area values
                  setAreaPopupOpen(false); // Close the popup
                  setIsAreaArrowDown(true); // Reset area arrow
                }}
              >
                არჩევა
              </button>
            </div>
          )}
        </div>

        {/* Bedrooms Filter */}
        <div className="relative flex items-center" ref={bedroomRef}>
          <span className="h-[19px] text-[16px] font-semibold text-[#021526] cursor-pointer" onClick={toggleBedroomsPopup}>
            საძინებლების რაოდენობა
          </span>
          <img
            src="/arrow-down.svg"
            alt="Icon"
            className={`w-[14px] h-[14px] object-contain mt-1.5 transition-transform duration-300 ease-in-out ${isBedroomsArrowDown ? "" : "rotate-180"}`}
          />
          {isBedroomPopupOpen && (
            <div className="absolute top-12 left-0 w-[382px] p-4 rounded z-10">
              <BedroomsCategory
                onSelect={handleBedroomsSelect} // This should now match the expected type
                onClose={() => setBedroomPopupOpen(false)} // Close popup when button is pressed
              />
              Z
            </div>
          )}
        </div>
      </div>

      {/* Selected items Display */}
      <div className="mt-4  flex flex-row gap-2">
        {selectedPrice.low && (
          <div className="flex items-center justify-between p-2 border border-gray-300 rounded-full w-[200px]">
            <span className="text-sm font-medium">
              {selectedPrice.low} - {selectedPrice.high}
            </span>
            <button onClick={clearPriceSelection}>Ｘ</button>
          </div>
        )}
        {selectedArea.low && (
          <div className="flex items-center justify-between p-2 border border-gray-300 rounded-full w-[150px]">
            <span className="text-sm font-medium">
              {selectedArea.low} - {selectedArea.high}
            </span>
            <button onClick={clearAreaSelection}>Ｘ</button>
          </div>
        )}

        {selectedBedrooms !== "" && (
          <div className="flex items-center justify-between p-2 border border-gray-300 rounded-full w-[55px]">
            <span className="text-sm font-medium">{selectedBedrooms}</span>
            <button onClick={clearSelection}>Ｘ</button>
          </div>
        )}
        {(selectedPrice.low || selectedArea.low || selectedBedrooms !== "") && (
          <button onClick={clearAllSelections} className="font-medium p-2">
            გასუფთავება
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;

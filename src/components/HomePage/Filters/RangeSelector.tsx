import React, { useState } from "react";

interface Preset {
  low: string;
  high: string;
}

interface RangeSelectorProps {
  presets: Preset[];
  label: string;
  placeholderLow: string;
  placeholderHigh: string;
  minLabel: string;
  maxLabel: string;
  type: "area" | "price";
  onSelect: (low: string, high: string) => void; // New prop for selection
}

const RangeSelector: React.FC<RangeSelectorProps> = ({
  presets,
  label,
  placeholderLow,
  placeholderHigh,
  minLabel,
  maxLabel,
  type,
  onSelect, // Destructure the new prop
}) => {
  const [lowValue, setLowValue] = useState("");
  const [highValue, setHighValue] = useState("");

  const handlePresetClick = (low: string, high: string) => {
    setLowValue(low);
    setHighValue(high);
    onSelect(low, high); // Call onSelect when a preset is selected
  };

  return (
    <div className="range-selector w-[382px]">
      <h3 className="font-medium text-lg">{label}</h3>
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <input
              type="text"
              value={lowValue}
              placeholder={placeholderLow}
              onChange={(e) => setLowValue(e.target.value)}
              className="border border-gray-300 rounded p-2 w-[155px] mb-4 mt-2"
            />
            <label className="pl-2">{minLabel}</label>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              value={highValue}
              placeholder={placeholderHigh}
              onChange={(e) => setHighValue(e.target.value)}
              className="border border-gray-300 rounded p-2 mb-4 mt-2"
            />
            <label className="pl-2">{maxLabel}</label>
          </div>
        </div>

        <div className="presets flex flex-col gap-2 justify-between">
          {presets.map((preset, index) => (
            <button
              key={index}
              onClick={() => handlePresetClick(preset.low, preset.high)}
              className="hover:bg-gray-100 p-2 rounded flex justify-between w-[255px]"
            >
              <span>{preset.low}</span>
              <span>
                {preset.high} {type === "price" ? "" : ""}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Display selected values */}
      <div className="mt-4">
        <span className="text-sm">
          Selected: {lowValue} - {highValue || "None"}
          <button
            onClick={() => {
              setLowValue("");
              setHighValue("");
              onSelect("", "");
            }}
            className="ml-2 text-red-500"
          >
            X
          </button>
        </span>
      </div>
    </div>
  );
};

export default RangeSelector;

import RangeSelector from "./RangeSelector";

const areaPresets = [
  { low: "50 მ²", high: "70 მ²" },
  { low: "70 მ²", high: "90 მ²" },
  { low: "90 მ²", high: "110 მ²" },
  { low: "110 მ²", high: "130 მ²" },
  { low: "130 მ²", high: "150 მ²" },
];

interface AreaCategoryProps {
  onSelect: (low: string, high: string) => void; // New prop for selection
}

const AreaCategory: React.FC<AreaCategoryProps> = ({ onSelect }) => {
  return (
    <RangeSelector
      presets={areaPresets}
      label="ფართობის მიხედვით"
      placeholderLow="დან მ²"
      placeholderHigh="მდე მ²"
      minLabel="მინ. მ²"
      maxLabel="მაქს. მ²"
      type="area"
      onSelect={onSelect} // Pass down the onSelect prop
    />
  );
};

export default AreaCategory;

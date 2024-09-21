import RangeSelector from "./RangeSelector";

const areaPresets = [
  { low: "50 მ²", high: "70" },
  { low: "70 მ²", high: "90" },
  { low: "90 მ²", high: "110" },
  { low: "110 მ²", high: "130" },
  { low: "130 მ²", high: "150" },
];

const AreaCategory = () => {
  return (
    <RangeSelector
      presets={areaPresets}
      label="ფართობის მიხედვით"
      placeholderLow="დან მ²"
      placeholderHigh="მდე მ²"
      minLabel="მინ. მ²"
      maxLabel="მაქს. მ²"
      type="area"
    />
  );
};

export default AreaCategory;

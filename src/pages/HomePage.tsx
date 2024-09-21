import React, { useState } from "react";
import Filters from "../components/HomePage/Filters";
import AddButtons from "../components/HomePage/AddButtons";
import CardGrid from "../components/HomePage/CardGrid";

const HomePage: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<{ low: string; high: string }>({ low: "", high: "" });
  const [selectedPrice, setSelectedPrice] = useState<{ low: string; high: string }>({ low: "", high: "" });
  const [selectedBedrooms, setSelectedBedrooms] = useState<number | "">("");

  return (
    <div>
      <div className="flex justify-between w-full">
        <Filters onAreaSelect={setSelectedArea} onPriceSelect={setSelectedPrice} onBedroomsSelect={setSelectedBedrooms} />
        <AddButtons />
      </div>
      <CardGrid selectedArea={selectedArea} selectedPrice={selectedPrice} selectedBedrooms={selectedBedrooms} />
    </div>
  );
};

export default HomePage;

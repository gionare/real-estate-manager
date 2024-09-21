import React, { useEffect, useState } from "react";
import { getRealEstates } from "../../services/api";
import Card from "./Card";
import { RealEstate } from "../../services/types";

interface CardGridProps {
  selectedArea: { low: string; high: string };
  selectedPrice: { low: string; high: string };
  selectedBedrooms: number | "";
}

const CardGrid: React.FC<CardGridProps> = ({ selectedArea, selectedPrice, selectedBedrooms }) => {
  const [realEstates, setRealEstates] = useState<RealEstate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRealEstates = async () => {
      try {
        const data = await getRealEstates();
        setRealEstates(data);
      } catch (error) {
        console.error("Error fetching real estates:", error);
        setError("Failed to load real estate data");
      } finally {
        setLoading(false);
      }
    };

    fetchRealEstates();
  }, []);

  const filteredRealEstates = realEstates.filter((realEstate) => {
    const priceWithinRange = selectedPrice.low ? realEstate.price >= parseFloat(selectedPrice.low) && realEstate.price <= parseFloat(selectedPrice.high) : true;
    const areaWithinRange = selectedArea.low ? realEstate.area >= parseFloat(selectedArea.low) && realEstate.area <= parseFloat(selectedArea.high) : true;
    const bedroomsMatch = selectedBedrooms ? realEstate.bedrooms === selectedBedrooms : true;

    return priceWithinRange && areaWithinRange && bedroomsMatch;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-4 gap-4 w-[1596px] mx-auto mb-24">
      {filteredRealEstates.map((realEstate) => (
        <Card key={realEstate.id} realEstate={realEstate} />
      ))}
    </div>
  );
};

export default CardGrid;

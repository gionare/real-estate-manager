// const CardGrid: React.FC = () => {
//   // Array with 8 elements to render 8 Card components
//   const cards = Array(8).fill(null);

//   return (
//     <div className="grid grid-cols-4 gap-[20px] p-[16px] max-w-[1600px] mx-auto">
//       {cards.map((_, index) => (
//         <Card key={index} />
//       ))}
//     </div>
//   );
// };

// export default CardGrid;
// src/components/CardGrid.tsx

import React, { useEffect, useState } from "react";
import { getRealEstates } from "../../services/api";
import Card from "./Card";
import { RealEstate } from "../../services/types";

const CardGrid: React.FC = () => {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-4 gap-4 border mb-24">
      {realEstates.map((realEstate) => (
        <Card key={realEstate.id} realEstate={realEstate} />
      ))}
    </div>
  );
};

export default CardGrid;

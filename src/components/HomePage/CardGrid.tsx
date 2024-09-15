// CardGrid.tsx
import React from "react";
import Card from "./Card"; // Ensure the path is correct based on your file structure

const CardGrid: React.FC = () => {
  // Array with 8 elements to render 8 Card components
  const cards = Array(8).fill(null);

  return (
    <div className="grid grid-cols-4 gap-[20px] p-[16px] max-w-[1600px] mx-auto">
      {cards.map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default CardGrid;

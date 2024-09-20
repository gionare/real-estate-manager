import React from "react";
import Filters from "../components/HomePage/Filters";
import AddButtons from "../components/HomePage/AddButtons";
import CardGrid from "../components/HomePage/CardGrid";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full border ">
        <Filters />
        <AddButtons />
      </div>
      <CardGrid />
    </div>
  );
};
export default HomePage;

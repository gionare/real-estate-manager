// import { useState } from 'react'
import "./App.css";
import CardCarousel from "./components/HomeDetailsPage/CardCarousel";
import HomeDetails from "./components/HomeDetailsPage/HomeDetails";
import AddButtons from "./components/HomePage/AddButtons";
import CardGrid from "./components/HomePage/CardGrid";
import Filters from "./components/HomePage/Filters";

import Header from "./components/Layout/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="flex justify-between items-center w-full border ">
        <Filters />
        <AddButtons />
      </div>
      <CardGrid />
      <HomeDetails />
      <CardCarousel />
    </div>
  );
}

export default App;

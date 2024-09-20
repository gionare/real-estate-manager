// import { useState } from 'react'
import "./App.css";
// import AddListingForm from "./components/AddListingPage/AddListing";
// import HomeDetails from "./components/HomeDetailsPage/HomeDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "./components/Layout/Template";
import HomePage from "./pages/HomePage";
import HomeDetails from "./components/HomeDetailsPage/HomeDetails";
import AddListing from "./components/AddListingPage/AddListing";

// function App() {
//   return (
//     <div>

//       <HomeDetails />

//       <AddListingForm />
//     </div>
//   );
// }

const App = () => {
  return (
    <Router>
      <Template>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homedetails/:id" element={<HomeDetails />} />
          <Route path="/AddListing" element={<AddListing />} />
        </Routes>
      </Template>
    </Router>
  );
};

export default App;

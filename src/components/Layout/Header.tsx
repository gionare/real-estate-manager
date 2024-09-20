// import React from 'react'

import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate(); // Call useNavigate
  const handleGoBackClick = () => {
    navigate("/"); // Redirect to the main page
  };
  return (
    <header className="relative h-[100px] flex flex-col justify-start items-start mb-[77px] p-[38px_0px]">
      <img src="/logo.png" alt="Logo" className="h-[24px] cursor-pointer" onClick={handleGoBackClick} />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gray-300"></div>
    </header>
  );
}

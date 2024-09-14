// import React from 'react'

export default function Header() {
  return (
    <header className="relative h-[100px] flex flex-col justify-start items-start mb-[77px] p-[38px_0px]">
      <img src="/logo.png" alt="Logo" className="h-[24px]" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gray-300"></div>
    </header>
  );
}

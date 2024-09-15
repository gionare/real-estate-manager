import React, { useState } from "react";
import Card from "../HomePage/Card"; // Import the Card component

const CardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample array of cards (you can replace this with real data later)
  const cards = Array(10).fill(null); // 10 sample cards

  // Handle left and right navigation
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 4 : currentIndex - 4);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === cards.length - 4 ? 0 : currentIndex + 4);
  };

  return (
    <div className="relative w-[1600px] border">
      {/* Title */}
      <div className=" top-0 text-[#021526] text-left text-[32px]">
        <span>ბინები მსგავს ლოკაციაზე</span>
      </div>

      {/* Left Arrow */}
      <button onClick={handlePrev} className="absolute top-1/2 left-[-35px] transform -translate-y-1/2 p-0">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.884 24.634a1.25 1.25 0 0 1-1.768 0l-8.75-8.75a1.25 1.25 0 0 1 0-1.768l8.75-8.75a1.25 1.25 0 0 1 1.768 1.768L9.268 13.75H23.75a1.25 1.25 0 1 1 0 2.5H9.268l6.616 6.616a1.25 1.25 0 0 1 0 1.768z"
            fill="#021526"
          />
        </svg>
      </button>

      {/* Carousel Container */}
      <div className="flex overflow-hidden border">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {/* Map through the cards and display them */}
          {cards.map((_, index) => (
            <div className="px-2" key={index}>
              <Card />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button onClick={handleNext} className="absolute top-1/2 right-[-35px] transform -translate-y-1/2 p-0">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.116 5.366a1.25 1.25 0 0 1 1.768 0l8.75 8.75a1.25 1.25 0 0 1 0 1.768l-8.75 8.75a1.25 1.25 0 0 1-1.768-1.768l6.616-6.616H6.25a1.25 1.25 0 1 1 0-2.5h14.482l-6.616-6.616a1.25 1.25 0 0 1 0-1.768z"
            fill="#021526"
          />
        </svg>
      </button>
    </div>
  );
};

export default CardCarousel;

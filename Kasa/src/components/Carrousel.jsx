import React, { useState } from 'react';
import './Carrousel.css';

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel">
      <img
        className="carrousel-image"
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      {pictures.length > 1 && (
        <>
          <button className="prev-button" onClick={goToPrev}>‹</button>
          <button className="next-button" onClick={goToNext}>›</button>
          <span className="carrousel-counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Carrousel;
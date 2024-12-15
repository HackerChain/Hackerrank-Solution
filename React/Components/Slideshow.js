import React, { useState } from "react";

function Slides({ slides }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent(current + 1);
  };

  const handlePrev = () => {
    setCurrent(current - 1);
  };

  const handleRestart = () => {
    setCurrent(0);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={current === 0}
          onClick={handleRestart}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={current === 0}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={current === slides.length - 1}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[current].title}</h1>
        <p data-testid="text">{slides[current].text}</p>
      </div>
    </div>
  );
}

export default Slides;

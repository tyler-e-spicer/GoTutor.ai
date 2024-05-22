import React from "react";

type BackArrowProps = {
  onBackClick: () => void;
};

function BackArrow({ onBackClick }: BackArrowProps): JSX.Element {
  const handleClick = () => {
    onBackClick();
  };

  return (
    <button onClick={handleClick} className="time-travel" id="back">
      {"-"}
    </button>
  );
}

export default BackArrow;

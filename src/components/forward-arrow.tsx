import React, { useState } from "react";

type ForwardArrowProps = {
  onForwardClick: () => void;
};

function ForwardArrow({ onForwardClick }: ForwardArrowProps): JSX.Element {
  const handleClick = () => {
    onForwardClick();
  };

  return (
    <button onClick={handleClick} className="time-travel">
      {"+"}
    </button>
  );
}

export default ForwardArrow;

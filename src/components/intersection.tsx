import React, { useState } from "react";

interface IntersectionProps {
  index: number;
  stone: string;
  name: string;
  onIntersectionClick: () => void;
}

function Intersection({
  index,
  stone,
  name,
  onIntersectionClick,
}: IntersectionProps): JSX.Element {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onIntersectionClick();
  };

  const buttonStyle = {
    // opacity: clicked ? 1 : 0,
    background: "none",
    border: "none",
    padding: 0,
  };

  return (
    <button
      className={`intersection ${name}`}
      id={index.toString()}
      style={buttonStyle}
      onClick={handleClick}
    >
      {stone}
    </button>
  );
}

export default Intersection;

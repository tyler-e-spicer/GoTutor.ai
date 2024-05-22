import React, { useState } from 'react';

function Intersection({ index, stone, name, onIntersectionClick }) {
    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
      setClicked(true);
      onIntersectionClick();
    };
  
    const buttonStyle = {
      // opacity: clicked ? 1 : 0,
      background: 'none',      
      border: 'none',         
      padding: 0,              
    };
  
    return (
      <button className={`intersection ${name}`} index={index} style={buttonStyle} onClick={handleClick}>
        {stone}
      </button>
    );
  }

  export default Intersection;
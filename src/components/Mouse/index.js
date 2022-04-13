import React, { useState } from "react";

const Mouse = ({ render }) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ height: "100vh", position: "relative" }}
    >
      {render(coordinates)}
    </div>
  );
};

export default Mouse;

import React from "react";

const GNB = () => {
  const gnbItems = [
    `High${"-"}end Car`,
    `MAINENANCE`,
    `TUNNING CAR`,
    `BODY PAINT`,
  ];
  return (
    <nav id="GNB">
      <ul>
        {gnbItems.map((things) => (
          <li key={things}>{things}</li>
        ))}
      </ul>
    </nav>
  );
};

export default GNB;

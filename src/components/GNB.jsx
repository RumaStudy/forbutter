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
          <li>{things}</li>
        ))}
      </ul>
    </nav>
  );
};

export default GNB;

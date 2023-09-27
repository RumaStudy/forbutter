import React, { useState } from "react";

const GNB = () => {
  const gnbItems = [
    `High${"-"}end Car`,
    `MAINENANCE`,
    `TUNNING CAR`,
    `BODY PAINT`,
  ];

  const [gnbActive, setGnbActive] = useState(0);
  const itemClick = (idx) => {
    setGnbActive(idx);
  };
  return (
    <nav id="GNB">
      <ul>
        {gnbItems.map((things, idx) => (
          <div className={idx === gnbActive ? "active" : ""}>
            <li
              key={things}
              className={`GNB_item ${idx === gnbActive ? "active" : ""}`}
              onClick={() => {
                itemClick(idx);
              }}
            >
              {things}
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default GNB;

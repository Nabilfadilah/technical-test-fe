// Soal 17: Mapping List
// Soal:
// Render list nama: ["Ali", "Budi", "Citra"]

import React from "react";

const names = ["Ali", "Budi", "Citra"];

const NameList = () => {
  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;

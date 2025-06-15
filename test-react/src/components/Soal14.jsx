// Soal 14: Functional Component
// Soal:
// Buat component React bernama Greeting yang menerima props name.

import React from "react";

function Greeting({name}) {
  return <h1>Hello beb, {name}!</h1>;
}

export default Greeting;

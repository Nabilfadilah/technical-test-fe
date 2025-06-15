// Soal 16: useEffect
// Soal:
// Tampilkan teks "Component Mounted" di console ketika component dimount.

import {useEffect} from "react";

const Soal16 = () => {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <div>Hello</div>;
};

export default Soal16;

// Soal 15: useState
// Soal:
// Buat tombol counter menggunakan useState.

import {useState} from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </>
  );
}

export default Counter;

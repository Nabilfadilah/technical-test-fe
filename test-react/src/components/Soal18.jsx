// Soal 18: Controlled Input
// Soal:
// Buat input teks yang tersimpan di state React.

import {useState} from "react";

const TextInput = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextInput;

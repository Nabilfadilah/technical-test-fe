// Soal 20: Validasi Form
// Soal:
// Buat form login dengan validasi bahwa input tidak boleh kosong.

import {useState} from "react";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setError("Username tidak boleh kosong");
    } else {
      setError("");
      alert("Berhasil login");
    }
  };

  return (
    <div>
      {/* bisa nanti juga pakai yup dan formik */}
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Login</button>
        <p style={{color: "red"}}>{error}</p>
      </form>
    </div>
  );
};

export default FormLogin;

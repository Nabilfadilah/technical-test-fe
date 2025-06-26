// Soal 1: Buatlah sebuah halaman React yang hanya akan me-load komponen About secara lazy ketika tombol ditekan.

import React, {Suspense, useState} from "react";
import "./App.css";

// digunakan untuk memecah kode (code splitting) dan hanya memuat komponen saat dibutuhkan
const About = React.lazy(() => import("./components/About"));

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <h1>Homepage</h1>
      <button onClick={() => setShowAbout(true)}>Tampilkan About</button>

      {/* Suspense digunakan untuk fallback saat komponen About sedang dimuat */}
      {showAbout && (
        <Suspense fallback={<p>Loading...</p>}>
          <About />
        </Suspense>
      )}
    </>
  );
}

export default App;

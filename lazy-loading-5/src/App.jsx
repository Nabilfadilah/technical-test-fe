// Soal 5: Buat Fallback Loading Custom di Suspense
// Buat custom loader saat lazy component dimuat (gunakan animasi sederhana)

import React, {Suspense} from "react";
import "./App.css";
import Loader from "./components/Loader";

const About = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
    </>
  );
}

export default App;

// Dengan membuat komponen fallback terpisah, kita bisa mengatur UI loading yang lebih menarik atau sesuai branding.

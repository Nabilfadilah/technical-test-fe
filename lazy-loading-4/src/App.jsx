// Soal 4: Lazy Load Komponen Berdasarkan Scroll (Intersection Observer)
// Buat komponen React yang akan baru dimuat saat muncul di layar menggunakan IntersectionObserver

import "./App.css";
import LazySection from "./components/LazySection";

function App() {
  return (
    <>
      <h1>Scroll ke bawah</h1>
      <div style={{height: "100vh"}} />
      <LazySection />
    </>
  );
}

export default App;

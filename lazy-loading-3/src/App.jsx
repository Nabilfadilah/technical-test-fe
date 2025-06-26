// Soal 3: Lazy Loading Gambar (Image Lazy Load)
// Buatlah komponen React yang dapat melakukan lazy load gambar menggunakan HTML <img loading="lazy" />

import "./App.css";
import LazyImage from "./components/LazyImage";

function App() {
  return (
    <>
      <h1>Galeri Gambar</h1>
      <LazyImage src="https://placehold.co/300x200" alt="Gambar 1" />
      <LazyImage src="https://placehold.co/600x400" alt="Gambar 2" />
      <LazyImage src="https://placehold.co/600x400" alt="Gambar 3" />
    </>
  );
}

export default App;

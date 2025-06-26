// Soal 3: Lazy Loading Gambar (Image Lazy Load)
// Buatlah komponen React yang dapat melakukan lazy load gambar menggunakan HTML <img loading="lazy" />

import React from "react";

function LazyImage({src, alt}) {
  return (
    <img
      src={src}
      alt={alt}
      // adalah fitur native HTML yang menunda loading gambar sampai benar-benar terlihat di viewport
      loading="lazy" // Fitur HTML5 untuk lazy loading gambar
      width="300"
      height="200"
      style={{display: "block", marginBottom: "20px"}}
    />
  );
}

export default LazyImage;

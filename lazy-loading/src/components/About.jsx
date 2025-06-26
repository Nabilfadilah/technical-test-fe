// Soal 1: Implementasi Dasar Lazy Loading Komponen
// Buatlah sebuah halaman React yang hanya akan me-load komponen About secara lazy ketika tombol ditekan.

import React from "react";

const About = () => {
  return (
    <div>
      <p>Ini adalah halaman About yang dimuat secara lazy</p>
    </div>
  );
};

export default About;

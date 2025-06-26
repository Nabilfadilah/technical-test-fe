// Soal 4: Lazy Load Komponen Berdasarkan Scroll (Intersection Observer)
// Buat komponen React yang akan baru dimuat saat muncul di layar menggunakan IntersectionObserver

import React, {useRef, useState, useEffect} from "react";

function LazySection() {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // IntersectionObserver, adalah API browser yang mendeteksi elemen saat muncul di viewport
    const observer = new IntersectionObserver(
      // isIntersecting akan menjadi true ketika elemen masuk ke layar, dan baru saat itu render dilakukan
      ([entry]) => setIsVisible(entry.isIntersecting),
      {threshold: 0.1}
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        minHeight: "200px",
        margin: "100px 0",
        background: isVisible ? "lightgreen" : "lightgray",
      }}
    >
      {isVisible ? <p>Konten telah muncul!</p> : <p>Loading Section...</p>}
    </div>
  );
}

export default LazySection;

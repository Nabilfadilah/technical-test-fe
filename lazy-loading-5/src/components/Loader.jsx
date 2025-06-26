// Soal 5: Buat Fallback Loading Custom di Suspense
// Buat custom loader saat lazy component dimuat (gunakan animasi sederhana)

export default function Loader() {
  return (
    <div style={{textAlign: "center", padding: "20px"}}>
      <span className="loader">⏳ Memuat konten...</span>
    </div>
  );
}

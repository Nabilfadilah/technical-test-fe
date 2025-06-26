// Soal 2: Lazy Loading dengan Routing
// Implementasikan lazy loading saat navigasi antar halaman menggunakan React Router v6.

import "./App.css";
import React, {Suspense} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  const Home = React.lazy(() => import("./pages/Home"));
  const Contact = React.lazy(() => import("./pages/Contact"));

  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/contact">Contact</Link>
        </nav>

        {/* Suspense membungkus Routes agar fallback bisa tampil saat loading */}
        <Suspense fallback={<div>Loading halaman...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;

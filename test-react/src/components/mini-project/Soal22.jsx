// ✅ Soal 22: Responsive Navbar dengan Tailwind CSS
import {useState} from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className={`md:flex gap-4 ${menuOpen ? "block" : "hidden"}`}>
          <a href="#" className="block py-1 md:py-0">
            Home
          </a>
          <a href="#" className="block py-1 md:py-0">
            About
          </a>
          <a href="#" className="block py-1 md:py-0">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="bg-white text-black px-6 py-4 shadow-lg flex justify-between items-center font-[Poppins] relative z-50">
      <h1 className="text-2xl font-bold text-yellow-500">Krysalis</h1>

      <ul className="flex gap-8 items-center">
        <li className="relative group">
          <button
            className="flex items-center gap-1 font-semibold hover:text-yellow-500 transition"
            onClick={() => setAboutOpen(!aboutOpen)}
          >
            ABOUT <ChevronDown size={16} />
          </button>

          {aboutOpen && (
            <ul className="absolute bg-white text-black mt-2 rounded-lg shadow-md py-2 w-48 border z-50">
              <li>
                <Link
                  to="/about-school"
                  className="block px-4 py-2 hover:bg-yellow-100"
                  onClick={() => setAboutOpen(false)}
                >
                  About School
                </Link>
              </li>
              <li>
                <Link
                  to="/vision-mission"
                  className="block px-4 py-2 hover:bg-yellow-100"
                  onClick={() => setAboutOpen(false)}
                >
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/journey"
                  className="block px-4 py-2 hover:bg-yellow-100"
                  onClick={() => setAboutOpen(false)}
                >
                  Our Journey
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/contact" className="hover:text-yellow-500 font-semibold">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

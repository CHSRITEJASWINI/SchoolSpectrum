import { useState } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-black text-white p-4 flex gap-6 items-center">
      <Link href="/" className="hover:underline">Home</Link>

      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="cursor-pointer"
        >
          About ▾
        </button>

        {showDropdown && (
          <div className="absolute bg-black rounded-lg shadow-lg mt-2 z-50">
            <Link
              href="/about-krysalis"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setShowDropdown(false)}
            >
              About Krysalis
            </Link>
            <Link
              href="/chairman"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setShowDropdown(false)}
            >
              Chairman
            </Link>
            <Link
              href="/managing-director"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setShowDropdown(false)}
            >
              Managing Director
            </Link>
            <Link
              href="/principal"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setShowDropdown(false)}
            >
              Principal
            </Link>
            <Link
              href="/mission"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setShowDropdown(false)}
            >
              Our Mission
            </Link>
            <Link
              href="/vision"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setShowDropdown(false)}
            >
              Our Vision
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

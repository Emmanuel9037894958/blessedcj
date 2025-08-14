import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoName from "../assets/IMG-20250209-WA0050-removebg-preview.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Contact", path: "/Contact" },
    { name: "Media", path: "/Media" },
    { name: "Sustainability", path: "/Sustainability" },
    { name: "Our Services", path: "/OurServices" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-gray-300 to-gray-700 shadow-md h-20">
      
      {/* Header Row with logo and toggle */}
      <div className="flex items-center justify-between py-5 md:px-6 pr-5">
        <Link to="/" className="flex items-center">
          <img src={logoName} alt="Company Logo" className="w-40 absolute" />
        </Link>

        <nav className="hidden md:flex space-x-6 text-white font-semibold text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-green-500 transition duration-200 xl:text-2xl"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden p-1 rounded-md bg-gray-200 text-gray-800 w-12 h-10"
        >
          {menuOpen ? <X className="w-6 h-6 ml-2" /> : <Menu className="w-6 h-6 ml-2" />}
        </button>
      </div>

     
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white text-gray-900 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 shadow-lg md:hidden`}
      >
        {/* Top bar inside the slide menu */}
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <img src={logoName} alt="Company Logo" className="w-28" />
          <button onClick={toggleMenu}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-4 py-4 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:text-green-700"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}

export default NavBar;





import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to refresh the page
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <nav className="bg-[#8B5E3C] text-black p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Styling */}
        <h1 
          className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-purple-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-2 shadow-lg"
          onClick={refreshPage} // Add onClick event to refresh the page
        >
          EmpowerHer
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg font-semibold">
          <li>
            <a 
              href="#" 
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-y-1"
            >
              Traditional Clothes
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-y-1"
            >
              Handmade Accessories
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-y-1"
            >
              Home Decor
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-y-1"
            >
              Skincare Products
            </a>
          </li>
        </ul>

        {/* Search & Account */}
        <div className="hidden md:flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="Search..." 
            className="px-3 py-1 rounded-md text-black focus:outline-none"
          />
          <button className="bg-yellow-400 px-3 py-1 rounded-md hover:bg-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105">
            Search
          </button>
          <a 
            href="#" 
            className="font-semibold hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Account
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#8B5E3C] text-lg font-semibold py-4 space-y-4">
          <li>
            <a 
              href="#" 
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-y-1"
            >
              Traditional Clothes
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-y-1"
            >
              Handmade Accessories
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-y-1"
            >
              Home Decor
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-y-1"
            >
              Skincare Products
            </a>
          </li>
          <li>
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-3 py-1 rounded-md text-black focus:outline-none"
            />
          </li>
          <li>
            <a 
              href="#" 
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-y-1"
            >
              Account
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
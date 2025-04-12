import { useState } from "react";
import "./Navbar.css";
import { GiClothes, GiNecklace, GiWoodenChair, GiSoap } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo with proper spacing */}
        <div className="logo-wrapper">
          <h1 className="logo">EmpowerHer</h1>
        </div>

        {/* Desktop Navigation with icons */}
        <ul className="desktop-menu">
          <li>
            <a href="#" className="nav-link">
              <GiClothes className="nav-icon" />
              <span>Traditional Clothes</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <GiNecklace className="nav-icon" />
              <span>Handmade Accessories</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <GiWoodenChair className="nav-icon" />
              <span>Home Decor</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <GiSoap className="nav-icon" />
              <span>Skincare Products</span>
            </a>
          </li>
        </ul>

        {/* Search & Account */}
        <div className="desktop-actions">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button className="search-button">
              <span className="search-icon">🔍</span>
            </button>
          </div>
          <a href="#" className="account-link">
            <span className="account-icon">👤</span>
            <span>Account</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#" className="mobile-nav-link">
              <GiClothes className="mobile-nav-icon" />
              <span>Traditional Clothes</span>
            </a>
          </li>
          <li>
            <a href="#" className="mobile-nav-link">
              <GiNecklace className="mobile-nav-icon" />
              <span>Handmade Accessories</span>
            </a>
          </li>
          <li>
            <a href="#" className="mobile-nav-link">
              <GiWoodenChair className="mobile-nav-icon" />
              <span>Home Decor</span>
            </a>
          </li>
          <li>
            <a href="#" className="mobile-nav-link">
              <GiSoap className="mobile-nav-icon" />
              <span>Skincare Products</span>
            </a>
          </li>
          <li className="mobile-search-container">
            <input
              type="text"
              placeholder="Search..."
              className="mobile-search-input"
            />
            <button className="mobile-search-button">Search</button>
          </li>
          <li>
            <a href="#" className="mobile-account-link">
              <span className="account-icon">👤</span>
              <span>Account</span>
            </a>
          </li>
        <li className="nav-item">
          <a href="#" className="nav-link cart-link">
            <span className="nav-icon cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
            <span className="cart-badge">3</span>
          </a>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Eng");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedLanguage(e.target.value);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCurrency(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const menuItems = ["Home", "Shop", "Blog", "About Us", "Contact Us"];

  return (
    <nav className="shadow-lg">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-gray-50 border-b text-gray-600 text-sm">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-lg text-primary" />
          <span className="font-medium">
            Store Location: Amin Model Town, Savar, Dhaka
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="bg-transparent border border-gray-300 text-gray-600 rounded-md p-1"
          >
            <option value="Eng">Eng</option>
            <option value="Bangla">Bangla</option>
          </select>
          <select
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="bg-transparent border border-gray-300 text-gray-600 rounded-md p-1"
          >
            <option value="USD">USD</option>
            <option value="BDT">BDT</option>
          </select>
          <div className="border-l h-4" />
          <div className="space-x-1">
            <Link to="/login" className="hover:text-primary transition-colors">
              Login
            </Link>
            <span>/</span>
            <Link to="/register" className="hover:text-primary transition-colors">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <Link to="/" className="w-24 text-slate-700 font-bold tracking-wider">
          Logo Here
        </Link>

        <div className="relative hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-primary"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white bg-primary rounded-md">
            <FaSearch />
          </button>
        </div>

        <div className="relative flex items-center">
          <HiOutlineShoppingCart className="w-8 h-8 text-gray-600" />
          <div className="absolute right-0 top-0 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            2
          </div>
        </div>

        <button onClick={toggleMobileMenu} className="md:hidden">
          {isMobileMenuOpen ? (
            <AiOutlineClose className="text-2xl text-primary" />
          ) : (
            <AiOutlineMenu className="text-2xl text-primary" />
          )}
        </button>
      </div>

      {/* Bottom Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-3 bg-gray-50 border-t">
        <div className="flex space-x-6">
          {menuItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-primary" : "text-gray-600"
                } hover:text-primary transition-colors`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <LuPhoneCall className="text-primary" />
          <p className="text-sm text-gray-600">(+880) 1701 131 464</p>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-50 flex flex-col px-4 py-2 space-y-3">
          {menuItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-600 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </NavLink>
          ))}

          {/* Mobile Language and Currency Selectors */}
          <div className="flex space-x-4">
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="w-1/2 bg-white border border-gray-300 rounded-md p-2"
            >
              <option value="Eng">Eng</option>
              <option value="Bangla">Bangla</option>
            </select>
            <select
              value={selectedCurrency}
              onChange={handleCurrencyChange}
              className="w-1/2 bg-white border border-gray-300 rounded-md p-2"
            >
              <option value="USD">USD</option>
              <option value="BDT">BDT</option>
            </select>
          </div>

          {/* Mobile Login/Register */}
          <div className="flex space-x-2 mt-2">
            <Link
              to="/login"
              className="text-primary hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <span>/</span>
            <Link
              to="/register"
              className="text-primary hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

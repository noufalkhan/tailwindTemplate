import { useState } from "react";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-light-background dark:bg-dark-background shadow-lg">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="/" className="flex items-center text-lg font-semibold text-light-text dark:text-dark-text">
              My Logo
            </a>
          </div>
          <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">
              Home
            </a>
            <a href="#" className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">
              About
            </a>
            <a href="#" className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">
              Services
            </a>
            <a href="#" className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">
              Contact
            </a>
           
          </div>
          <div>
          <ThemeToggler />
          </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-light-text dark:text-dark-text focus:outline-none">
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">
              Home
            </a>
            <a href="#" className="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">
              About
            </a>
            <a href="#" className="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">
              Services
            </a>
            <a href="#" className="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

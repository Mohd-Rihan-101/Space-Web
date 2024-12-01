import  { useState } from "react";
import Logo from "../../assets/logo.png";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg shadow-lg"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3 text-white font-bold text-2xl">
            <img src={Logo} alt="Logo" className="w-12" />
            <span>TCJ-SPACE</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-white text-lg font-semibold">
              <li className="hover:text-blue-400 transition duration-300">
                <a href="#">About</a>
              </li>
              <li className="hover:text-blue-400 transition duration-300">
                <a href="#">Technology</a>
              </li>
              <li className="hover:text-blue-400 transition duration-300">
                <a href="#">Galaxy</a>
              </li>
              <li className="hover:text-blue-400 transition duration-300">
                <a href="#">Satellite</a>
              </li>
            </ul>
            <button className="ml-6 text-white bg-blue-600 hover:bg-blue-700 transition duration-300 px-5 py-2 rounded-md shadow">
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <ul className="flex flex-col items-center gap-6 py-6 text-white text-lg">
              <li className="hover:text-blue-400 transition duration-300">
                <a href="#">About</a>
              </li>
              <li className="hover:text-blue-400 transition duration-300">
                <a href="#">Technology</a>
              </li>
              <li className="hover:text-blue-400 transition duration-300">
                <a href="#">Galaxy</a>
              </li>
              <li className="hover:text-blue-400 transition duration-300">
                <a href="#">Satellite</a>
              </li>
              <button className="text-white bg-blue-600 hover:bg-blue-700 transition duration-300 px-6 py-2 rounded-md mt-4">
                Login
              </button>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

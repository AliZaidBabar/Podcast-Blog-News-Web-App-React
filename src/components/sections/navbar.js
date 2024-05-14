import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // Import Link
import '../style.css';
import SearchIcon from '../images/search-icon.png';
import Brainlogo from '../images/brain-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black shadow-md mb-1">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2">
          <Link className="ml-4" to="/"><img src={Brainlogo} alt="Brain Logo" /></Link> {/* Use Link component */}
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {isOpen ? (
              <FaTimes onClick={toggleNavbar} className="text-black cursor-pointer" size={24} />
            ) : (
              <FaBars onClick={toggleNavbar} className="text-black cursor-pointer" size={24} />
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link className="nav-link" to="/">HOME</Link>
            <Link className="nav-link" to="/about">ABOUT</Link>
            <Link className="nav-link" to="/team">TEAM</Link>
            <Link className="nav-link" to="/Quiz">QUIZZES</Link>
            <Link className="nav-link" to="/blog">BLOG</Link>
            <Link className="nav-link" to="/contact">CONTACT</Link>
            <Link className="nav-link" to="/ebook">E-BOOK</Link>
          </div>

          {/* Search and Sign-in Button */}
          <div className="flex items-center">
            <FiSearch className="text-black md:block hidden mr-4" size={24} />
            <Link type="button" to='/login' className="bg-green-500 text-white px-4 py-2 rounded-md ml-4 md:ml-0">SIGN IN</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center">
              <li className="mx-4"><Link to="/">HOME</Link></li>
              <li className="mx-4"><Link to="/about">ABOUT</Link></li>
              <li className="mx-4"><Link to="/team">TEAM</Link></li>
              <li className="mx-4"><Link to="/quizzes">QUIZZES</Link></li>
              <li className="mx-4"><Link to="/blog">BLOG</Link></li>
              <li className="mx-4"><Link to="/contact">CONTACT</Link></li>
              <li className="mx-4"><Link to="/ebook">E-BOOK</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

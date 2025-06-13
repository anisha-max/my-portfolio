import React, { useEffect, useState } from 'react';
import { FaBars, FaPhone, FaAward } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Header() {
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
     { name: 'Github', to: '/github' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    if (isMobile) setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className='fixed top-0 left-0 right-0 bg-gradient-to-r from-sky-600 via-sky-800 to-sky-900 text-white shadow-md z-50'>
        <div className='flex items-center justify-between h-14 px-5 max-w-7xl mx-auto'>
          <Link to="/" className="text-xl font-bold">
          <img src='Anisha.png' className='w-[50px] rounded-full'></img></Link>
          <ul className='hidden md:flex gap-6'>
            {navLinks.map(({ name, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-sky-300 transition"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex gap-3'>
            <Link to="/achivements" className="text-xl hover:text-sky-300"><FaAward /></Link>
            <Link to="/contact" className="text-xl hover:text-sky-300"><FaPhone /></Link>
     
            <button className="md:hidden text-2xl" onClick={toggleMenu}>
              {menuOpen ? <IoCloseSharp /> : <FaBars />}
            </button>
          </div>
        </div>

  
        {menuOpen && isMobile && (
          <ul className="flex flex-col gap-4 px-5 pb-4 bg-sky-900 md:hidden">
            {navLinks.map(({ name, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="block py-1 hover:text-sky-300 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}

export default Header;

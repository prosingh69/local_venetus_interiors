import React, { useState } from 'react';
import { X, Info, Briefcase, LayoutGrid, Route } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/Contact";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLinkClasses = ({ isActive }) => {
    return `transition-colors text-[16px] lg:text-[18px] hover:text-[#B74B21] font-semibold ${
      isActive ? 'text-[#B74B21] font-bold' : 'text-gray-800'
    }`;
  };

  const sidebarLinkClasses = ({ isActive }) => {
    return `flex items-center gap-4 transition-colors hover:text-[#B74B21] font-semibold text-lg ${
      isActive ? 'text-[#B74B21] font-bold' : 'text-gray-800'
    }`;
  };

  return (
    <>
      
      <nav className='sticky top-0 z-40 flex flex-row-reverse md:flex-row justify-between items-center px-4 py-2 md:px-8 md:py-3 bg-[#F9F5F3] border-b border-[#F3E5DE] shadow-sm'>

        
        <NavLink to={"/"} className="flex gap-3 justify-center items-center z-50">
          <img src="/logoo.webp" className='h-12 md:h-14 w-auto object-contain' alt="Venetus Interiors logo" />
          <h1 className='text-[#B74B21] font-bold text-xl md:text-2xl tracking-tight'>Venetus Interiors</h1>
        </NavLink>

        
        <div className='hidden md:flex gap-6 lg:gap-10 items-center'>
          <NavLink to="/About" className={navLinkClasses}>About</NavLink>
          <NavLink to="/Services" className={navLinkClasses}>Services</NavLink>
          <NavLink to="/Portfolio" className={navLinkClasses}>Portfolio</NavLink>
          <NavLink to="/Process" className={navLinkClasses}>Process</NavLink>

          {isContactPage ? (
            <span className='text-[#B74B21] font-semibold text-[18px] flex items-center gap-2'>
              Contact
            </span>
          ) : (
            <NavLink to="/Contact" className='bg-[#B74B21] py-2 lg:py-2.5 px-5 lg:px-6 rounded-lg text-amber-50 font-bold cursor-pointer hover:bg-[#9c3e1b] transition-all shadow-md'>
              Get Started
            </NavLink>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className='md:hidden relative w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-200/50 transition-colors duration-200 focus:outline-none z-50'
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-6 h-0.5 bg-[#B74B21] rounded-full transition-all duration-300 ease-in-out ${isSidebarOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
              <span className={`absolute left-0 w-6 h-0.5 bg-[#B74B21] rounded-full transition-all duration-300 ease-in-out ${isSidebarOpen ? 'opacity-0 top-2' : 'top-2'}`}></span>
              <span className={`absolute left-0 w-6 h-0.5 bg-[#B74B21] rounded-full transition-all duration-300 ease-in-out ${isSidebarOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
          </div>
        </button>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity backdrop-blur-sm"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-70 bg-[#F9F5F3] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-[#F3E5DE]">
          <span className="text-[#B74B21] font-bold text-xl">Menu</span>
          <button
            onClick={toggleSidebar}
            className="p-2 bg-white rounded-full text-gray-800 hover:text-[#B74B21] hover:bg-[#F3E5DE] transition-colors shadow-sm"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6 overflow-y-auto mt-2">
          <NavLink to="/About" className={sidebarLinkClasses} onClick={toggleSidebar}>
            <Info size={22} className="text-[#B74B21]" />
            About
          </NavLink>
          <NavLink to="/Services" className={sidebarLinkClasses} onClick={toggleSidebar}>
            <Briefcase size={22} className="text-[#B74B21]" />
            Services
          </NavLink>
          <NavLink to="/Portfolio" className={sidebarLinkClasses} onClick={toggleSidebar}>
            <LayoutGrid size={22} className="text-[#B74B21]" />
            Portfolio
          </NavLink>
          <NavLink to="/Process" className={sidebarLinkClasses} onClick={toggleSidebar}>
            <Route size={22} className="text-[#B74B21]" />
            Process
          </NavLink>

          <div className="mt-6 pt-6 border-t border-[#F3E5DE]">
            <NavLink
              to="/Contact"
              className='block w-full text-center bg-[#B74B21] py-3 px-6 rounded-[10px] text-amber-50 font-bold hover:bg-[#9c3e1b] transition-all shadow-md'
              onClick={toggleSidebar}
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
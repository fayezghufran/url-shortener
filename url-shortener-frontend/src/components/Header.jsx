import React from "react";
import { FaLink } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 flex items-center justify-between border-b border-[#D6CDA4] px-6 py-4 bg-[#F7F6F2] z-50">
      <div className="flex items-center gap-3 text-[#333]">
        <div className="flex items-center justify-center w-8 h-8 bg-[#D6CDA4] text-[#4B6043] rounded-lg">
          <FaLink className="text-lg" />
        </div>
        <h1 className="text-[#4B6043] text-xl font-extrabold tracking-tight">
          URL Shortener
        </h1>
      </div>

      <a
        href="#"
        className="text-[#F7F6F2] bg-[#829460] text-sm font-semibold border border-[#829460] px-4 py-1.5 rounded-lg hover:bg-[#6F8250] transition-all"
      >
        GitHub
      </a>
    </header>
  );
};

export default Header;

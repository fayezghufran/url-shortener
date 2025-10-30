import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 inset-x-0 bg-[#F7F6F2] border-t border-[#D6CDA4] py-6 text-center text-sm text-[#6B705C] z-50">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="font-medium">Created by Fayez Ghufran</span>
        <span className="hidden sm:inline text-[#A0A08B]">·</span>
        <a
          href="#"
          className="text-[#829460] hover:text-[#6F8250] font-medium transition-colors"
        >
          GitHub
        </a>
        <span className="hidden sm:inline text-[#A0A08B]">·</span>
        <span className="font-medium">© 2025 URL Shortener</span>
      </div>
    </footer>
  );
};

export default Footer;

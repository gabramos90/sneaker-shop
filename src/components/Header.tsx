import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
        <span>logo</span>
      </div>
      <nav className="flex gap-6">
        <span>home</span>
        <span>shop</span>
        <span>blog</span>
        <span>contact</span>
      </nav>
      <div className="flex gap-2 items-center">
        <span>R$ 499.00</span>
        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

export default function Header() {
  return (
    <header className="w-full h-[15vh] bg-white flex items-center justify-center px-6 shadow-md">
      <img 
        src="/whitelogo.png" 
        alt="Contor logo" 
        className="h-[70%] object-contain"
      />
    </header>
  );
}
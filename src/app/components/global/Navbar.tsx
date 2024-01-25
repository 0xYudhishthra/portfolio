"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 relative flex items-center justify-between bg-white p-4 md:pl-16 md:pt-10 md:pr-16">
      {/* Left section: Hamburger menu and logo */}
      <div className="flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none z-20 mr-5">
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-black transform transition duration-500 ${
                isMenuOpen ? "rotate-45 translate-y-3.0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-black transition-opacity duration-500 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-black transform transition duration-500 ${
                isMenuOpen ? "-rotate-45 -translate-y-3.0" : ""
              }`}
            ></span>
          </div>
        </button>
        <div
          className={`transition-opacity duration-500 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <Link href="/">
            <Image src={Logo} alt="Logo" width={50} height={50} priority />
          </Link>
        </div>
      </div>

      {/* Center section: Navigation links with responsive design */}
      <div
        className={`fixed inset-0 z-1 flex-col items-center justify-center bg-white p-4 overflow-auto transition-transform transform ${
          isMenuOpen
            ? "flex opacity-100 scale-100"
            : "hidden opacity-0 scale-95"
        } ease-out duration-500`}
      >
        {/* Updated link styles here */}
        <Link href="/about" className="menu-item">
          about
        </Link>
        <Link href="/experience" className="menu-item">
          experience
        </Link>
        <Link href="/projects" className="menu-item">
          projects
        </Link>
        {/* Add more links as needed */}
      </div>

      {/* Right section: Current site location */}
      <div className="hidden md:block">
        <p className="text-gray-600 text-xl">{pathname}</p>
      </div>
    </nav>
  );
}

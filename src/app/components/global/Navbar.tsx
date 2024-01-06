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
    <nav className="relative flex items-center justify-between bg-white p-4 md:pl-16 md:pt-10 md:pr-16">
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
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute md:relative flex-col md:flex-row items-center justify-center top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent z-10 transition-all ease-out duration-500`}
      >
        <Link
          href="/about"
          className="px-4 py-2 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-700"
        >
          about
        </Link>
        <Link
          href="/experience"
          className="px-4 py-2 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-700"
        >
          experience
        </Link>
        <Link
          href="/projects"
          className="px-4 py-2 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-700"
        >
          projects
        </Link>
      </div>

      {/* Right section: Current site location */}
      <div className="hidden md:block">
        <p className="text-gray-600 text-xl">{pathname}</p>
      </div>
    </nav>
  );
}

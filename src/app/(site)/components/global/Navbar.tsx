"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white pl-16 pt-16 pr-16">
      {/* Left section: Hamburger menu and logo */}
      <div className="flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none mr-5">
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
        <div>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={50} height={50} />
          </Link>
        </div>
      </div>

      {/* Center section: Navigation links */}
      <div
        className={`flex justify-center transition-all ease-out duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        } ${isMenuOpen ? "visible" : "invisible"} space-x-5`}
        style={{ transitionProperty: "opacity, visibility" }}
      >
        <Link href="/about" className="hover:text-gray-700">
          about
        </Link>
        <Link href="/experience" className="hover:text-gray-700">
          experience
        </Link>
        <Link href="/projects" className="hover:text-gray-700">
          projects
        </Link>
        <Link href="/blog" className="hover:text-gray-700">
          blog
        </Link>
        <Link href="/contact" className="hover:text-gray-700">
          contact
        </Link>
      </div>

      {/* Right section: Current site location */}
      <div>
        <p className="text-gray-600 text-xl">{location.pathname}</p>
      </div>
    </nav>
  );
}

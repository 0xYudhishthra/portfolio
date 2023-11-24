"use client";

// Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import Logo from "../icons/logo.png";
import { useRef } from "react";

export default function Navbar() {
  // Use a ref for the menu element
  const menuRef = useRef();

  // Toggle the visibility of the menu
  const toggleNavbar = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("hidden");
    }
  };

  return (
    <header className="py-6 px-6 md:px-16 border-b border-zinc-800 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <a>
            <Image src={Logo} width={25} height={25} alt="logo" />
          </a>
        </Link>
        {/* Hamburger icon */}
        <div onClick={toggleNavbar} className="cursor-pointer md:hidden">
          <span className="text-3xl">☰</span>
        </div>
        {/* Navigation menu */}
        <nav id="nav-menu" className="hidden md:flex">
          <ul className="flex flex-col md:flex-row items-center gap-x-8">
            <li>
              <Link href="/about">
                <a className="hover:text-purple-400 transition duration-300">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <a className="hover:text-purple-400 transition duration-300">
                  Experience
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="hover:text-purple-400 transition duration-300">
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="hover:text-purple-400 transition duration-300">
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="hover:text-purple-400 transition duration-300">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

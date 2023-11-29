"use client";

import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "./components";
import { ParallaxProvider } from "react-scroll-parallax";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Navbar />
        <ParallaxProvider>{children}</ParallaxProvider>
        <Footer />
      </body>
    </html>
  );
}

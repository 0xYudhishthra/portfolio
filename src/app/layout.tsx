"use client";

import "./globals.css";
import { Footer, Navbar } from "./components";
import { ParallaxProvider } from "react-scroll-parallax";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white`}>
        <Navbar />
        <ParallaxProvider>{children}</ParallaxProvider>
        <Footer />
      </body>
    </html>
  );
}

import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yudhishthra Sugumaran",
  description: "A personal portfolio site built with Sanity and Next.js",
  openGraph: {
    images: "add-your-open-graph-image-url-here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

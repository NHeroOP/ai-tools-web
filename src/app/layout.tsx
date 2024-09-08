import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { themeChange } from 'theme-change'
import { useEffect } from "react";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dracula">
      <body className={inter.className}>
        <div className="min-h-screen text-gray-300 bg-gray-900">
          <MenuBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

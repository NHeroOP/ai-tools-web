import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MenuBar, Footer } from "@/components/";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Tools",
  description: "A collection of AI tools for anyone.",
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

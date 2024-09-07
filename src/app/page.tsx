"use client"

import { Navbar } from "@/components";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function Home() {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className="w-screen h-screen">
      <Navbar />
    </div>
  );
}

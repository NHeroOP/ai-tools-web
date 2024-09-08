"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Cpu, Menu, X } from 'lucide-react'

export default function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <Cpu className="h-6 w-6 mr-2 text-blue-400" />
          <span className="font-bold text-xl text-white">AI Tools</span>
        </Link>
        <nav className="ml-auto gap-4 sm:gap-6 hidden md:flex">
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#tools">
            Tools
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#about">
            About
          </Link>
        </nav>
        <Button
          className="ml-auto md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>
      {isMenuOpen && (
        <nav className="flex flex-col gap-4 p-4 bg-gray-800 md:hidden">
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#tools">
            Tools
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#about">
            About
          </Link>
        </nav>
      )}
    </>
  )
}

import { Code2, Cpu, Github, Globe } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-900 border-t border-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Cpu className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-white">AI Tools Demo</span>
          </div>

          <div>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} AI Tools. A portfolio project by <Link href={"https://github.com/NHeroOP"}>NHero</Link>.</p>
          </div>

          <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link className="text-sm hover:text-blue-400 transition-colors flex items-center" href="https://github.com/NHeroOP">
              <Github className="h-5 w-5 mr-1" />
              GitHub
            </Link>
            <Link className="text-sm hover:text-blue-400 transition-colors flex items-center" href="https://github.com/NHeroOP/ai-tools-web">
              <Code2 className="h-5 w-5 mr-1" />
              Project Repo
            </Link>
            <Link className="text-sm hover:text-blue-400 transition-colors flex items-center" href="https://www.nhero.tech/">
              <Globe className="h-5 w-5 mr-1" />
              Portfolio
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

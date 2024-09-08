'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cpu, Image, Menu, MessageSquare, X, Github, Globe, Code2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ReactNode, useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen text-gray-300 bg-gray-900">
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
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  AI Integration
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Explore our collection of AI-powered tools, each demonstrating unique capabilities in text generation, image analysis, and chatbot functionality.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-blue-600 text-white hover:bg-blue-700" asChild>
                  <Link href="#tools">Explore Tools</Link>
                </Button>
                <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-gray-900" asChild>
                  <Link href="#about">About Project</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="AI Integration Illustration"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="/img/ai-brain.jpg"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="tools" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 flex justify-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
            AI Tools
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ToolCard
              icon={<Brain className="w-6 h-6 mr-2" />}
              title="Text Generation"
              desc={"Harness the power of AI to create compelling content. Our text generation tool can help you with\neverything from creative writing to professional reports."}
              btnClass="from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 focus:ring-teal-500"
              btnName="Generate Text"
            />
            <ToolCard
              icon={<Image className="w-6 h-6 mr-2" />}
              title="Image Analysis"
              desc={"Unlock insights from your images with our AI-powered analysis tool. Detect objects, recognize faces,\nand extract valuable information from visual data."}
              btnClass="from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:ring-pink-500"
              btnName="Analyze Images"
            />
            <ToolCard
              icon={<MessageSquare className="w-6 h-6 mr-2" />}
              title="AI Chatbot"
              desc={"Experience the future of conversation with our AI chatbot. Engage in natural language interactions\nand get instant responses to your queries."}
              btnClass="from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:ring-purple-500"
              btnName="Start Chatting"
            />
            
          </div>
        </div>
      </section>
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
            About This Project
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-300 md:text-xl mb-6 leading-relaxed">
              This AI Tools Demo is a lightweight project created to showcase the integration of various AI technologies into web applications.
              It demonstrates the practical implementation of cutting-edge AI capabilities in a user-friendly interface.
            </p>
            <p className="text-gray-300 md:text-xl leading-relaxed">
              Each tool in this demo highlights a different aspect of AI, from natural language processing to computer vision.
              By exploring these tools, you can gain insights into the potential of AI to transform various industries and workflows.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Skills Demonstrated
              </h2>
              <ul className="text-gray-300 md:text-xl space-y-2">
                <li>API Integration with AI Services</li>
                <li>React Component Development</li>
                <li>State Management in Complex UIs</li>
                <li>Responsive Design for All Devices</li>
                <li>Error Handling in AI-powered Applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full py-6 bg-gray-900 border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <Cpu className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-white">AI Tools Demo</span>
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
          <div className="mt-8 border-t border-gray-800 pt-8 flex justify-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} AI Tools. A portfolio project by <Link href={"https://github.com/NHeroOP"}>NHero</Link>.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


export function ToolCard({ icon, title, desc, btnClass, btnName }: { icon: ReactNode, title: string, desc: string, btnClass: string, btnName: string }) {
  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center text-blue-400">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-300 leading-relaxed">
          {desc}
        </p>
        <Button
          className={`w-full bg-gradient-to-r text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${btnClass}`}
          asChild
        >
          <Link href="/chatbot" className="flex items-center justify-center">
            {btnName}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
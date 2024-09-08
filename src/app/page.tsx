'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ToolCard } from "@/components/"
import { Brain, Image, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <>
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
                  <Link href="https://github.com/NHeroOP" target="_blank">About Me</Link>
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
              title="Text Summarizer"
              desc={"A powerful text summarizer that condenses lengthy content into concise, accurate summaries.\n Ideal for quickly grasping key insights from articles, documents, and reports."}
              btnClass="from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 focus:ring-teal-500"
              btnName="Summarize Text"
              page="/text-summarizer"
            />
            <ToolCard
              icon={<Image className="w-6 h-6 mr-2" />}
              title="lorem ipsum"
              desc={"lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSuspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."}
              btnClass="from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:ring-pink-500"
              btnName="Lorem Ipsum"
              page=""
            />
            <ToolCard
              icon={<MessageSquare className="w-6 h-6 mr-2" />}
              title="Lorem ip"
              desc={"lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSuspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."}
              btnClass="from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:ring-purple-500"
              btnName="Lorem Ipsum"
              page=""
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
    </>
  )
}



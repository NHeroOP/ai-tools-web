import { ToolCard } from '@/components'
import { Brain, Image, MessageSquare } from 'lucide-react'
import React from 'react'

export default function Tools() {
  return (
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
  )
}

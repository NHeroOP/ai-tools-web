import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ToolCard({ icon, title, desc, btnClass, btnName, page}: { icon: ReactNode, title: string, desc: string, btnClass: string, btnName: string, page: string }) {
  return (
    <Card className="bg-gray-900 border-gray-700 flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center text-blue-400">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full flex flex-col justify-between">
        <p className="mb-4 text-gray-300 leading-relaxed ">
          {desc}
        </p>
        <Button
          className={`w-full bg-gradient-to-r text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${btnClass}`}
          asChild
        >
          <Link href={page} className="flex items-center justify-center" target="_blank">
            {btnName}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
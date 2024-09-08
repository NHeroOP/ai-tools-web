'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import axios from 'axios'

export default function TextSummarizer() {
  const [inputText, setInputText] = useState('')
  const [summaries, setSummaries] = useState(Array())
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const { data } = await axios.post("api/summarize", {text: inputText})

      if (!data.summary) {
        throw new Error('Failed to summarize text')
      }

      setSummaries((prev) => [{summary: data.summary, id: Date.now(), title: data.title}, ...prev])

    } catch (err) {
      setError('An error occurred while summarizing the text. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-100">AI Text Summarizer</h1>
        <p className="text-center text-gray-400 mb-8">
          Quickly summarize any text using our advanced AI technology
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea 
            placeholder="Enter your text here to summarize (minimum 50 characters)"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[200px] bg-gray-800 text-gray-100 border-gray-700 focus:border-gray-600 focus:ring-gray-600"
          />
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={inputText.length < 50 || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Summarizing...
              </>
            ) : (
              'Summarize'
            )}
          </Button>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-4 bg-red-900 border-red-800 text-red-100">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <ul className="gap-4">
          {summaries.length > 0 && (
            summaries.map((summary) => (
              <li key={summary.id}>
                <Card className="mt-8 bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-100">Summary for {summary.title}</CardTitle>
                    <CardDescription className="text-gray-400">Here's your summarized text:</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{summary.summary.split("\n\n").map((str: any) => <><p>{str}</p><br/></>)}</p>
                  </CardContent>
                </Card>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}
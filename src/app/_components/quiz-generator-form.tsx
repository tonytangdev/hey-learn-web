"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { BookOpen, FileText, Type } from "lucide-react"
import { useState } from "react"
import { generateQuiz } from "../_actions/generate-quiz"
import { formatNumber } from "@/lib/numbers"
import { GenerateButton } from "./generate-button"

const MAX_CHARACTERS = 50000

export const QuizGeneratorForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState("")

  const charCount = text.length
  const remaining = MAX_CHARACTERS - charCount
  const isWarning = remaining < 1000
  const isDanger = remaining < 100

  const onGenerateQuiz = async () => {
    try {
      setIsLoading(true)
      await generateQuiz(text)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Tabs defaultValue="text" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
          <TabsTrigger value="text" className="flex items-center gap-2">
            <Type className="h-4 w-4" />
            Paste Text
          </TabsTrigger>
          <div
            className="flex items-center justify-center gap-2 h-full text-sm font-medium text-muted-foreground bg-muted/40 rounded-md cursor-not-allowed relative group"
            aria-disabled="true"
          >
            <FileText className="h-4 w-4" />
            Upload File
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Coming soon!
            </div>
          </div>
        </TabsList>

        <div className="rounded-xl border bg-background/60 p-4 backdrop-blur-sm">
          <TabsContent value="text" className="space-y-4 mt-0">
            <Textarea
              placeholder="Paste your study material, article, or any text you want to learn from..."
              className="min-h-[200px] text-lg"
              value={text}
              maxLength={MAX_CHARACTERS}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span className={`${isWarning ? (isDanger ? "text-red-500" : "text-amber-500") : ""}`}>
                {formatNumber(charCount)}/{formatNumber(MAX_CHARACTERS)} characters
              </span>
              <span>Maximum {formatNumber(MAX_CHARACTERS)} characters</span>
            </div>
            <div className="flex justify-end">
              <GenerateButton isLoading={isLoading} onClick={onGenerateQuiz} />
            </div>
          </TabsContent>

          <TabsContent value="file" className="space-y-4 mt-0">
            <div className="flex flex-col items-center justify-center min-h-[200px] rounded-lg border-2 border-dashed border-muted-foreground/20 p-8">
              <BookOpen className="h-8 w-8 mb-4 text-muted-foreground" />
              <div className="space-y-2 text-center">
                <p className="text-sm text-muted-foreground">Upload your study material</p>
                <p className="text-xs text-muted-foreground">Support for PDF, DOC, DOCX, and TXT files</p>
              </div>
              <Input type="file" accept=".txt,.doc,.docx,.pdf" className="cursor-pointer mt-4" />
            </div>
            <div className="flex justify-end">
              <GenerateButton isLoading={isLoading} onClick={onGenerateQuiz} />
            </div>
          </TabsContent>
        </div>
      </Tabs >
    </div >
  )
}
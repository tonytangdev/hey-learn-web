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
    setIsLoading(true)
    await generateQuiz({
      textInput: text,
      userId: 'user_28785fc7-d81d-4775-82ae-440e8434b59e',
      organizationId: 'org_8b6e8779-adde-4ee0-81c9-4d6d0deb23f2'
    })
    setIsLoading(false)
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Tabs defaultValue="text" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
          <TabsTrigger value="text" className="flex items-center gap-2">
            <Type className="h-4 w-4" />
            Paste Text
          </TabsTrigger>
          <TabsTrigger value="file" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Upload File
          </TabsTrigger>
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
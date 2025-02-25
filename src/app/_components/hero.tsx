import { QuizGeneratorForm } from "./quiz-generator-form"

export const Hero = () => {
  return (
    <section className="relative pt-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Turn Any Text into an
              <span className="text-primary"> Interactive Quiz</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Upload your study material or paste any text, and our AI will instantly generate engaging
              multiple-choice questions. Perfect for students, teachers, and self-learners.
            </p>
          </div>

          <QuizGeneratorForm />
        </div>
      </div>
    </section>
  )
}
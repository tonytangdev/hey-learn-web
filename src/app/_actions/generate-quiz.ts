"use server";

import { axiosClient } from "@/lib/http";
import { auth } from "@clerk/nextjs/server";

export async function generateQuiz(text: string) {
  const { userId } = await auth();

  const params = {
    textInput: text,
    userId: userId,
  };

  const { data, status } = await axiosClient.post<{
    message: string;
  }>("/quiz/generate", params, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (status !== 201) {
    throw new Error("Failed to generate quiz");
  }

  return data;
}

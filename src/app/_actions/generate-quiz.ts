"use server";

import { axiosClient } from "@/lib/http";

export async function generateQuiz(params: {
  textInput: string;
  userId: string;
  organizationId: string;
}) {
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

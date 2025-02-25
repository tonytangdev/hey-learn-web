"use server";

export async function generateQuiz(params: {
  textInput: string;
  userId: string;
  organizationId: string;
}) {
  const res = await fetch(`${process.env.API_URL}/quiz/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  const data = (await res.json()) as {
    message: string;
  };
  return data;
}

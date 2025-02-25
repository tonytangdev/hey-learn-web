import { axiosClient } from "@/lib/http";

export async function createUser(userId: string, email: string) {
  const { data, status } = await axiosClient.post(
    "/users",
    {
      id: userId,
      email,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (status !== 201) {
    throw new Error("Failed to create user");
  }

  return data;
}

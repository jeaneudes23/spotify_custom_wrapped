"use server"

import { signIn, signOut } from "@/auth"
import { AuthError } from "next-auth";

export async function authenticate(formData: FormData): Promise<{error: string} | undefined>{
  try {
    await signIn('credentials', {...Object.fromEntries(formData),redirectTo: '/home'} , )    
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong"};
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut({
    redirect: true,
    redirectTo: '/'
  })
}
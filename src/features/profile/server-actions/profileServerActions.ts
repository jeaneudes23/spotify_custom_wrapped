"use server"

import { signIn, signOut } from "@/auth"
import { redirect } from "next/navigation"

export async function authenticate(formData: FormData): Promise<{ok: boolean}| undefined>{
  let errorOccurred = false;
  try {
    await signIn('credentials', Object.fromEntries(formData) )    
  } catch (error) {
    console.log(error)
    errorOccurred = true;
    return {ok: false}
  } finally {
    if (!errorOccurred) {
      redirect('/home');
    }
  }
}

export async function logout() {
  await signOut({
    redirect: true,
    redirectTo: '/'
  })
}
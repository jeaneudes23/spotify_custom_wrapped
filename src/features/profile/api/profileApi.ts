import api from "@/lib/api";
import { isAxiosError } from "axios";

export async function getProfile () {
  try {
    const response = await api.get('me')
    return response.data
  } catch (error) { 
    if (isAxiosError(error)) {
      console.log(error.response?.data)
    }
  }
}
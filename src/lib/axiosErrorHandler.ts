import { isAxiosError } from "axios";

export function logAxiosRequestError(error: unknown) {
  if (isAxiosError(error)) {
    console.log(error.response?.data)
  } else {
    console.log(error)
  }
}
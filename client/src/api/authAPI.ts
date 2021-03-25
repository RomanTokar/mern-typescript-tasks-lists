import axios from 'axios'
import { ErrorResponse } from './ErrorResponse'

export interface SignInResponse extends ErrorResponse {
  token: string
  userId: string
}

type SignInFormData = {
  email: string
  password: string
}

type SignUpFormData = {
  name: string
  email: string
  password: string
}

export const signIn = async (formData: SignInFormData) => {
  return (await axios.post<SignInResponse>('/api/auth/signIn', formData)).data
}

export const signUp = async (formData: SignUpFormData) => {
  return (await axios.post<ErrorResponse>('/api/auth/signUp', formData)).data
}

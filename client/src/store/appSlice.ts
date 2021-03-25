import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signIn } from '../api/authAPI'

type User = {
  id: string
  name: string
  email: string
}

type SignInUserFormData = {
  email: string
  password: string
}

type SignInResponseData = {
  token: string
  userId: string
}

type AppState = {
  initialized: boolean
  token: string
  user: User | null
}

const initialState: AppState = {
  initialized: false,
  token: '',
  user: null,
}

export const signInThunk = createAsyncThunk<
  Promise<SignInResponseData>,
  SignInUserFormData
>('signIn', async formData => {
  return signIn(formData)
})

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signInThunk.pending.type, (state, action) => {})
    builder.addCase(signInThunk.fulfilled.type, (state, action) => {})
    builder.addCase(signInThunk.rejected.type, (state, action) => {})
  },
})

export default appSlice.reducer

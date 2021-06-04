import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { TOKEN_POST } from '../Api'

type FetchTokenType = {
  username: string
  password: string
}

type initialStateType = {
  loading: boolean
  error: null | string
  status: null | string
  token: null | string
}

const initialState: initialStateType = {
  loading: false,
  error: null,
  status: null,
  token: null
}

export const fetchToken = createAsyncThunk(
  'fetchToken',
  async ({ username, password }: FetchTokenType) => {
    try {
      const { url, options } = TOKEN_POST({ username, password })
      const response = await fetch(url, options as RequestInit | undefined)
      const data = await response.json()

      if (response.ok === false) throw new Error(data.message)
      return data
    } catch (error) {
      console.log(error.message)
    }
  }
)

export const tokenSlice = createSlice({
  name: 'token',
  initialState: initialState,
  reducers: {
    resetToken: (state) => {
      state.loading = false
      state.error = null
      state.status = null
      state.token = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToken.pending, (state) => {
      state.status = 'loading'
      state.loading = true
    }),
      builder.addCase(fetchToken.fulfilled, (state, action) => {
        if (!action.payload) {
          state.status = 'incorrect data'
          state.loading = false
          return
        }

        state.token = action.payload.token
        state.status = 'succeeded'
        state.loading = false
        localStorage.setItem('token', action.payload.token)
      }),
      builder.addCase(fetchToken.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ? action.error.message : null
        state.loading = false
      })
  }
})

export const tokenActions = tokenSlice.actions

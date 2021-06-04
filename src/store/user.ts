import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { USER_GET } from '../Api'

type initialStateType = {
  id: string | null
  name: string | null
  username: string | null
  email: string | null
  status: string | null
  loading: boolean
  error: string | null
}

const initialState: initialStateType = {
  id: null,
  name: null,
  username: null,
  email: null,
  status: null,
  loading: false,
  error: null
}

export const fetchUser = createAsyncThunk(
  'fetchUser',
  async (token: string) => {
    try {
      const { url, options } = USER_GET(token)
      const response = await fetch(url, options as RequestInit | undefined)
      const data = await response.json()

      if (response.ok === false) throw new Error(data.message)

      return data
    } catch (error) {
      console.log(error.message)
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    resetUser: (state) => {
      state.id = null
      state.name = null
      state.username = null
      state.email = null
      state.status = null
      state.loading = false
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = 'loading'
      state.loading = true
    }),
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        if (!action.payload) {
          state.status = null
          state.loading = false

          return
        }

        state.status = 'succeeded'
        state.loading = false
        state.id = action.payload.id
        state.name = action.payload.nome
        state.username = action.payload.username
        state.email = action.payload.email
      }),
      builder.addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ? action.error.message : null
        state.loading = false
      })
  }
})

export const userActions = userSlice.actions

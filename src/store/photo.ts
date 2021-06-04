import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { PHOTO_GET } from '../Api'

export type CommentType = {
  commentID: number
  commentContent: string
  commentAuthor: string
}

export type PhotoStateType = {
  id: string
  author: string
  title: string
  views: string
  weight: string
  age: string
  src: string
}

type initialStateType = {
  error: null | string
  status: null | string
  photo: null | PhotoStateType
  comments: null | CommentType[]
}

const initialState: initialStateType = {
  error: null,
  status: null,
  photo: null,
  comments: null
}

export const fetchPhoto = createAsyncThunk('fetchPhoto', async (id: string) => {
  try {
    const { url, options } = PHOTO_GET(id)
    const response = await fetch(url, options as RequestInit | undefined)
    const data = await response.json()

    if (response.ok === false) throw new Error(data.message)
    return data
  } catch (error) {
    console.log(error.message)
  }
})

export const photoSlice = createSlice({
  name: 'photo',
  initialState: initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments?.push({
        commentID: action.payload.commentID,
        commentContent: action.payload.commentContent,
        commentAuthor: action.payload.commentAuthor
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhoto.pending, (state) => {
      state.status = 'loading'
    }),
      builder.addCase(fetchPhoto.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = 'succeeded'

          const {
            id,
            author,
            title,
            acessos: views,
            peso: weight,
            idade: age,
            src
          } = action.payload.photo

          state.photo = { id, author, title, views, weight, age, src }

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          state.comments = action.payload.comments.map((comment: any) => ({
            commentID: comment.comment_ID,
            commentContent: comment.comment_content,
            commentAuthor: comment.comment_author
          }))

          return
        }

        state.status = 'failed'
      }),
      builder.addCase(fetchPhoto.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ? action.error.message : null
      })
  }
})

export const photoActions = photoSlice.actions

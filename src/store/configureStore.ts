import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit'

import { photoSlice } from './photo'
import { tokenSlice } from './token'
import { userSlice } from './user'

const middleware = [...getDefaultMiddleware()]

const reducer = combineReducers({
  photo: photoSlice.reducer,
  token: tokenSlice.reducer,
  user: userSlice.reducer
})

const store = configureStore({ reducer, middleware })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

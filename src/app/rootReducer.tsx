import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from 'shared/api'
import { themeSlice } from 'entities/theme'
import { sessionSlice } from 'entities/session'

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
})

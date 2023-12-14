import {
  createListenerMiddleware,
  type TypedStartListening,
} from '@reduxjs/toolkit'

import { logoutThunk } from '../../logout/model/logout'

import { RootState, AppDispatch } from 'app/AppStore'
import { invalidateAccessToken } from 'shared/api'

export const invalidateAccessTokenListener = createListenerMiddleware()

export type TypedListening = TypedStartListening<RootState, AppDispatch>

export const startInvalidateAccessTokenListener =
  invalidateAccessTokenListener.startListening as TypedListening

startInvalidateAccessTokenListener({
  actionCreator: invalidateAccessToken,
  effect: async (_, api) => {
    api.dispatch(logoutThunk())
  },
})

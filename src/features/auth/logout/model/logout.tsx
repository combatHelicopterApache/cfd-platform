import { createAsyncThunk } from '@reduxjs/toolkit'

import { RootState } from 'app/AppStore'

import { sessionApi, clearSessionData } from 'entities/session'
import { SESSION_TAG } from 'shared/api'

export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
  'authentication/logout',
  async (_: unknown, { dispatch }) => {
    dispatch(clearSessionData())

    dispatch(sessionApi.util.invalidateTags([SESSION_TAG]))
  },
)

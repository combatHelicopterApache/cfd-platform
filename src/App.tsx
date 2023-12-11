import React from 'react'

import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { appRouter } from 'shared/routing/AppRouter'

import { appStore, persistedStore } from 'store/store'

export const App = () => {
  return (
    <ReduxProvider store={appStore}>
      <PersistGate loading={null} persistor={persistedStore}>
        <RouterProvider router={appRouter()} />
      </PersistGate>
    </ReduxProvider>
  )
}

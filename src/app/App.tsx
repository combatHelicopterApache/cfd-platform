import React, { Suspense } from 'react'

import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { appRouter } from 'app/AppRouter'

import { appStore, persistedStore } from 'app/AppStore'
import ErrorBoundary from 'services/ErrorBoundary/ErrorBoundary'
import { Loader } from 'shared/ui'

export const App = () => {
  return (
    <ErrorBoundary>
      <ReduxProvider store={appStore}>
        <PersistGate loading={null} persistor={persistedStore}>
          <Suspense fallback={<Loader />}>
            <RouterProvider router={appRouter()} />
          </Suspense>
        </PersistGate>
      </ReduxProvider>
    </ErrorBoundary>
  )
}

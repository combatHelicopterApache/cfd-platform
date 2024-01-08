import React, { Suspense } from 'react'

import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { appRouter } from 'app/AppRouter'
import { Localization } from 'services/Localization/Localization'

import { appStore, persistedStore } from 'app/AppStore'
import ErrorBoundary from 'services/ErrorBoundary/ErrorBoundary'
import { Loader } from 'shared/ui'

export const App = () => {
  return (
    <ErrorBoundary>
      <ReduxProvider store={appStore}>
        <PersistGate loading={null} persistor={persistedStore}>
          <Suspense fallback={<Loader />}>
            <Localization>
              <RouterProvider router={appRouter()} />
            </Localization>
          </Suspense>
        </PersistGate>
      </ReduxProvider>
    </ErrorBoundary>
  )
}

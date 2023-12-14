import { type ReactElement } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import { lazyWithRetry } from '../shared/routing/lazyWithRetry'

import { useAppSelector } from 'app/AppStore'

import { selectIsAuthorized } from 'entities/session'

// import { featureToggleLoader } from 'entities/featureToggle'

const LoginPage = lazyWithRetry(() => import('pages/LoginPage'))

const MainPage = lazyWithRetry(() => import('pages/MainPage'))

const SettingsPage = lazyWithRetry(() => import('pages/SettingsPage'))

type GuestGuardProps = {
  children: ReactElement
}

function GuestGuard({ children }: GuestGuardProps) {
  const isAuthorized = useAppSelector(selectIsAuthorized)

  if (!isAuthorized) return <Navigate to='/login' />

  return children
}

type AuthGuardProps = {
  children: ReactElement
}

function AuthGuard({ children }: AuthGuardProps) {
  const isAuthorized = useAppSelector(selectIsAuthorized)

  if (isAuthorized) return <Navigate to='/' />

  return children
}

export const appRouter = () =>
  createBrowserRouter([
    {
      element: (
        <AuthGuard>
          <LoginPage />
        </AuthGuard>
      ),
      errorElement: <div>error</div>,
      path: '/login',
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/',
      element: (
        <GuestGuard>
          <MainPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/settings',
      element: (
        <GuestGuard>
          <SettingsPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
  ])

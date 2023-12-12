import { type ReactElement } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import { lazyWithRetry } from './lazyWithRetry'

// import { useAppSelector, appStore } from 'store/store'

const LoginPage = lazyWithRetry(() => import('pages/LoginPage'))

const MainPage = lazyWithRetry(() => import('pages/MainPage'))

const SettingsPage = lazyWithRetry(() => import('pages/SettingsPage'))

type GuestGuardProps = {
  children: ReactElement
}

function GuestGuard({ children }: GuestGuardProps) {
  // const isAuthorized = useAppSelector(selectIsAuthorized)

  // const isAuthorized = false

  // if (!isAuthorized) return <Navigate to='/login' />

  return children
}

type AuthGuardProps = {
  children: ReactElement
}

function AuthGuard({ children }: AuthGuardProps) {
  // const isAuthorized = useAppSelector(selectIsAuthorized)
  // const isAuthorized = useAppSelector(selectIsAuthorized)

  // const isAuthorized = true

  // if (isAuthorized) return <Navigate to='/' />

  return children
}

export const appRouter = () =>
  createBrowserRouter([
    {
      element: (
        <GuestGuard>
          <LoginPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      path: '/login',
    },
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainPage />
        </AuthGuard>
      ),
      errorElement: <div>error</div>,
    },
    {
      path: '/settings',
      element: (
        <AuthGuard>
          <SettingsPage />
        </AuthGuard>
      ),
      errorElement: <div>error</div>,
    },
  ])

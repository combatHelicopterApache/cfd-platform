import { type ReactElement } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

import { useAppSelector, appStore } from 'store/store'

import { AuthLayout } from 'layouts/AuthLayout/AuthLayout'
import { MainLayout } from 'layouts/MainLayout/MainLayout'

type GuestGuardProps = {
  children: ReactElement
}

function GuestGuard({ children }: GuestGuardProps) {
  // const isAuthorized = useAppSelector(selectIsAuthorized)

  const isAuthorized = false

  if (!isAuthorized) return <Navigate to='/login' />

  return children
}

type AuthGuardProps = {
  children: ReactElement
}

function AuthGuard({ children }: AuthGuardProps) {
  // const isAuthorized = useAppSelector(selectIsAuthorized)
  // const isAuthorized = useAppSelector(selectIsAuthorized)

  const isAuthorized = true

  if (isAuthorized) return <Navigate to='/' />

  return children
}

export const appRouter = () =>
  createBrowserRouter([
    {
      element: <AuthLayout />,
      errorElement: <div>error</div>,

      children: [
        {
          path: '/login',
          element: (
            <GuestGuard>
              <div>login</div>
            </GuestGuard>
          ),
        },
      ],
    },
    {
      element: <MainLayout />,
      errorElement: <div>error</div>,

      children: [
        {
          path: '/',
          element: (
            <AuthGuard>
              <div>main</div>
            </AuthGuard>
          ),
        },
        {
          path: '/settings',
          element: (
            <AuthGuard>
              <div>settings</div>
            </AuthGuard>
          ),
        },
      ],
    },
  ])

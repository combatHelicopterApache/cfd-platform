import React from 'react'
import { AuthLayout } from 'layouts/AuthLayout/AuthLayout'
import { Login } from 'features/Login/Login'

export const LoginPage = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  )
}

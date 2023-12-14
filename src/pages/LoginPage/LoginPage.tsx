import React, { useCallback } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import { AuthLayout } from 'layouts/AuthLayout/AuthLayout'
import { LoginForm } from 'features/auth/login/ui/LoginForm/LoginForm'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onComplete = useCallback(() => {
    navigate(location.state?.returnUrl ?? '/')
  }, [navigate])

  return (
    <AuthLayout>
      <LoginForm onComplete={onComplete} />
    </AuthLayout>
  )
}

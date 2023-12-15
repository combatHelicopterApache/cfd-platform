import React, { useCallback } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import { SignIn } from 'widgets/SignIn'
import { PageLayout } from 'layouts/PageLayout/PageLayout'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onComplete = useCallback(() => {
    navigate(location.state?.returnUrl ?? '/')
  }, [navigate])

  return (
    <PageLayout headerHide footerHide>
      <SignIn />
    </PageLayout>
  )
}

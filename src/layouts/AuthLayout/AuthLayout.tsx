import React, { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}: AuthLayoutProps) => {
  return <>{children}</>
}

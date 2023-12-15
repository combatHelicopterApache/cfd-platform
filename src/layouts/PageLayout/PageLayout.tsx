import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { clearAllBodyScrollLocks } from 'body-scroll-lock'
import styles from './PageLayout.module.sass'

import { Header } from 'widgets/Header/ui/Header'
import { Footer } from 'widgets/Footer/ui/Footer'

export const PageLayout = ({
  headerHide,
  children,
  footerHide,
  headerWide,
}) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    clearAllBodyScrollLocks()
  }, [pathname])

  return (
    <>
      <div className={styles.page}>
        {!headerHide && <Header headerWide={headerWide} />}
        <div className={styles.inner}>{children}</div>
        {!footerHide && <Footer />}
      </div>
    </>
  )
}

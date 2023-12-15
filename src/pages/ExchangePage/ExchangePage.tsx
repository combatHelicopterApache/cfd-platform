import React from 'react'
import { PageLayout } from 'layouts/PageLayout/PageLayout'
import { Exchange } from 'widgets/Exchange'

export const ExchangePage = () => {
  return (
    <PageLayout headerWide footerHide>
      <Exchange />
    </PageLayout>
  )
}

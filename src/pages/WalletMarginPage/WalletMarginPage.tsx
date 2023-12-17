import React from 'react'
import { PageLayout } from 'layouts/PageLayout/PageLayout'
import { WalletMargin } from 'widgets/WalletMargin'

export const WalletMarginPage = () => {
  return (
    <PageLayout headerWide footerHide>
      <WalletMargin />
    </PageLayout>
  )
}

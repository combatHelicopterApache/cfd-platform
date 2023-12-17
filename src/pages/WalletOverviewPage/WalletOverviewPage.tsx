import React from 'react'
import { PageLayout } from 'layouts/PageLayout/PageLayout'
import { WalletOverview } from 'widgets/WalletOverview'

export const WalletOverviewPage = () => {
  return (
    <PageLayout headerWide footerHide>
      <WalletOverview />
    </PageLayout>
  )
}

import React from 'react'
import { PageLayout } from 'layouts/PageLayout/PageLayout'
import { WalletOverviewDetails } from 'widgets/WalletOverviewDetails'

export const WalletOverviewDetailsPage = () => {
  return (
    <PageLayout headerWide footerHide>
      <WalletOverviewDetails />
    </PageLayout>
  )
}

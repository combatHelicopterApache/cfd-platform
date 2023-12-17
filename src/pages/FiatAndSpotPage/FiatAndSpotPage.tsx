import React from 'react'
import { PageLayout } from 'layouts/PageLayout/PageLayout'
import { FiatAndSpot } from 'widgets/FiatAndSpot'

export const FiatAndSpotPage = () => {
  return (
    <PageLayout headerWide footerHide>
      <FiatAndSpot />
    </PageLayout>
  )
}

import React, { useState } from 'react'

import {
  SelectCurrency,
  ImportantNotes,
  PaymentDetails,
} from 'features/deposit'

import { Bidding } from 'shared/ui'
import { Popular } from 'entities/Popular/Popular'

const steps = ['Select currency', 'Important notes', 'Payment details']

export const Deposit = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Bidding title='Deposit fiat' items={steps} activeIndex={activeIndex}>
        {activeIndex === 0 && (
          <SelectCurrency goNext={() => setActiveIndex(1)} />
        )}
        {activeIndex === 1 && (
          <ImportantNotes goNext={() => setActiveIndex(2)} />
        )}
        {activeIndex === 2 && <PaymentDetails />}
      </Bidding>
      <Popular classSection='section-bg section-mb0' />
    </>
  )
}

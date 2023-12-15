import React, { useState } from 'react'

import { Popular } from 'entities/Popular/Popular'

import { SelectCrypto, Bidding } from 'shared/ui'

import { ConfirmOrder, PaymentInfo, EnterAmount } from 'features/buy'

const steps = ['Select crypto', 'Enter amount', 'Payment info', 'Confirm order']

export const Buy = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Bidding title='Buy crypto' items={steps} activeIndex={activeIndex}>
        {activeIndex === 0 && <SelectCrypto goNext={() => setActiveIndex(1)} />}
        {activeIndex === 1 && (
          <EnterAmount
            goBack={() => setActiveIndex(0)}
            goNext={() => setActiveIndex(2)}
          />
        )}
        {activeIndex === 2 && (
          <PaymentInfo
            goBack={() => setActiveIndex(1)}
            goNext={() => setActiveIndex(3)}
          />
        )}
        {activeIndex === 3 && (
          <ConfirmOrder
            goBack={() => setActiveIndex(2)}
            goStart={() => setActiveIndex(0)}
          />
        )}
      </Bidding>
      <Popular classSection='section-bg section-mb0' />
    </>
  )
}

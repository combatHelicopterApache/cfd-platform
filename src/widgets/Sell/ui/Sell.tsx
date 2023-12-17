import React, { useState } from 'react'
import { EnterAmount, Confirm } from 'features/sell'

import { Bidding, SelectCrypto } from 'shared/ui'

const steps = ['Select crypto', 'Enter amount', 'Confirm']

export const Sell = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Bidding title='Sell crypto' items={steps} activeIndex={activeIndex}>
        {activeIndex === 0 && <SelectCrypto goNext={() => setActiveIndex(1)} />}
        {activeIndex === 1 && (
          <EnterAmount
            goBack={() => setActiveIndex(0)}
            goNext={() => setActiveIndex(2)}
          />
        )}
        {activeIndex === 2 && (
          <Confirm
            goBack={() => setActiveIndex(1)}
            goFinish={() => setActiveIndex(0)}
          />
        )}
      </Bidding>
    </>
  )
}

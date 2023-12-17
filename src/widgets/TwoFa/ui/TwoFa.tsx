import React, { useState } from 'react'

import { Profile } from 'shared/ui'

import { TwoFaEnabled, TwoFaDisabled } from 'features/twoFa'

const breadcrumbs = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: '2FA',
  },
]

export const TwoFa = () => {
  const [disabled, setDisabled] = useState(false)

  return (
    <Profile title='2FA' breadcrumbs={breadcrumbs}>
      {disabled ? (
        <TwoFaDisabled goEnabled={() => setDisabled(false)} />
      ) : (
        <TwoFaEnabled goDisabled={() => setDisabled(true)} />
      )}
    </Profile>
  )
}

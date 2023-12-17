import React, { useState } from 'react'
import styles from './ApiKeys.module.sass'

import { Profile } from 'shared/ui'

import {
  ApiKeysDisabled,
  ApiKeysConfirm,
  ApiKeysEnabled,
} from 'features/apiKeys'

const breadcrumbs = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'API keys',
  },
]

export const ApiKeys = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <Profile title='API keys' breadcrumbs={breadcrumbs}>
      {activeIndex === 0 && (
        <ApiKeysDisabled goNext={() => setActiveIndex(1)} />
      )}
      {activeIndex === 1 && <ApiKeysConfirm goNext={() => setActiveIndex(2)} />}
      {activeIndex === 2 && <ApiKeysEnabled goNext={() => setActiveIndex(0)} />}
    </Profile>
  )
}

import React from 'react'
import cn from 'classnames'
import styles from './Details.module.sass'
import { Panel } from './Panel/Panel'
import { Trade } from './Trade/Trade'

export const Details = () => {
  return (
    <div className={cn('section', styles.details)}>
      <div className={cn('container', styles.container)}>
        <Panel />
        <Trade />
      </div>
    </div>
  )
}

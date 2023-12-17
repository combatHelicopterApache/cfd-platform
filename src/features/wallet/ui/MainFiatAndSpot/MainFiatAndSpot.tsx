import React from 'react'
import cn from 'classnames'
import styles from './MainFiatAndSpot.module.sass'

const items = [
  {
    title: 'Fiat and Spot balance',
    content: '0.27894652',
    currency: 'BTC',
    price: '$10,098.36',
  },
  {
    title: 'Spot balance',
    content: '0.13894652',
    currency: 'BTC',
    price: '$10,098.36',
  },
  {
    title: 'Fiat balance',
    content: '0.18564652',
    currency: 'BTC',
    price: '$10,098.36',
  },
  {
    title: "Yesterday's PNL",
    content: '0.00000000',
    currency: 'BTC',
    price: '$10,098.36',
  },
]

export const MainFiatAndSpot = () => {
  return (
    <div className={styles.main}>
      <h4 className={cn('h4', styles.title)}>Fiat and Spot</h4>
      <div className={styles.list}>
        {items.map((x, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.info}>{x.title}</div>
            <div className={styles.line}>
              <div className={styles.currency}>{x.content}</div>
              <div className={cn('category-green', styles.category)}>
                {x.currency}
              </div>
            </div>
            <div className={styles.price}>{x.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

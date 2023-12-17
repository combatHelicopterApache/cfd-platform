import React, { useState } from 'react'
import cn from 'classnames'
import styles from './FiatAndSpot.module.sass'
import { Link } from 'react-router-dom'

import { Wallet, Funds, Modal, Withdraw } from 'shared/ui'

import { MainFiatAndSpot } from 'features/wallet'

export const FiatAndSpot = () => {
  const [visibleWithdraw, setVisibleWithdraw] = useState(false)

  return (
    <>
      <Wallet>
        <MainFiatAndSpot />
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.head}>Funds</div>
            <div className={styles.body}>
              <Funds>
                <Link
                  className={cn('button-stroke button-small', styles.button)}
                  to='/buy-crypto'
                >
                  Buy
                </Link>
                <Link
                  className={cn('button-stroke button-small', styles.button)}
                  to='/deposit'
                >
                  Deposit
                </Link>
                <button
                  className={cn('button-stroke button-small', styles.button)}
                  onClick={() => setVisibleWithdraw(true)}
                >
                  Withdraw
                </button>
                <Link
                  className={cn('button-stroke button-small', styles.button)}
                  to='/exchange'
                >
                  Trade
                </Link>
              </Funds>
            </div>
          </div>
        </div>
      </Wallet>
      <Modal
        visible={visibleWithdraw}
        onClose={() => setVisibleWithdraw(false)}
      >
        <Withdraw />
      </Modal>
    </>
  )
}

import React, { useState } from 'react'
import cn from 'classnames'
import styles from './WalletMargin.module.sass'
import { Link } from 'react-router-dom'
import { Wallet, Modal, Transfer, Funds, Borrow } from 'shared/ui'

import { Main } from 'features/wallet'

export const WalletMargin = () => {
  const [visibleTransfer, setVisibleTransfer] = useState(false)
  const [visibleBorrow, setVisibleBorrow] = useState(false)

  return (
    <>
      <Wallet>
        <Main />
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.head}>Funds</div>
            <div className={styles.body}>
              <Funds>
                <button
                  className={cn('button-stroke button-small', styles.button)}
                  onClick={() => setVisibleTransfer(true)}
                >
                  Transfer
                </button>
                <button
                  className={cn('button-stroke button-small', styles.button)}
                  onClick={() => setVisibleBorrow(true)}
                >
                  Borrow
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
        visible={visibleTransfer}
        onClose={() => setVisibleTransfer(false)}
      >
        <Transfer />
      </Modal>
      <Modal visible={visibleBorrow} onClose={() => setVisibleBorrow(false)}>
        <Borrow />
      </Modal>
    </>
  )
}

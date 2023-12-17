import React from 'react'
import cn from 'classnames'
import styles from './Loader.module.sass'

export const Loader = ({ className, color }) => {
  return (
    <div
      className={cn(styles.loader, className, {
        [styles.loaderWhite]: color === 'white',
      })}
    ></div>
  )
}

import React, { useState } from 'react'
import cn from 'classnames'
import styles from './Header.module.sass'
import { Link, NavLink } from 'react-router-dom'

import { Image, Icon } from 'shared/ui'

import { Dropdown, Settings, User, Notifications, Theme } from 'features/header'

const navigation = [
  {
    title: 'Exchange',
    url: '/exchange',
  },
  {
    title: 'Buy',
    dropdown: [
      {
        title: 'Credit card',
        icon: 'user',
        url: '/buy',
      },
      {
        title: 'Bank deposit',
        icon: 'image',
        url: '/deposit',
      },
    ],
  },
  {
    title: 'Market',
    url: '/market',
  },
  {
    title: 'Discover',
    url: '/learn',
  },
]

export const Header = ({ headerWide }) => {
  const [visibleNav, setVisibleNav] = useState(false)

  return (
    <header className={cn(styles.header, { [styles.wide]: headerWide })}>
      <div className={cn('container', styles.container)}>
        <Link
          className={styles.logo}
          to='/'
          onClick={() => setVisibleNav(false)}
        >
          <Image
            className={styles.picDesktop}
            src='/images/logo-light.svg'
            srcDark='/images/logo-dark.svg'
            alt='BitCloud'
          />
          <img
            className={styles.picMobile}
            src='/images/logo.svg'
            alt='BitCloud'
          />
        </Link>
        <div className={styles.wrapper}>
          <div className={cn(styles.wrap, { [styles.visible]: visibleNav })}>
            <nav className={styles.nav}>
              {navigation.map((x, index) =>
                x.dropdown ? (
                  <Dropdown
                    className={styles.dropdown}
                    key={index}
                    item={x}
                    setValue={setVisibleNav}
                  />
                ) : (
                  <NavLink
                    className={styles.item}
                    activeClassName={styles.active}
                    onClick={() => setVisibleNav(false)}
                    to={x.url}
                    key={index}
                  >
                    {x.title}
                  </NavLink>
                ),
              )}
            </nav>
            <NavLink
              className={cn('button-stroke', styles.button)}
              activeClassName={styles.active}
              to='/wallet-overview'
              onClick={() => setVisibleNav(false)}
            >
              Wallet
            </NavLink>
            {/* <div className={styles.btns}>
              <Link
                className={cn("button-small", styles.button)}
                activeClassName={styles.active}
                to="/sign-up"
              >
                Sign Up
              </Link>
              <Link
                className={cn("button-stroke button-small", styles.button)}
                activeClassName={styles.active}
                to="/sign-in"
              >
                Login
              </Link>
            </div> */}
          </div>
          <Settings className={styles.settings} />
          <div className={styles.control}>
            <NavLink
              className={styles.activity}
              activeClassName={styles.active}
              to='/activity'
            >
              <Icon name='lightning' size='24' />
            </NavLink>
            <Notifications className={styles.notifications} />
            <NavLink
              className={cn('button-stroke button-small', styles.button)}
              activeClassName={styles.active}
              to='/wallet-overview'
            >
              Wallet
            </NavLink>
            <Theme className={styles.theme} icon />
            <User className={styles.user} />
          </div>
          {/* <div className={styles.btns}>
            <Link
              className={cn("button-small", styles.button)}
              activeClassName={styles.active}
              to="/sign-up"
              onClick={() => setVisibleNav(false)}
            >
              Sign Up
            </Link>
            <Link
              className={cn("button-stroke button-small", styles.button)}
              activeClassName={styles.active}
              to="/sign-in"
              onClick={() => setVisibleNav(false)}
            >
              Login
            </Link>
          </div> */}
          <button
            className={cn(styles.burger, { [styles.active]: visibleNav })}
            onClick={() => setVisibleNav(!visibleNav)}
          ></button>
        </div>
      </div>
    </header>
  )
}

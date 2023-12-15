import React from 'react'
import { Main, Details } from 'features/market'
import { Lessons } from 'shared/ui'

export const Market = () => {
  return (
    <>
      <Main />
      <Details />
      <Lessons classSection='section' />
    </>
  )
}

import React, { useRef } from 'react'
import { Main, Learn, Trend, Steps, Download, News } from 'features/home'
import { Popular } from 'entities/Popular/Popular'

export const Home = () => {
  const scrollToRef = useRef(null)

  return (
    <>
      <Main scrollToRef={scrollToRef} />
      <Learn scrollToRef={scrollToRef} />
      <Trend />
      <Popular classSection='section-bg section-mb0' />
      <Download />
      <News classSection='section-bg' />
      <Steps />
    </>
  )
}

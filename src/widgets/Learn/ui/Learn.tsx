import React, { useRef } from 'react'

import { Main, Releases, Catalog } from 'features/learn'
import { News } from 'entities/News/News'

export const Learn = () => {
  const scrollToRef = useRef(null)
  const scrollToRefCatalog = useRef(null)

  return (
    <>
      <Main scrollToRef={scrollToRef} scrollToRefCatalog={scrollToRefCatalog} />
      <Releases scrollToRef={scrollToRef} />
      <Catalog scrollToRefCatalog={scrollToRefCatalog} />
      <News classSection='section-bg section-mb0' />
    </>
  )
}

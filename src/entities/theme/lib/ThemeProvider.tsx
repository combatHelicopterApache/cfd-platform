import { type ReactNode, useEffect } from 'react'

import { useAppSelector, useAppDispatch } from 'app/AppStore'

import { changeTheme, selectCurrentTheme } from '../model/slice'
import { type Theme } from '../model/types'

type Props = {
  theme?: Theme
  children: ReactNode
}

export function ThemeProvider({ children, theme }: Props) {
  const currentTheme = useAppSelector(selectCurrentTheme)

  const darkModeIsEnabled = true
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!darkModeIsEnabled) {
      return
    }

    if (theme && theme !== currentTheme) {
      dispatch(changeTheme(theme))

      return
    }

    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme, theme, darkModeIsEnabled])

  return <>{children}</>
}

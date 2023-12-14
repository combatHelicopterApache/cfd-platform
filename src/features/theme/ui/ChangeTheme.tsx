import React, { useCallback } from 'react'
import { changeTheme, selectCurrentTheme } from 'entities/theme'

import { useAppDispatch, useAppSelector } from 'app/AppStore'
import { Icon } from 'shared/ui/Icon/Icon'

export function ChangeTheme() {
  const currentTheme = useAppSelector(selectCurrentTheme)
  const dispatch = useAppDispatch()

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      dispatch(changeTheme(currentTheme === 'light' ? 'dark' : 'light'))
    },
    [currentTheme],
  )

  return (
    <div>
      <Icon
        onClick={onClick}
        type={currentTheme === 'light' ? 'moon' : 'sun'}
      />
    </div>
  )
}

import { logoutThunk } from '../model/logout'

import { useAppDispatch } from 'app/AppStore'

export const LogoutButton = () => {
  const dispatch = useAppDispatch()

  const onConfirmLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    e.preventDefault()

    dispatch(logoutThunk()).unwrap()
  }

  return (
    <a href='#' onClick={onConfirmLogout}>
      logout
    </a>
  )
}

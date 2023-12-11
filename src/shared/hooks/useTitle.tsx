import { useEffect } from 'react'

export const useTitle = (title = 'CRM') => {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = ''
    }
  }, [title])
}

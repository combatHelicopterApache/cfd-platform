import { lazy, LazyExoticComponent } from 'react'

export const lazyWithRetry = (
  componentImport: () => Promise<{ default: React.ComponentType<any> }>,
): LazyExoticComponent<React.ComponentType<any>> =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.localStorage.getItem('page-has-been-force-refreshed') || 'false',
    )

    try {
      const component = await componentImport()

      window.localStorage.setItem('page-has-been-force-refreshed', 'false')

      return component
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        // Assuming that the user is not on the latest version of the application.
        // Let's refresh the page immediately.
        window.localStorage.setItem('page-has-been-force-refreshed', 'true')
        return window.location.reload()
      }

      // The page has already been reloaded
      // Assuming that the user is already using the latest version of the application.
      // Let's let the application crash and raise the error.
      throw error
    }
  })
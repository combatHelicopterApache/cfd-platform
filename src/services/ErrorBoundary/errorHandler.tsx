export const errorHandler = () => {
  if (!navigator.cookieEnabled) return location.reload()
}

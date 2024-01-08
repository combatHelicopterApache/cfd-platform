import React from 'react'
import { IntlProvider } from 'react-intl'
import { LOCALES } from 'shared/i18n/locales'
import { messages } from 'shared/i18n/messages'

export const Localization = ({ children }) => {
  const locale = LOCALES.RUSSIAN
  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={locale}
    >
      {children}
    </IntlProvider>
  )
}

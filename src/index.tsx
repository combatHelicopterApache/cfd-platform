import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.scss'
import { App } from './app/App'
import reportWebVitals from './reportWebVitals'
import { __serverStartDatabaseMigration } from 'shared/server'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))

async function initApp() {
  const { apiMockWorker } = await import('./app/apiMockWorker')
  await apiMockWorker.start({
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
  })

  await __serverStartDatabaseMigration()
}

initApp().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})

reportWebVitals()
